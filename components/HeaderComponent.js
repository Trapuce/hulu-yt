import React from "react";
import logo from "./assets/hulu-2.svg";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export default function HeaderComponent() {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={Square3Stack3DIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        alt="logo"
        width={200}
        height={200}
        src={logo}
        className="object-contain"
      />
    </div>
  );
}
