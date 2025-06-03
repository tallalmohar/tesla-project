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
  
  const vehicleLinks = [
  { name: "Help Me Choose", src: "https://www.tesla.com/choose" },
  { name: "Demo Drive", src: "https://www.tesla.com/drive" },
  { name: "Trade-in", src: "https://www.tesla.com/tradein" },
  { name: "Compare", src: "https://www.tesla.com/compare" },
  { name: "WorkShops", src: "https://www.tesla.com/workshops" },
  { name: "Help Me Charge", src: "https://www.tesla.com/charge" },
  { name: "Fleet", src: "https://www.tesla.com/fleet" },
  { name: "Semi", src: "https://www.tesla.com/semi" },
  { name: "Roadster", src: "https://www.tesla.com/roadster" },
  { name: "Federal Tax Credit", src: "https://www.tesla.com/ev-incentives" },
  { name: "We, Robot", src: "https://www.tesla.com/robot" },
];

const chargingLinks = [
  { name: "Scedule a Consultation", src: "https://www.tesla.com/solar-virtual-consultations" },
  { name: "Why Solar", src: "https://www.tesla.com/why-solar" },
  { name: "Incentives", src: "https://www.tesla.com/support/energy/powerwall/learn/incentives" },
  { name: "Support", src: "https://www.tesla.com/support/energy" },
  { name: "Partener with Tesla", src: "https://www.tesla.com/partner-with-tesla" },
  { name: "Commercial", src: "https://www.tesla.com/commercial" },
  { name: "Utilities", src: "https://www.tesla.com/utilities" },
];

const energyLink = [
  { name: "Help Me Charge", src: "https://www.tesla.com/help-me-charge" },
  { name: "Charging Calculator", src: "https://www.tesla.com/charging-calculator" },
  { name: "Charging with NACS", src: "https://www.tesla.com/NACS" },
  { name: "Supercharger Voting", src: "https://www.tesla.com/supercharger-voting/overview" },
  { name: "Host a Supercharger", src: "https://www.tesla.com/host-a-supercharger" },
  { name: "Commercial Charging", src: "https://www.tesla.com/commercial-charging" },
  { name: "Host Wall Connectors", src: "https://www.tesla.com/charging-partners" },
];

const discover1 = [
  { name: "Demo Drive", src: "https://www.tesla.com/drive" },
  { name: "Insurance", src: "https://www.tesla.com/insurance" },
  { name: "American Heroes", src: "https://www.tesla.com/american-heroes" },
  { name: "Learn", src: "https://www.tesla.com/learn" },
  { name: "Video Guides", src: "www.tesla.com/support/videos" },
  { name: "Customer Stories", src: "https://www.tesla.com/customer-stories" },
  { name: "Events", src: "https://www.tesla.com/events" },
  { name: "Workshops", src: "https://www.tesla.com/workshops" },
];
const discover3 = [
  { name: "About", src: "https://www.tesla.com/about" },
  { name: "Careers", src: "https://www.tesla.com/careers" },
  { name: "Investor Relations", src: "https://ir.tesla.com/#quarterly-disclosure" },
];
const discover2 = [
  { name: "Find Us", src: "https://www.tesla.com/findus?bounds=52.70122031185168%2C-64.3473379%2C21.542305545773416%2C-148.7223379" },
  { name: "Find a Collision Center", src: "https://www.tesla.com/support/collision-support" },
  { name: "Find a Collision Installer", src: "https://www.tesla.com/support/certified-installers" },
];

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
					<a className="underline" href="https://www.tesla.com/models">Learn</a> <a className="underline" href="https://www.tesla.com/models/design#overview">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model 3" src="/model3.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model 3</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/model3-choose">Learn</a> <a className="underline" href="https://www.tesla.com/model3/design#overview">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model y" src="/modely.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model Y</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/modely">Learn</a> <a className="underline" href="https://www.tesla.com/modely/design#overview">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model x" src="/modelX.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Model X</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/modelx">Learn</a> <a className="underline" href="https://www.tesla.com/modelx/design#overview">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="cybertruck" src="/cyberTruck.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Cybertruck</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/cybertruck">Learn</a> <a className="underline" href="https://www.tesla.com/cybertruck/design#overview">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="model s" src="/inventory.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Inventory</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/inventory/new/m3?PaymentType=cash">Learn</a> <a className="underline" href="https://www.tesla.com/inventory/used/my?PaymentType=cash">Order</a>
					</div>
					</div>
				</div>
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
					{vehicleLinks.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
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
					<Image alt="solar panels" src="/solar.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Panels</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/solarpanels">Learn</a> <a className="underline" href="https://www.tesla.com/energy/design?poi=solarpanels">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="solar roof" src="/solarRoof.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Solar Roof</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/solarroof">Learn</a> <a className="underline" href="https://www.tesla.com/energy/design?poi=solarroof">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="power wall" src="/powerWall.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Powerwall</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/powerwall">Learn</a> <a className="underline" href="https://www.tesla.com/powerwall">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="megapack" src="/mega.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Megapack</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/megapack">Learn</a>
					</div>
					</div>
				</div>
				
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
					{chargingLinks.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
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
					<Image alt="Charging" src="/charger1.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Charging</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/charging">Learn</a> 
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="homecharger" src="/charger2.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Homecharging</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/home-charging">Learn</a> <a className="underline" href="https://shop.tesla.com/category/charging#charging.at-home">Order</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="powerwall" src="/charger3.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Supercharging</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://www.tesla.com/supercharger">Learn</a> <a className="underline" href="https://www.tesla.com/findus?bounds=52.70122031185168%2C-64.3473379%2C21.542305545773416%2C-148.7223379">Find</a>
					</div>
					</div>
				</div>
				
			</div>
			<div className="border-r"></div>
			<div className="ml-10">
				<ul>
					{energyLink.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
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
				<h1 className="text-gray-400">Resources</h1>
				<ul>
					{discover1.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
						</li>
					))}
					</ul>
			</div>
			
			<div className="ml-10">
				<h1 className="text-gray-400">Location Services</h1>
				<ul>
					{discover2.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
						</li>
					))}
					</ul>
			</div>
			<div className="ml-10">
				<h1 className="text-gray-400">Company</h1>
				<ul>
					{discover3.map((item) => (
						<li key={item.name} className="pt-3 hover:underline font-bold text-sm">
						<a href={item.src}>{item.name}</a>
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
					<Image alt="Charging" src="/charger2.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Charging</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="shop.tesla.com/category/charging">Learn</a> 
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="vehicles accessories" src="/tire.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Vehicle Accessories</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://shop.tesla.com/category/vehicle-accessories">Learn</a> 
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="apparel" src="/cap.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Apparel</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://shop.tesla.com/category/apparel">Learn</a>
					</div>
					</div>
				</div>
				<div className="">
					<Image alt="lifestyles" src="/bagpack.avif" width={220} height={123}></Image>
					<div className="flex items-center flex-col">
					<h1 className="font-bold">Lifestyle</h1>
					<div className="flex gap-3 text-xs text-gray-500">
					<a className="underline" href="https://shop.tesla.com/category/lifestyle">Learn</a>
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