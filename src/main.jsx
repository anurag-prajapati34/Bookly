import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BookContextProvider } from './contexts/BookContext.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'
import { SearchContextProvider } from './contexts/SearchContext.jsx'

import Shop from './Pages/Shop/Shop.jsx'
import Search from './Pages/SearchResult/Search.jsx'
import { ShopContextProvider } from './contexts/ShopContext.jsx'
import About from './Pages/About/About.jsx'


import Contact from './Pages/Contact/Contact.jsx'

import { FavoriteContextProvider } from './contexts/FavoritesContext.jsx'
import Favoirites from './Pages/Favourites/Favoirites.jsx'




const routers = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path:'/search',
    element:<Search/>
    
  },
  {
    path:'/book-details',
    element:<BookDetails/>
  },
  {
    path:'/shop',
    element:<Shop/>
  },
  {
    path:'/about',
    element:<About/>
  }
  ,
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/favorites',
    element:<Favoirites/>
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
<BookContextProvider>
  <SearchContextProvider>

  <ShopContextProvider>
   <FavoriteContextProvider>
   <RouterProvider router={routers} >
 
 </RouterProvider>
   </FavoriteContextProvider>
 
  </ShopContextProvider>

  </SearchContextProvider>




</BookContextProvider>

  
)
