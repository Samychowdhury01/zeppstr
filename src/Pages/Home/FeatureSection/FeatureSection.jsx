/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BiPen } from "react-icons/bi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import Button from "../../../Components/Button/Button";

const FeatureSection = () => {
  return (
    <section className="mb-16 px-8 md:px-28">
      <div className="flex flex-col md:flex-row items-center gap-28">
        {/* text container */}
        <div className="space-y-[38px] text-black">
          <h2 className="text-3xl font-medium">
            What do we offer you as an{" "}
            <span className="text-primary">SEO Agency?</span>
          </h2>
          <p>
            Nowadays, SEO optimization is an indispensable element for
            businesses that want to succeed online. Our SEO strategies will help
            you grow your business online and rank higher in Google search
            results. In addition, our dedicated team will also provide weekly
            and monthly reports of your page's positions regarding the used
            keywords, links obtained and indexed pages.
          </p>
          <div className="flex gap-12">
            <div>
              <h3 className="text-3xl font-medium text-primary">1.9k</h3>
              <p className="text-lg text-black">Total Audience</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-secondary">5.7k</h3>
              <p className="text-lg text-black">Total Audience</p>
            </div>
          </div>
          <Button>Explore Now</Button>
        </div>
        {/* icon container */}
        <div className="flex flex-col md:flex-row md:gap-5">
          {/* left side */}
          <div>
            <div className="border bg-white border-[#E71D36] rounded-3xl p-5 space-y-3 mb-8 md:w-[270px]">
              <div className="w-[100px] h-[100px] bg-[#FFECEA] flex items-center justify-center rounded-xl">
                <BiPen className="text-primary text-5xl" />
              </div>
              <h4 className="text-2xl font-medium text-black">Global SEO</h4>
              <p className="text-black">
                We combine creative SEO tactics, enhanced marketing techniques,
                and high-end inbound content marketing to help businesses rank
                in the targeted country.
              </p>
            </div>
            <div className="bg-[#F6FFFE] border border-[#2EC4B6] rounded-3xl p-5 space-y-3 mb-8 md:w-[270px]">
              <div className="w-[100px] h-[100px] bg-[#D2FFFB] flex items-center justify-center rounded-xl">
                <FaMagnifyingGlassChart className="text-secondary text-5xl" />
              </div>
              <h4 className="text-2xl font-medium text-black">Global SEO</h4>
              <p className="text-black">
                We combine creative SEO tactics, enhanced marketing techniques,
                and high-end inbound content marketing to help businesses rank
                in the targeted country.
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="md:mt-[100px]">
            <div className="bg-[#F6FFFE] border border-[#2EC4B6] rounded-3xl p-5 space-y-3 mb-8 md:w-[270px]">
              <div className="w-[100px] h-[100px] bg-[#D2FFFB] flex items-center justify-center rounded-xl">
                <FaMagnifyingGlassChart className="text-secondary text-5xl" />
              </div>
              <h4 className="text-2xl font-medium text-black">Global SEO</h4>
              <p className="text-black">
                We combine creative SEO tactics, enhanced marketing techniques,
                and high-end inbound content marketing to help businesses rank
                in the targeted country.
              </p>
            </div>
            <div className="border border-[#E71D36] bg-white rounded-3xl p-5 space-y-3 md:w-[270px]">
              <div className="w-[100px] h-[100px] bg-[#FFECEA] flex items-center justify-center rounded-xl">
                <BiPen className="text-primary text-5xl" />
              </div>
              <h4 className="text-2xl font-medium text-black">Global SEO</h4>
              <p className="text-black">
                We combine creative SEO tactics, enhanced marketing techniques,
                and high-end inbound content marketing to help businesses rank
                in the targeted country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
