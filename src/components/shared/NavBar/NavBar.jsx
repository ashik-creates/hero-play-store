import React from "react";
import MyLinks from "./LinksComponent/MyLinks";
import navLogo from "@/assets/images/logo.png";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";

const NavBar = () => {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installations",
      text: "Installations",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];
  return (
    <div className="shadow-sm">
      <div className="flex justify-between items-center py-3 container mx-auto">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={navLogo}
            alt="Nav bar logo"
            width={50}
            height={50}
          ></Image>
          <h1 className="font-bold">HERO.IO</h1>
        </div>
        <div className="flex justify-center items-center gap-3 font-semibold">
          {links.map((item, ind) => (
            <MyLinks key={ind} href={item.path}>
              {item.text}
            </MyLinks>
          ))}
        </div >
        <button className="btn bg-purple-500 text-white "><IoLogoGithub></IoLogoGithub> Contribute</button>
      </div>
    </div>
  );
};

export default NavBar;
