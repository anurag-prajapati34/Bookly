import HeroSection from "./components/HeroSection/HeroSection";

import NavBar from "./components/NavBar/NavBar";

import Body from "./components/Body/Body";
import { useContext, useEffect } from "react";
import { BookContext } from "./contexts/BookContext";
import Footer from "./components/Footer/Footer";
import './App.css'


function App() {

useEffect(()=>{
  window.scrollTo(0,0)
},[])
  




  return (
    <div className="flex min-h-[100vh] relative w-full flex-col items-center  ">
      {/* nav bar section */}
      <NavBar />
      {/* hero section */}

      <HeroSection />

      {/* body section */}
      <Body />
      {/* footer section */}
      <Footer/>
    </div>
  );
}
export default App;
