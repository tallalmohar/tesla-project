"use client";
import Image from "next/image";
import Header from "./components/Header";
import ScrollCard from "./components/ScrollCard";
import InfoBox from "./components/InfoBox";
import { use, useState } from "react";



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
        <a  href={currentItem.link} className=" flex justify-center w-[170px] mt-40 p-2 bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700 ">Order Now</a>
        <a className=" flex justify-center w-[170px] mt-40 p-2  bg-white rounded hover:cursor-pointer hover:bg-gray-100  ">View Inventory</a>
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
      <div className="m-10 mr-0 ml-0 h-[580px] flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar ">
          <ScrollCard href1="https://www.tesla.com/modely/design#overview" href2="https://www.tesla.com/modely" id="first" src="/Homepage-Card-Model-Y.avif" carType="Midsize SUV" carName="Model Y" price="From $37,490 After Federal Tax Credit" ></ScrollCard>
          <ScrollCard href1="https://www.tesla.com/model3/design#overview" href2="https://www.tesla.com/model3" id="second" src="/Homepage-Card-Model-3-Desktop.avif" carType="Sport Sedan" carName="Model 3" price="Lease From $349/mon With Zero Down" ></ScrollCard>
          <ScrollCard href1="https://www.tesla.com/cybertruck/design#overview" href2="https://www.tesla.com/cybertruck" id="third" src="/Homepage-Card-Cybertruck-Desktop.avif" carType="Utility Truck" carName="Cybertruck" price="Lease From 799/mon" ></ScrollCard>
          <ScrollCard href1="https://www.tesla.com/modelx/design#overview" href2="https://www.tesla.com/modelx" id="fourth" src="/Homepage-Card-Model-S-Desktop.avif" carType="Luxury SUV" carName="Model X" price="Free Supercarging on Inventory" ></ScrollCard>
          <ScrollCard href1="https://www.tesla.com/models/design#overview" href2="https://www.tesla.com/models" id="fifth" src="/Homepage-Card-Model-X-Desktop.avif" carType="Luxury Sedan" carName="Model S" price="Free Supercarging on Inventory" ></ScrollCard>
      </div>
  
       
      <div className="flex flex-row justify-center gap-5 m-10">
        <InfoBox src="/Homepage-Grid-Compare.avif" title="Compare Model" p="Find the Tesla vehicle that’s right for you." btnP="Compare Models"></InfoBox>

        <InfoBox src="/Homepage-Grid-Compare.avif" title="American Heroes" p="$1,000 off for military, first responders, teachers and students." btnP="Learn More"></InfoBox>
      </div>

      <div className=" m-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50441.79297264504!2d-121.95998209579747!3d37.469566576287754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc654f67bbf49%3A0x2d4f6c443c47fb25!2sTesla!5e1!3m2!1sen!2sca!4v1748905079786!5m2!1sen!2sca" width="1810" height="550" className="border-0 rounded-2xl w-full"  loading="lazy"></iframe>
        <div className="mt-5 flex justify-between">
          <div>
          <h1 className="text-5xl font-bold ">Find Your Charge</h1>
          <h2 className="text-xl text-gray-600">View the network of Tesla Superchargers and Destination Chargers available near you.</h2>
          </div>
          <div></div>
          <div className="flex mr-10 items-center gap-4">
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h1 className="text-4xl font-bold">30,818</h1>
                <img src="/superchargers.svg" width={40} height={40}></img>
              </div>
              <p className="text-xl text-gray-500 font-bold">Superchargers</p>
            </div>
            <div className="flex flex-col">
            <div className="flex gap-1">
              <h1 className="text-4xl font-bold ">10,412</h1>
              <img src="/chargers.svg" width={40} height={40}></img>
              
              </div>
              <p className="text-xl text-gray-500 font-bold">Destination Charger</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row gap-3">
            <a  href={currentItem.link} className=" flex justify-center w-[170px]  p-2 bg-black text-white rounded hover:cursor-pointer">Order Now</a>
            <a className=" flex justify-center w-[170px]  p-2  bg-gray-200 rounded hover:cursor-pointer hover:bg-gray-100  ">View Inventory</a>
          </div>
      </div>

      <div className="m-20 mb-4 mr-0 ml-0 h-[580px] flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar ">
          <ScrollCard href2="https://www.tesla.com/solarpanels" href1="https://www.tesla.com/energy/design?poi=solarpanels" id="2first" src="/Homepage-Card-Solar-Panels-Desktop.avif" carType="" carName="Solar Panels" price="Use Solar Energy to Power Your Home and Charge Your Tesla" ></ScrollCard>
          <ScrollCard href2="https://www.tesla.com/powerwall" href1="https://www.tesla.com/powerwall/design" id="2second" src="/Homepage-Card-Powerwall-Desktop.avif" carType="" carName="Powerwall" price="Keep Your Lights On During Outages" ></ScrollCard>
          <ScrollCard href2="https://www.tesla.com/solarroof" href1="https://www.tesla.com/energy/design?poi=solarroof" id="2third" src="/Homepage-Card-Solar-Roof-Desktop.avif" carType="Utility Truck" carName="Solar Roof" price="Generate Clean Energy With Your Roof" ></ScrollCard>
          <ScrollCard href2="https://www.tesla.com/megapack" href1="https://www.youtube.com/watch?v=yn_6LC4loY8" id="2fourth" src="/Homepage-Card-Megapack-Desktop.avif" carType="Luxury SUV" carName="Megapack" price="Massive Batteries for Massive Energy Support" ></ScrollCard>
      </div>
    </>
  );
}
