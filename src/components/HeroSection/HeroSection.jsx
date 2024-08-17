import React, { useContext } from 'react';
import './HeroSection.css'
import readPeopleLikeBook from '../../assets/images/read people like a book image.jpg'

import manifest from '../../assets/images/Manifest book image.jpg'

import ikigai from '../../assets/images/Ikigai image.jpg'
import { BookContext } from '../../contexts/BookContext';




function HeroSection() {

  const {scrollToView}=useContext(BookContext);


  return (
    <div className='hero-section w-full'>

<div className='flex w-full h-full justify-between items-center max-w-[1440px] px-2 lg:px-[20px]'>
  
    <div className='hero-content w-full '>

    <div className='hero-description  flex flex-col flex-start '>

<h1 >Discover your Next 
Favorite Book 📚</h1>
<p>Browse our extensive categories. Discover thrilling mysteries, heartwarming romances, and more. Find your next favorite read today</p>
<button onClick={()=>scrollToView('bestSellers')}
>
  Explore Now
 </button>

</div>

<div className='hero-books-container'>

<img className='heroBooks heroBook1  ' src={readPeopleLikeBook}></img>
<img className='heroBooks heroBook2' src={manifest}></img>
<img className='heroBooks heroBook3' src={ikigai}></img>

</div>
    </div>
</div>

    </div>
  )
}

export default HeroSection