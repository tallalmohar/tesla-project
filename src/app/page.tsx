"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useState } from "react";

  const galleryItems = [
		{
			src: "/Homepage-Model3.jpg",
    	alt: "Model 3",
    	text: "Model 3",
      apr: "0% APR Available",
      link:"https://www.tesla.com/model3/design#overview"
		},
		{
			src: "/Homepage-modely.webp",
    		alt: "Model y",
    		text: "Model Y",
        apr: "1.99% APR Available",
        link: "https://www.tesla.com/modely/design"
		}
	
	]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () =>{
    setCurrentIndex((prev) => (prev+1)% galleryItems.length)
  }

  const goPrev = () =>{
    setCurrentIndex((prev) => prev === 0 ? galleryItems.length - 1 : prev - 1)
  }
  const currentItem= galleryItems[currentIndex];

  return (
    <>
    
      <div className="flex flex-col items-center w-full h-[716px]">
        <h1 className="absolute pt-15 text-white text-6xl font-bold">{currentItem.text}</h1>
        <h1 className="absolute pt-30 text-white text-xl underline ">{currentItem.apr}</h1>
        <div className="absolute flex justify-centerw-[600px] flex-row z-10 gap-4">
        <a  href={currentItem.link} className=" flex justify-center w-[170px] mt-40 p-4 bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700 ">Order Now</a>
        <a className=" flex justify-center w-[170px] mt-40 p-4  bg-white rounded hover:cursor-pointer hover:bg-gray-100  ">View Inventory</a>
        </div>
        <img
        src={currentItem.src}
        alt={currentItem.alt}
        className="object-cover w-full h-full "  
      />
      <div className="absolute flex justify-around w-full mt-100">
        
        <button
          onClick={goPrev}
          className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer px-4 py-2 rounded"
        >
          <Image src="/Homepage - forward.svg" width={20} height={20} alt="forward"></Image>
        </button>
        <button></button>
        <button
          onClick={goNext}
          className="bg-gray-200 hover:bg-gray-300  hover:cursor-pointer px-4 py-2 rounded"
        >
          <Image src="/Homepage- backward.svg" width={20} height={20} alt="forward"></Image>
        </button>
      </div>
   
      </div>
      
    </>
  );
}
