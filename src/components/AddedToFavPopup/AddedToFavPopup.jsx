import React, { useContext } from 'react'
import './AddedToFavPopup.css'
import {BookContext} from '../../contexts/BookContext'

function AddedToFavPopup() {

    const {addToFavPopupRef,hideAddToFavPopup}=useContext(BookContext)
  return (
    <div ref={addToFavPopupRef} className='addFavPop'>

Added to favorite



    </div>
  )
}

export default AddedToFavPopup