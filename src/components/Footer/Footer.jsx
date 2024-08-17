import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer-container  w-full    absolute bottom-0 flex  items-center justify-center '>


<div className='footer-content h-full w-full max-w-[1440px] text-center py-4 px-5 flex items-center  '>


<div className='brand-desc flex-1   self-auto'>
<h1  style={{color:'#00897B'}} className='logo font-bold text-2xl  '>Bookly</h1>

<p>Where stories come alive and hearts connect – explore our shelves to find your next unforgettable journey</p>

</div>

<h1 className='created-by flex-1 lg:text-[18px]' >@Developed & Designed by <b style={{color:'#00897B'}}>Anurag prajapati</b></h1>

<div className='footer-socials flex-1 flex justify-end '>

    <div style={{color:'#00897B'}} className='flex gap-6 text-2xl '>
    <FontAwesomeIcon className='cursor-pointer   ' onClick={()=>{window.open('https://www.linkedin.com/in/anurag-prajapati34/','_blank')}} icon={faLinkedin}/>
    <FontAwesomeIcon className='cursor-pointer  ' onClick={()=>{window.open('mailto:prajapatianurag73240@gmail.com','_blank')}} icon={faEnvelope}/>
   
    <FontAwesomeIcon className='cursor-pointer ' onClick={()=>{window.open('https://x.com/anurag_x34','_blank')}} icon={faX}/>
    <FontAwesomeIcon className='cursor-pointer ' onClick={()=>{window.open("https://github.com/anurag-prajapati34","_blank")}} icon={faGithub}/>
    </div>
</div>





</div>


    </div>
  )
}

export default Footer