import React, { useContext } from 'react'
import { toTitleCase } from '../../assets/utils';
import { SearchContext } from '../../contexts/SearchContext';
import BookCard from '../../components/BookCard/BookCard';
import NavBar from '../../components/NavBar/NavBar';
import { MagnifyingGlass } from 'react-loader-spinner'
import './Search.css'
import Footer from '../../components/Footer/Footer';
import AddedToFavPopup from '../../components/AddedToFavPopup/AddedToFavPopup';
function Shop() {

const {searchedBooks,isLoading,loadMore,handleSearch}=useContext(SearchContext);

  return (
    <div className='flex flex-col gap-1  items-center relative  min-h-[100vh]'>
        <NavBar/>

        <div className='max-w-[1440px] mb-[50vh] mt-[50px] w-full px-2 lg:px-[20px]  '>

{isLoading?<div className='w-full h-[100vh] flex justify-center items-center'><MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  /></div>:<div className=" w-full">
        <div className="display-heading ">

          <h1 className='heading'>Searched Books</h1>
          <p className='sub-heading'>Found Books Based on Your Search</p>

        </div>

        <div className="display-books">
          {searchedBooks.map((book, index) => {
        


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
        <button onClick={()=>loadMore()}  className='load-more'>Load More </button></div>
      </div>}

<AddedToFavPopup/>
    </div>

    <Footer/>
    </div>
  )
}

export default Shop