"use client";

export default function Footer(){
	return (
		<>
			<div className="w-full text-xs flex flex-col p-10 pb-0 m-0 text-gray-500">
				<p className="pb-4">1 For Long-Range Rear-Wheel Drive models with 19" wheels.</p>
				<p>2 Before the Federal Tax Credit, Model Y Long Range Rear-Wheel Drive starts at $46,630. Price includes Destination and Order Fees but exclude taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. The $7,500 Federal Tax <br/>
				 available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible.Before the Federal Tax Credit, Model Y Long Range Rear-Wheel Drive starts at $46,630. Price includes Destination and Order Fees but exclude taxes and other <br/> 
				 fees. Subject to change. Vehicle shown has upgrades that will increase the price. The $7,500 Federal Tax Credit is available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.</p>
			</div>
			<div className="w-full text-xs flex flex-col p-10 m-0 text-gray-500 font-bold items-center">
				<ul className="flex flex-row gap-3  hover:cursor-pointer ">
					<li><a className="hover:underline"href="https://www.tesla.com/about">Tesla © 2025</a></li>
					<li><a className="hover:underline"href="https://www.tesla.com/legal">Privacy & Legal</a></li>
					<li><a className="hover:underline"href="https://service.tesla.com/en-US/vin-recall-search">Vehical Recalls</a> </li>
					<li><a className="hover:underline"href="https://www.tesla.com/contact">Contact</a></li> 
					<li><a className="hover:underline"href="https://www.tesla.com/news">News</a></li>
					<li><a className="hover:underline"href="https://www.tesla.com/updates">Get Updates</a></li>
					<li><a className="hover:underline"href="https://www.tesla.com/findus/list">Location</a></li>
					<li><a className="hover:underline"href="https://www.tesla.com/learn">Learn</a></li>
				</ul>
			</div>

		</>
	)
}