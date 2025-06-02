"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useState } from "react";

  const galleryItems = [
		{
			src: "/Homepage-Model3.jpg",
    	alt: "Model 3",
    	caption: "Beautiful city view, with a Model Y standing in front",
		},
		{
			src: "/Homepage-modely.webp",
    		alt: "Model y",
    		caption: "Beautiful mountain view, with a Model Y standing in front",
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
    
      <div className="flex flex-col w-full h-[716px]">
        <img
        src={currentItem.src}
        alt={currentItem.alt}
        className="object-cover w-full h-full "  
      />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={goPrev}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
   
    </>
  );
}
