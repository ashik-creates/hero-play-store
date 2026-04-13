import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/images/hero.png";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="container min-h-[70vh] mx-auto pt-10 space-y-5">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            We Build <br /> <span className="text-purple-500">Productive</span>{" "}
            Apps
          </h1>
          <p className="text-gray-500">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="flex gap-3 justify-center items-center">
            <button className="btn">Play Store</button>
            <button className="btn">App Store</button>
          </div>
        </div>
        <Image
          src={bannerImg}
          alt="banner image"
          width={800}
          height={400}
          className="mx-auto w-auto max-h-87.5 object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
