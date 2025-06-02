"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "./DropDown";


export default function Header() {
	//use state for the different buttons
	const [openDropdown, setOpenDropdown] = useState<null | "vehicle" | "energy" | "charging" | "discover" | "shop">(null);

  function shopClick() {
    window.open("https://shop.tesla.com/");
  }
  return (
    <>
      <div className="flex justify-between items-center h-15 pr-10">
        <Image
          src="/logo.svg"
          width="150"
          height="150"
          alt="Tesla Logo Futuristic Font"
        ></Image>
        <div className="flex">
			<button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition"
			onMouseEnter={() => setOpenDropdown("vehicle")}
			 >
				Vehicles
			</button>
          <button className="px-3 hover:bg-gray-200 hover:cursor-pointer rounded transition"
			onMouseEnter={() => setOpenDropdown("energy")}>
            Energy
          </button>
          <button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition"
		  onMouseEnter={() => setOpenDropdown("charging")}>
            Charging
          </button>
          <button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition"
		  onMouseEnter={() => setOpenDropdown("discover")}>
            Discover
          </button>
          <button
            className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded transition"
            onClick={shopClick}
			onMouseEnter={() => setOpenDropdown("shop")}
          >
            Shop
          </button>
        </div>
        <div className="flex gap-2">
			<a href="https://www.tesla.com/support">
				<button className="px-1 py-1  hover:bg-gray-200 hover:cursor-pointer rounded transition">
					<Image
					className="hover:cursor-pointer"
					src="/question.svg"
					width="20"
					height="20"
					alt="Support Button"
					></Image>
				</button>
            
      </a>
		  <a>
			<button className="px-1 py-1 hover:bg-gray-200 hover:cursor-pointer rounded transition">
				<Image
				className="hover:cursor-pointer"
				src="/world.svg"
				width="20"
				height="20"
				alt="Region & Language"
				></Image>
			</button>
			</a>
		<a href="https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
          <button className="px-1 py-1 hover:bg-gray-200 hover:cursor-pointer rounded transition">
            <Image
              className="hover:cursor-pointer"
              src="/account.svg"
              width="20"
              height="20"
              alt="Account button"
            ></Image>
          </button>
		</a>
        </div>
      </div>
	  {/* I kinda messed up should've made another componenets for everything that is happening under here */}
	  {openDropdown && 
	  	(
	<div
		className="absolute left-0 w-full z-50"
		onMouseEnter={() => setOpenDropdown(openDropdown)}
		onMouseLeave={() => setOpenDropdown(null)}
	>
		<Dropdown>
		{openDropdown === "vehicle" && (
			<>
			<section className="flex ">
			<div className="flex gap-3 flex-row flex-wrap w-[721px] h-[367px]">
				<div className="">
					<Image alt="model s" src="/modelS.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model S</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/model3.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model 3</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/modely.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model Y</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/modelX.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model X</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/cyberTruck.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Cybertruck</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/inventory.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Inventory</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
				{[
				"Help Me Choose",
				"Demo Drive",
				"Trade-in",
				"Compare",
				"WorkShops",
				"Help Me Charge",
				"Fleet",
				"Semi",
				"Roadster",
				"Federal Tax Credit",
				"We, Robot",
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			</section>
			</>
			)}
		{openDropdown === "energy" && 
		(
			<>
			<section className="flex ">
			<div className="flex gap-2 flex-row flex-wrap w-[721px] h-[367px]">
				<div className="">
					<Image alt="model s" src="/solar.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Panels</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/solarRoof.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Roof</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/powerWall.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Powerwall</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/mega.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Megapack</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a>
					</div>
					</div>
				</div>
				
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
				{[
				"Schedule a Consultation",
				"Why Solar",
				"Incentives",
				"Support",
				"Partner with Tesla",
				"Commercial",
				"Utilities"
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			</section>
			</>
		)}
		{openDropdown === "charging" && 
		(
			<>
			<section className="flex ">
			<div className="flex gap-2 flex-row flex-wrap w-[721px] h-[367px]">
				<div className="">
					<Image alt="model s" src="/charger1.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Panels</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/charger2.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Roof</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/charger3.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Powerwall</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
				{[
				"Help Me Charge",
				"Charging Calculator",
				"Charging with NACS",
				"Supercharger Voting",
				"Host a Supercharger",
				"Commercial Charging",
				"Host Wall Connector"
				
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			</section>
			</>
		)}
		{openDropdown === "discover" && (
			<section className="flex">
				
			<div className="ml-10 mr-5">
				<h1>Resources</h1>
				<ul>
				{[
				"Demo Drive",
				"Insurance",
				"American Heroes",
				"Learn",
				"Video Guides",
				"Customer Stories",
				"Events",
				"Workshops"
				
				
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			
			<div className="ml-10">
				<h1>Location Services</h1>
				<ul>
				{[
				"Find us",
				"Find a Collision Center",
				"Find a Certified Installer"
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			<div className="ml-10">
				<h1>Company</h1>
				<ul>
				{[
				"About",
				"Careers",
				"Investor Relations"
				
				].map((item) => (
				<li key={item} className="pt-3 hover:underline font-bold text-sm">
					<a href="#">{item}</a>
				</li>
				))}
  			</ul>
			</div>
			</section>
		)}
		{openDropdown === "shop" && (
			<section className="flex">
				<div className="flex gap-2 flex-row flex-wrap w-[721px] h-[367px]">
				<div className="">
					<Image alt="model s" src="/charger2.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Charging</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/tire.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Vehicle Accessories</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/cap.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Apparel</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/bagpack.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Lifestyle</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="#">Learn</a> <a className="underline" href="#">Order</a>
					</div>
					</div>
				</div>
				
				</div>
			</section>
		)}
		
		</Dropdown>
	</div>
	)}
    </>
  );
};