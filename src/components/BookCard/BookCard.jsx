import React, { useContext, useEffect, useState } from "react";
import "./BookCard.css";



import { toTitleCase } from '../../assets/utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'

import getSymbolFromCurrency from "currency-symbol-map";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../contexts/BookContext";
import { FavoriteContext } from "../../contexts/FavoritesContext";
import AddToFavIcon from "../AddToFavIcon/AddToFavIcon";


function BookCard({book}) {
  const Navigate=useNavigate()

  const { bestSellersBookDetails,showAddToFavPopup}=useContext(BookContext);


// const {addToFavorite,removeFromFavorite,FavoiriteBooks}=useContext(FavoriteContext);
// const [isFavorite,setIsFavorite]=useState(false);

const title=book.volumeInfo.title;
const imageLink=book.volumeInfo.imageLinks.smallThumbnail;
const authors=book.volumeInfo.authors;
const price=book.saleInfo && book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount :"000";
const category=book.volumeInfo.categories?book.volumeInfo.categories[0]:'';
const currencySymbole=book.saleInfo.retailPrice.currencyCode;


 
const handleClick=(book)=>{

  Navigate('/book-details',{state:{book}})

}




  return (
    <div  className="Book-card flex flex-col gap-2 ">

      {/* image */}
      <div onClick={()=>handleClick(book)} className="Book-card-image">
        <img src={imageLink}/>



      </div>
{/* 

discription */}
      <div className="book-detail w-full gap-2">
<p className="book-category  ">{category}</p>
        <h3 className="title ">{toTitleCase(title)}</h3>
        <div className="author-name">
{
  Array.isArray(authors)?
  authors.map((author,index)=><p key={index}>{author}{(authors.length-1 > index)?<i className="font-medium mx-1">and</i>:''  } </p>) :authors
}


        </div>
        <div className="call-to-actions flex justify-between items-center mt-2">
        <p className="price">{ getSymbolFromCurrency(currencySymbole)}{Math.floor(price)}</p>

          {/* <div className="book-like bg-slate-500 rounded-full flex items-center justify-center p-2 ">
<FontAwesomeIcon style={{color:isFavorite?'red':''}} onClick={()=>handleFavoriteBtnClick(book)} className="likeIcon" icon={isFavorite?solidHeart:regularHeart}/>
          </div> */}
<AddToFavIcon book={book} />
          
        </div>


      </div>
    </div>
  );
}

export default BookCard;
