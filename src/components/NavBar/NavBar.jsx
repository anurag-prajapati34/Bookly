import React, { useContext, useEffect, useRef, useState } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCross, faHeart, faL, faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../../contexts/SearchContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'


import { FavoriteContext } from '../../contexts/FavoritesContext'
import { BookContext } from '../../contexts/BookContext'
function NavBar() {

const {search,handleSearch}=useContext(SearchContext);
const {scrollToView}=useContext(BookContext);
const searchRef=useRef();

const navigate=useNavigate();
const location=useLocation();
const [isMenu,setIsMenu]=useState(false);
const {FavoiriteBooks}=useContext(FavoriteContext);

const favoriteListLength=FavoiriteBooks.length;

const searchButtonClick=()=>{


  if(searchRef.current.value){

    handleSearch(searchRef);
    if(!location.pathname.includes('search')){
      navigate('/search')
    }

  }

}

const togleMenuBar=()=>{

  if(!isMenu){
    
    setIsMenu(true)
  }
  else{
   
    setIsMenu(false)
  }
}




  return (
    <>
      
    <div  className='Nav-bar w-full px-2 sm:px-[20px]   flex items-center justify-center  '>
      
      
    <div className={`menu-sidebar-container h-[100vh] w-full  right-[-100%] top-0 fixed  ${isMenu?'active':''} flex`} >

      <div onClick={togleMenuBar} className='menu-sidebar-overlay bg-transparent flex-1'>

      </div>

      <div className='menu-sidebar pl-5 py-6 '>
        
<div onClick={togleMenuBar}  className='close h-8 w-8 rounded-full flex justify-center items-center'><FontAwesomeIcon icon={faX}/></div>

<ul className='text-white font-semibold mt-10'>
  <li>
    <NavLink to={'/'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>Home</NavLink>
  </li>
  <li>
    <NavLink to={'/shop'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>Shop</NavLink>
  </li>
  <li>
    <NavLink to={'/'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>
      Best Sellers
    </NavLink>
  </li>
  <li>
    <NavLink to={'/about'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>
      About
    </NavLink>
  </li>
  <li>
    <NavLink to={'/contact'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>
      Contact
    </NavLink>
  </li>
</ul>


      </div>

    </div>

<div className='NavBar-content max-w-[1440px] w-full h-full flex justify-between items-center  xl:px-[20px] '>

<p className='logo text-base text-white'>Bookly</p>


<div className='nav-pages  flext items-center justify-center flex-1 '>

<div className='gap-10 flex flex-1 justify-end  mr-6 '>

<NavLink to={'/'} className={({isActive})=>`options ${isActive ?'active-nav':''}`} >Home</NavLink>

<NavLink to={'/shop'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>Shop</NavLink>

<NavLink to={'/'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>Best Seller</NavLink>

<NavLink to={'/about'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>About</NavLink>
<NavLink to={'/contact'} className={({isActive})=>`options ${isActive ?'active-nav':''}`}>Contact</NavLink>
</div>
</div>


<div className=' flex gap-6 justify-between items-center  h-full '>

<div className='search-box'>

<input ref={searchRef} type='text' name='search-input'  placeholder='Search for books' className='search-input' ></input>

<FontAwesomeIcon onClick={searchButtonClick} className='search-icon' icon={faSearch}/>

</div>

<div onClick={()=>navigate('/favorites')}  className='wishlist relative cursor-pointer'>
<FontAwesomeIcon className='options wishlisht-icon' icon={faHeart}/>
<div className='wishlist-count '>{favoriteListLength}</div>


</div>

<div onClick={togleMenuBar} className='menu'>
  <FontAwesomeIcon icon={faBars}/>
</div>



</div>


      </div>
      
      
       </div>

       
       </>
  )
}

export default NavBar