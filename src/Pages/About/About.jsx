import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import InfiniteScroll from '../../components/InfiniteScro/InfiniteScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookSkull, faGlobe, faLaptop, faList, faStar, faThLarge } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import bookself from '../../assets/images/bookself.jpg'


function About() {

  const {pathname}=useLocation();
  useEffect(()=>{
   
    window.scrollTo(0,0)
  })
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center relative'>
<NavBar/>


<div className='w-full max-w-[1440px]  flex flex-col items-center mt-10 mb-[100px] gap-[150px]'>

<div className='flex flex-col items-center'>

<h1 className='heading flex gap-1'>Discover <p style={{color:'#00897B'}} className=''><u>Bookly </u></p></h1>

<p className='w-[100%] text-center sub-heading'>Your Ultimate Companion for Finding Great Reads</p>


<div className='discover-section-info flex w-[90%] gap-10  justify-center mt-20'>
  <img className='h-60 rounded' src={bookself}></img>

  <p >Bookly is a platform designed to help book lovers like you and me discover amazing books. Whether you're looking for the latest bestsellers or exploring diverse categories, Bookly makes it easy to find your next great read.</p>
</div>


</div>



<div className='flex flex-col items-center '>

<div className='flex flex-col items-center mb-20'>

<h1 className='heading flex'>What we offers</h1>


<p className='w-[100%] text-center sub-heading '>Comprehensive Services Tailored to Meet All Your Book-Loving Needs</p>



</div>

<div className='feature-container '>

<div className='feature'>
<div className='feature-logo bg-purple-300'><FontAwesomeIcon className='' icon={faStar}/></div>
<p className='feature-name'>Best Sellers Books </p>
<p className='feature-desc '>Explore the most popular books and stay updated with the latest trends.</p>
</div>
<div className='feature'>
<div className='feature-logo bg-green-300'><FontAwesomeIcon className=' ' icon={faGlobe}/></div>
<p className='feature-name'>Wide range of Books</p>
<p className='feature-desc'>Find books from various genres and authors, tailored to your interests.</p>
</div>
<div className='feature'>
<div className='feature-logo bg-blue-300'><FontAwesomeIcon className=' ' icon={faList}/></div>
<p className='feature-name '>Diverse Categories</p>

<p className='feature-desc'>From fiction to non-fiction, we have something for every reader.</p>
</div>
<div className='feature'>
<div className='feature-logo  bg-red-300'><FontAwesomeIcon className=' ' icon={faLaptop}/></div>
<p className='feature-name '>User-Friendly Interface</p>
<p className='feature-desc'>Enjoy a seamless and intuitive browsing experience.</p>
</div>
</div>


</div>

<div>

<div className='flex flex-col items-center '>
<h1 className='heading flex'>About me</h1>

<p className='w-[80%] text-center sub-heading'>Hi, I'm <b style={{color:'#00897B'}}>Anurag Prajapati</b>, a passionate web developer and avid reader. I created Bookly to combine my love for technology and books, making it easier for others to find and enjoy great literature. Whether you're looking for your next read or exploring new genres, I'm here to help you on your literary journey.</p>

</div>
</div>

<div className='w-full mb-[50vh]'>
<InfiniteScroll/>
</div>



<Footer/>

</div>


    </div>
  )
}

export default About