/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image from "../../../assets/home/image-7.png";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="mb-16 p-8 md:p-28">
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div>
          <h1 className="text-3xl md:text-5xl text-orange-600 font-bold">
            Our Blog
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            Innovation and new ideas
          </h3>
        </div>
        <p className="md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vero
          ipsum tempora, pariatur eum delectus quasi error facere, quam alias
          maiores odio cumque? Quia, dignissimos.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="card rounded-none md:w-4/5 bg-white shadow-xl relative">
          <figure className="h-[300px]">
            <img
              src={image}
              className="object-cover w-full h-full"
              alt="image"
            />
          </figure>
          <div className="card-body">
            <div className="bg-white text-black shadow-xl w-40 p-2 absolute top-[50%] md:top-[43%]">
            <h5 className="font-semibold">February 28, 2023</h5>
            </div>
            <h2 className="card-title"> why is SEO is important for every business</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                eveniet sint dicta totam. Quam velit asperiores ducimus quia
                reprehenderit odio ratione deleniti laborum dolorum rem! <Link className="text-primary btn-link ml-2">
          Read More..
          </Link></p>
          
          </div>
        </div>
        <div className="w-full">
          <div className="card lg:card-side rounded-none bg-white text-black shadow-xl mb-10">
            <figure className="md:w-1/2">
              <img
                src={image}
                className="object-cover w-full h-full"
                alt="Album"
              />
            </figure>
            <div className="card-body md:w-1/2">
              <h5 className="font-semibold">February 28, 2023</h5>
              <h2 className="card-title">
                why is SEO is important for every business
              </h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                eveniet sint dicta totam. Quam velit asperiores ducimus quia
                reprehenderit odio ratione deleniti laborum dolorum rem! <Link className="text-primary btn-link ml-2">
          Read More..
          </Link></p>
            </div>
          </div>
          <div className="card lg:card-side rounded-none bg-white shadow-xl">
            <figure className="md:w-1/2">
              <img
                src={image}
                className="object-cover w-full h-full"
                alt="Album"
              />
            </figure>
            <div className="card-body md:w-1/2">
            <h5 className="font-semibold">February 28, 2023</h5>
              <h2 className="card-title">
                why is SEO is important for every business
              </h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                eveniet sint dicta totam. Quam velit asperiores ducimus quia
                reprehenderit odio ratione deleniti laborum dolorum rem! <Link className="text-primary btn-link ml-2">
          Read More..
          </Link></p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
