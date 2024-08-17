import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Search from '../SearchResult/Search'
import { ShopContext } from '../../contexts/ShopContext'
import { MagnifyingGlass } from 'react-loader-spinner'
import BookCard from '../../components/BookCard/BookCard'
import { useLocation } from 'react-router-dom'
import './Shop.css'
import bookSelf from '../../assets/images/bookself.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AddedToFavPopup from '../../components/AddedToFavPopup/AddedToFavPopup'
function Shop() {

  const {defaultShopBooks,isLoading,shopBooksLoadMore}=useContext(ShopContext)
const {pathname}=useLocation();
useEffect(()=>{

  window.scrollTo(0,0)


},[])


  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center relative '>
        <NavBar/>

        <div  className='shop-header '>

        <h1 >" Journey beyond reality - let our <b className='book-word'>#BOOKS</b> ignite your passion for reading "</h1>

        </div>

        <div className='max-w-[1440px] mb-[50vh] mt-5 w-full px-[20px]  '>

{isLoading ?<div className='w-full h-[100vh] flex justify-center items-center'><MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  /></div>:<div className="Best-seller w-full">
        

        <div className="display-books">
          {defaultShopBooks.map((book, index) => {
        


        if (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors &&
            book.saleInfo.retailPrice
          ) {
            

            
            return (
              <BookCard
               book={book}
              />
            );
          }
           
          })}

        </div>

<div className='w-full text-center'>
        <button onClick={()=>shopBooksLoadMore()}  className='load-more'>
          Load More 
          
          </button></div>

      </div>}

  <AddedToFavPopup/>
    </div>

  
    <Footer/>

    </div>
  )
}

export default Shop