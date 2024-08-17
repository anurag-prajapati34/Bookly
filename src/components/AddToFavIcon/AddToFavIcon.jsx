import React, { useContext, useState, useEffect } from 'react'
import { FavoriteContext } from '../../contexts/FavoritesContext';
import { BookContext } from '../../contexts/BookContext';
import './AddToFavIcon.css'
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AddToFavIcon({book}) {
    const { showAddToFavPopup}=useContext(BookContext);
    const {addToFavorite,removeFromFavorite,FavoiriteBooks}=useContext(FavoriteContext);
    const [isFavorite,setIsFavorite]=useState(false);
    const handleFavoriteBtnClick=(book)=>{

 
        if(!isFavorite){
          setIsFavorite(true)
          addToFavorite(book);
          showAddToFavPopup();
        }
        else{
          setIsFavorite(false)
          removeFromFavorite(book)
      
      
        }
      
      }

      useEffect(()=>{
        const inFavList=FavoiriteBooks.filter(favBook=>favBook.id===book.id)
        if(inFavList.length>0){
          setIsFavorite(true)
        }
        else{
          setIsFavorite(false)
        }
      })
  return (
    <div className="book-like rounded-full flex items-center justify-center p-2 ">
    <FontAwesomeIcon style={{color:isFavorite?'red':''}} onClick={()=>handleFavoriteBtnClick(book)} className="likeIcon" icon={isFavorite?solidHeart:regularHeart}/>
              </div>
  )
}

export default AddToFavIcon