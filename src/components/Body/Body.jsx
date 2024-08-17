import React, { useContext, useEffect, useRef, useState } from "react";
import "./Body.css";
import BookCard from "../BookCard/BookCard";
import { BookContext } from "../../contexts/BookContext";
import { toTitleCase } from "../../assets/utils";

import { featuredBooks } from "../../assets/featuredBooks";
import InfiniteScroll from "../InfiniteScro/InfiniteScroll";
import { Link, Element } from "react-scroll";
import AddedToFavPopup from "../AddedToFavPopup/AddedToFavPopup";


function Body() {
  const { bestSellers,bestSellerRef, fetchBestSellerBookDetail, bestSellersBookDetails } =
    useContext(BookContext);



  return (
    <div className=" max-w-[1440px] w-full px-2 lg:px-[20px] mb-[50vh] ">

      <div ref={bestSellerRef} className="Best-seller w-full  my-20 ">
        <Element name="bestSeller">

          <div className="display-heading ">

            <h2 className="heading">Best Sellers</h2>

            <p className="sub-heading">The Hottest Picks of the Season</p>

          </div>

        </Element>

        <div className="display-books">

          {bestSellers.map((book, index) => {
            if (bestSellersBookDetails[toTitleCase(book.title)]) {

              return (

               <div className="book">
                 <BookCard
                  key={index}
                  book={bestSellersBookDetails[toTitleCase(book.title)]}
                />
               </div>
              );


            }
          })}
        </div>
      </div>

      {/* featured books */}

      <div className="featured-books w-full">
        <div className="display-heading ">
          <h2 className="heading">Featured books</h2>
          <p className="sub-heading">Discover Our Curated Collection</p>
    
        </div>

        <div className="display-books">
          {featuredBooks
            ? featuredBooks.map((book, index) => {
                if (
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.authors &&
                  book.saleInfo.retailPrice
                ) {
                  

                  return <BookCard key={index} book={book} />;
                }
              })
            : ""}
        </div>
      </div>

      <div className="w-full text-center mt-[100px]">

      <div className="display-heading ">

      <h2 className="heading">
          Find Books for Every Passion and interest
        </h2>
            <p className="sub-heading">Books that meets your interest</p>

          </div>
       

        <InfiniteScroll />
      </div>
      <AddedToFavPopup/>
    </div>
  );
}

export default Body;
