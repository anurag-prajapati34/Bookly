import { createContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchContext=createContext();

const SearchContextProvider =({children})=>{

const [searchedBooks,setSearchedBooks]=useState([]);
    const [isLoading,setLoading]=useState(true);
const [startIndex,setStartIndex]=useState(0);
const [searchQuery,setSearchQuery]=useState();
const googleBookApiKey=import.meta.env.VITE_GOOGLE_BOOK_API_KEY;



    // search function
    const search= async (query,startIndex)=>{
setLoading(true)
try{
    

    const response=await fetch( `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${googleBookApiKey}&startIndex=${startIndex}&maxResults=40`);

    const data=await response.json();
 

setSearchedBooks(startIndex===0?data.items:[...searchedBooks,...data.items])


setLoading(false)

}catch(error){
    alert("Unexpected error ! try after some time")
}

    }

const handleSearch=(searchRef)=>{

    const query=searchRef.current.value;
    search(query,0)
    setSearchQuery(query);

}
    

//load more functionality
const loadMore=()=>{
const nextIndex=startIndex+41;
    search(searchQuery,nextIndex);
    setStartIndex(nextIndex);

}


    return <SearchContext.Provider value={{search,searchedBooks,isLoading,handleSearch,loadMore,searchQuery}}>
        {children}
    </SearchContext.Provider>
}

export {SearchContext,SearchContextProvider}