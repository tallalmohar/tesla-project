"use client";
import { useState } from "react";

import { ReactNode } from "react";

export default function Dropdown({children}: { children: ReactNode }){
	return(
		
			<div className="flex justify-center items-center w-screen h-[468px] bg-white shadow-lg rounded z-10">
                <div>
					{children}
				</div>
				
            </div>
		
	)
};