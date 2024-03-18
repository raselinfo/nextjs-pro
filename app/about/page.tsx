import Test from "@/components/Test";
import React from "react";
import thumb from "@/public/dog.jpeg";
import Image from "next/image";
import { Metadata } from "next";
const image_url =
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";

export const metadata: Metadata = {
  title: "About page",
  description: "This is about page",
};
const About = () => {
  return (
    <div>
      This is about page
      <Test />
      <div className="w-[200px]">
        <Image
          // className="bg-white p-5 m-5"
          src={image_url}
          width={500}
          height={500}
          alt="thumb"
          // quality={100}
          // placeholder="blur"
          // blurDataURL={thumb.src}
        />
      </div>
    </div>
  );
};

export default About;
