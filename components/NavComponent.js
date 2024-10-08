import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
export default function NavComponent() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10  sm:space-x-20 overflow-x-scroll scrollbar-hide text-2xl">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-20  cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </div>
  );
}
