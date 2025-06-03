"use client";
import Image from "next/image";

interface ScrollCardProps{
	src:string,
	carType:string,
	carName:string,
	price:string,id:string,
	href1: string,
	href2:string
}

export default function ScrollCard({src, carType, carName, price, id,href1, href2}: ScrollCardProps ){

	return (
		<>
			
				<div id={id} className="m-5 mt-0 mb-0 relative h-auto w-[1024px] flex-shrink-0">
					<h1 className="absolute top-15 left-20 text-white text-md font-bold">{carType}</h1>
					<h1 className="absolute top-100 left-20 text-white text-6xl font-bold">{carName}</h1>
					<h1 className="absolute top-115 left-20 text-white text-md underline">{price}</h1>
					<a  href={href1} className="absolute top-85 left-20 flex justify-center w-[170px] mt-40 p-2 bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700 ">Order Now</a>
        			<a  href={href2}className=" absolute top-85 left-70 flex justify-center w-[170px] mt-40 p-2  bg-white rounded hover:cursor-pointer hover:bg-gray-100  ">Learn More</a>
				
					<img className="rounded-xl " src={src} width={1024} height={500} alt={"Different Tesla Cars"}></img>
				</div>
			
		</>
	)
}