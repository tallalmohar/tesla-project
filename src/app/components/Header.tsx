"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          <button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition">
            Vehicles
          </button>
          <button className="px-3 hover:bg-gray-200 hover:cursor-pointer rounded transition">
            Energy
          </button>
          <button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition">
            Charging
          </button>
          <button className="px-3  hover:bg-gray-200 hover:cursor-pointer rounded transition">
            Discover
          </button>
          <button
            className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded transition"
            onClick={shopClick}
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
    </>
  );
}
