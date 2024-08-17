import { createContext, useEffect, useState } from "react";

const ShopContext=createContext();

const ShopContextProvider=({children})=>{


    const [defaultShopBooks,setDefaultShopBooks]=useState();
    const [startIndex,setStartIndex]=useState(0)
    const [isLoading,setLoading]=useState(true)
    const googleBookApiKey=import.meta.env.VITE_GOOGLE_BOOK_API_KEY;



///fetching books to show in shop page
    const fetchDefaultShopBooks =async (startIndex)=>{
        setLoading(true)
        const query='How to win friends and influence people'

       try{
        const response=await fetch( `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${googleBookApiKey}&startIndex=${startIndex}&maxResults=40`)
        const data= await response.json();


      

        setDefaultShopBooks(startIndex===0?data.items:[...defaultShopBooks,...data.items]);
       }catch(error){
        alert("Unable to load more items !")
       }
        setLoading(false)
        
    }

    useEffect(()=>{

        fetchDefaultShopBooks(0)
    },[])

const shopBooksLoadMore=()=>{

    const nextIndex=startIndex+41;
  fetchDefaultShopBooks(startIndex)
  setStartIndex(nextIndex);

}


return <ShopContext.Provider value={{defaultShopBooks,shopBooksLoadMore,isLoading}} >
    {children}
</ShopContext.Provider>
    
}

export {ShopContext,ShopContextProvider}