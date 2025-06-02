"use client";

interface InfoBoxProps{
	title:string,
	p:string,
	btnP:string,
	src:string
}

export default function InfoBox({ title, p,btnP,src }: InfoBoxProps) {
	return (
	<div className="bg-[#f4f4f4] rounded-2xl w-full flex flex-row justify-evenly">
		<div>
		<h1 className="text-3xl font-bold  mt-15">{title}</h1>
		<p className="text-gray-700 text-bold text-md pb-0 ">{p}</p>
		<a className= " flex justify-center bg-white p-2 rounded hover:cursor-pointer hover:bg-gray-200 w-[250px]  mt-5">{btnP}</a>
		</div>
		<div></div>
		<img className="" src={src} width={200} height={200} alt={"Cars"}></img>
	</div>
	)
}