/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const IndustrySection = () => {
  return (
    <section className="md:p-28 mb-16 p-8 text-black">
      <div className="md:w-2/3 mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
        <p className="md:text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#FFF8F8] flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Healthcare</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-white flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Finance</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-[#FFF8F8] flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Infrastructure</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-white flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Government</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-[#FFF8F8] flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Entertainment</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-white flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Automotive</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-[#FFF8F8] flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Healthcare</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-white flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Healthcare</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-[#FFF8F8] flex items-center gap-5 p-5 gradient-border">
          <div className="bg-primary w-20 h-20 rounded-lg"></div>
          <div className="space-y-2 w-1/2">
            <h2 className="text-lg font-medium">Healthcare</h2>
            <p>Promotion World has once placed PageTraffic among the top.</p>
            <Link className="text-primary flex items-center gap-2">
              <span>Read more</span> <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
