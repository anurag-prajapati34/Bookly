import React, { useContext } from 'react'



import './Favourites.css'
import NavBar from '../../components/NavBar/NavBar';
import { FavoriteContext } from '../../contexts/FavoritesContext';
import { ShopContext } from '../../contexts/ShopContext';
import BookCard from '../../components/BookCard/BookCard';
import Footer from '../../components/Footer/Footer';
function Favoirites() {


    const {defaultShopBooks}=useContext(ShopContext)
    const {FavoiriteBooks}=useContext(FavoriteContext)
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center relative '>
    <NavBar/>
   

    <div className='max-w-[1440px]  mb-[50vh] mt-[50px] w-full px-[20px] '>

{
  FavoiriteBooks.length>0?<div className="Best-seller w-full mb-10 ">
    

<h1 className='heading text-center'>Favorites </h1>

  <div className="display-books ">
    {FavoiriteBooks.map((book, index) => {
  


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

</div>:
<div className='min-h-[100vh] w-full' >Your favourite list is emptly...

</div>
}



</div>


<Footer/>

</div>
  )
}

export default Favoirites