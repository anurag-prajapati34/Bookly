import React from 'react'
import "./InfiniteScroll.css";
import {scroollBooks} from '../../assets/scroollBooks'


function InfiniteScroll() {
  return (

   <div className='w-full max-w-[1440px] flex flex-col items-center justify-center'>

     {/* <div className='wrapper'>

<div className='item item1'></div>
<div className='item item2'></div>
<div className='item item3'></div>
<div className='item item4'></div>
<div className='item item5'></div>
<div className='item item6'></div>
<div className='item item7'></div>
<div className='item item8'></div>


    </div> */}

<div className='wrapper'>

{
    scroollBooks.map((book,index)=>
    {
     

        return <div>
            <img className={`book-left book${index+1}`} src={book.volumeInfo.imageLinks.smallThumbnail}></img>
        </div>
    })
}

</div>

<div className='wrapper mt-6'>

{
    scroollBooks.map((book,index)=>
    {
     

        return <div>
            <img className={`book-right book${index+1}`} src={book.volumeInfo.imageLinks.smallThumbnail}></img>
        </div>
    })
}

</div>

   </div>
  )
}

export default InfiniteScroll