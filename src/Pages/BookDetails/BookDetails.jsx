import React, { useContext, useEffect, useRef, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import readPeopleLikeBook from '../../assets/images/read people like a book image.jpg'

import './BookDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendar, faFile } from '@fortawesome/free-regular-svg-icons'
import { faBarcode, faEarth, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map'
import { BookContext } from '../../contexts/BookContext'
import { toTitleCase } from '../../assets/utils'

import { getLangNameFromCode } from 'language-name-map'
import AddToFavIcon from '../../components/AddToFavIcon/AddToFavIcon'
function BookDetails() {

const {bestSellersBookDetails}=useContext(BookContext)
const location=useLocation();
const {book}=location.state;
const navigate=useNavigate();
///extractin details of book
const summeryRef=useRef();
const [paraFull,setParaFull]=useState(false);

const title=book.volumeInfo.title;
const imageLink=book.volumeInfo.imageLinks.smallThumbnail;


const authors=book.volumeInfo.authors;
const price=book.saleInfo && book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount :"000";
const category=book.volumeInfo.categories[0];
const currencySymbole=book.saleInfo.retailPrice.currencyCode;
const bookSummery=book.volumeInfo.
description;

const pageCount=book.volumeInfo.pageCount;
const language=getLangNameFromCode(book.volumeInfo.language).name;
const publisher=book.volumeInfo.publisher;
const publishingDate=book.volumeInfo.
publishedDate;

const isbn13=book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0] ? book.volumeInfo.industryIdentifiers[0].identifier:'':"";

const isbn10=book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[1] ? book.volumeInfo.industryIdentifiers[1].identifier:'':"";

const previewLink=book.volumeInfo.
previewLink;

const authorNameForQuery=Array.isArray(authors)?authors[0]:authors;

const amzonBuyQuery=`${title} ${authorNameForQuery}`




  const manipulatePara=()=>{

   
    if(paraFull){
      summeryRef.current.classList.add('hide')
      setParaFull(false)
    }
    else{
      summeryRef.current.classList.remove('hide');
      setParaFull(true)
    }
  }


 




if(!book){
  return <div>Book detail is not available</div>
}


useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
<div className='flex flex-col items-center justify-center '>
<NavBar/>
<div className='book-preview '>


<div className='book-detail-container '>


{/* book image to show which image detail is it */}
<div className='book-background'>
<img className='book-preview-image' src={imageLink}/>
</div>

{/* book image description */}

<div className='book-description'>
 <div className='flex lg:pr-20 w-full  items-center justify-between'> <h1 className='title heading'>{title}</h1> <AddToFavIcon book={book}/></div>

  <div className="author-name flex gap-1">
{
  Array.isArray(authors)?
  authors.map((author,index)=><p>{author}{(authors.length-1 > index)?<i className="font-medium ml-1">and</i>:''  } </p>) :authors
}


        </div>

  <div className='mt-[11px] flex gap-20 '>

    <p className='price'>{getSymbolFromCurrency(currencySymbole)}{Math.floor(price)}</p>
    <p className='category'>{category}</p>


  </div>

  <div ref={summeryRef} className='book-summery hide  mt-[27px]'>
    
 {bookSummery?bookSummery:'book summery is not available for this book...........'}

  </div>
  <p  onClick={()=>manipulatePara()} className='read-more '>{paraFull?'Read Less':'Read More'}</p>

  <div className='small-details-container'>


{/*Page count*/}
{
  pageCount?<div className='small-details pages'>
  <FontAwesomeIcon icon={faFile}/>
  <p className='detail-name'>print length</p>
  <p className='detail-value'>{pageCount}</p>

</div>:""
}

{/*Language*/}

{
  language?<div className='small-details laguage'>
  <FontAwesomeIcon icon={faEarth}/>
  <p className='detail-name'>Language</p>
  <p className='detail-value'>{language}</p>

</div>:""
}

{/*publisher*/}

{publisher?<div className='small-details publisher'>
  <FontAwesomeIcon icon={faBuilding}/>
  <p className='detail-name'>Publisher</p>
  <p className='detail-value'>{publisher}</p>

</div>:''}


{/*publishing date*/}
{
  publishingDate?<div className='small-details publication-date'>
  <FontAwesomeIcon icon={faCalendar}/>
  <p className='detail-name'>Publication date</p>
  <p className='detail-value'>{publishingDate}</p>

</div>:''
}


{/*isbns*/}
{
  isbn10?<div className='small-details isbn-10'>
  <FontAwesomeIcon icon={faBarcode}/>
  <p className='detail-name'>ISBN-10</p>
  <p className='detail-value'>{isbn10}</p>

</div>:''
}

{
  isbn13?<div className='small-details isbn-13'>
  <FontAwesomeIcon icon={faBarcode}/>
  <p className='detail-name'>ISBN-13</p>
  <p className='detail-value'>{isbn13}</p>

</div>:''
}


  </div>

  <div className='flex call-to-action gap-5 mt-[39px]'>
<button onClick={()=>{window.open(`https://www.amazon.com/s?k=${encodeURIComponent(amzonBuyQuery)}`,'_blank')}} className='buy'>
Buy Now
</button>

<button onClick={()=>{window.open(previewLink,'_blank')}} className='preview'>
  Preview Now
</button>


  </div>

</div>

</div>



</div>

</div>
  )
}

export default BookDetails