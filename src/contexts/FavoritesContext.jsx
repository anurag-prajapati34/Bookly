import { data } from "autoprefixer";
import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const FavoriteContext=createContext();

const FavoriteContextProvider=({children})=>{

const [favorites,setFavorites]=useState([]);
const [FavoiriteBooks,setFavoriteBooks]=useState([]);



const fetchFavoriteDataFromLocalStorage=()=>{
    const data=JSON.parse(localStorage.getItem('favorites'));
    if(data){
        setFavoriteBooks([...data]);
    }
    
}

const addToFavorite=(book)=>{


    const favlist=JSON.parse(localStorage.getItem('favorites'))

    if(favlist){

        localStorage.setItem('favorites',JSON.stringify([...favlist,book]));
    }
    else {
        localStorage.setItem('favorites',JSON.stringify([book]))
    }

fetchFavoriteDataFromLocalStorage();
    

}

const removeFromFavorite=(book)=>{

    const favlist=JSON.parse(localStorage.getItem('favorites'));
  const newFavList= favlist.filter(favBook=>favBook.id!==book.id)
  localStorage.setItem('favorites',JSON.stringify([...newFavList]));
  fetchFavoriteDataFromLocalStorage();

}

useEffect(()=>{

  
    fetchFavoriteDataFromLocalStorage();
},[])



    return (
        <FavoriteContext.Provider value={{
            addToFavorite,
            favorites,FavoiriteBooks,
            removeFromFavorite
        }}>
            {children}
            </FavoriteContext.Provider>
    )

}

export {FavoriteContext,FavoriteContextProvider}