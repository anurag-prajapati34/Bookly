import { createContext, useEffect, useRef, useState } from "react";

import { toTitleCase } from "../assets/utils";
import { json } from "react-router-dom";

const BookContext = createContext();
const BookContextProvider = ({ children }) => {


  const [bestSellers, setBestSellers] = useState([]);
const [currentDate,setCurrentDate]=useState();
  const [bestSellersBookDetails, setBestSellerBookDetails] = useState({});

  const [gogleAPIFetchCount, setGoogleAPIFetchCount] = useState(0);
const bestSellerRef=useRef();
const addToFavPopupRef=useRef();

const googleBookApiKey=import.meta.env.VITE_GOOGLE_BOOK_API_KEY;
const nytBookApiKey=import.meta.env.VITE_NYT_BOOK_API_KEY;


const scrollToView=(sectionId)=>{
if(sectionId==='bestSellers'){
  bestSellerRef.current.scrollIntoView({behavior:'smooth'})
}


}


const showAddToFavPopup=()=>{
  const show=  ()=>{
    addToFavPopupRef.current.classList.add('show');

  }
hideAddToFavPopup();
setTimeout(()=>{
  show();
},20)

 setTimeout(()=>{
  addToFavPopupRef.current.classList.remove('show');
 },3000)
}

const hideAddToFavPopup=()=>{
  
  addToFavPopupRef.current.classList.remove('show');
}


  useEffect(() => {
    const cacheBestSellers = localStorage.getItem("bestSellers");
const now=new Date();

    if (cacheBestSellers) {
      setBestSellers(JSON.parse(cacheBestSellers));
    } 
    else if(!cacheBestSellers || now.toDateString() !== currentDate.toDateString()) {


      async function fetchingNYTApi() {



        

      try{
        const response = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nytBookApiKey}`
        );

        const data = await response.json();

      
        setBestSellers(data.results.books);

        localStorage.setItem("bestSellers", JSON.stringify(data.results.books));
      }catch(error){
        alert("Unexpected error ! try after some time")
      }

      }

      fetchingNYTApi();
      setCurrentDate(now);
    }
  }, []);

  async function fetchBestSellerBookDetail(title, author) {
    

    const search = title + " " + author;



    const cacheKey = `bestSeller-${title}-${author}`;
   
    const cacheBestSellerBookDetail = localStorage.getItem(cacheKey);


    if (cacheBestSellerBookDetail) {
      
      setBestSellerBookDetails((prevDetails) => ({
        ...prevDetails,
        [title]: JSON.parse(cacheBestSellerBookDetail),
      }));

      
    } else {
      if (bestSellers.length > 0) {
       
       

        
        setGoogleAPIFetchCount((prev) => prev + 1);

try{
  
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${googleBookApiKey}`
  );
  const data = await response.json();

  const books = data.items;

  for (const book of books) {
    if (
      book.saleInfo.retailPrice &&
      (book.volumeInfo.title.toLowerCase() == title.toLowerCase() ||
        book.volumeInfo.title
          .toLowerCase()
          .includes(title.toLowerCase()) ||
        title
          .toLowerCase()
          .includes(book.volumeInfo.title.toLowerCase())) &&
      author
        .toLowerCase()
        .includes(book.volumeInfo.authors[0].toLowerCase())
    ) {
     

      setBestSellerBookDetails((prevDetails) => ({
        ...prevDetails,
        [title]: book,
      }));

      localStorage.setItem(cacheKey, JSON.stringify(book));
      break;
    }
  }

}catch(error){
  alert("Unexpected error ! try after some time")
}

      }
    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      for (const book of bestSellers) {
        const { title, author } = book;
       
        await fetchBestSellerBookDetail(
          toTitleCase(title),
          toTitleCase(author)
        );
      }
    };

    if (bestSellers.length > 0) {
      fetchBooks();
    }
  }, [bestSellers]);


  return (
    <BookContext.Provider
      value={{
        bestSellers,
        setBestSellers,
        fetchBestSellerBookDetail,
        bestSellersBookDetails,
        bestSellerRef,
        scrollToView,
        showAddToFavPopup,
        addToFavPopupRef,
        hideAddToFavPopup
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookContextProvider };
