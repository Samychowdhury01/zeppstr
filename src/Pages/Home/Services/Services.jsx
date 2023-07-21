import React from "react";
import seo from "../../../assets/home/SEO.png";

const Services = () => {
  return (
    <section className="mb-16">
      <div>
        <div className="bg-blue-500 flex flex-col md:flex-row px-12 py-10 text-white md:h-96">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">Services We Offer</h1>
            <h3 className="text-2xl font-semibold">
              Want to generate more traffic to your website? we know how to
              drive long-tern growth
            </h3>
          </div>
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quos quis fuga accusantium dolores cum sint laborum, libero sequi,
              voluptates, aspernatur necessitatibus voluptatem tempora dolore
              inventore? Iste saepe aut ab nemo, adipisci expedita nulla eum
              aperiam non fugit, debitis commodi laudantium velit assumenda
              possimus reprehenderit nam quidem? Voluptatum, officiis hic.
            </p>
          </div>
        </div>
        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black px-2 mt-5 md:-mt-36">
        <div className="md:col-span-2 w-full card lg:card-side bg-yellow-500 shadow-xl rounded-none text-white">
            <div className="card-body mt-10">
              <h2 className="card-title">Global SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse
                labore nulla culpa quos iste dolores perferendis inventore
                maxime sint.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
            <figure>
              <img
                src={seo}
                className="object-contain w-full h-full"
                alt="image"
              />
            </figure>
          </div>
          <div className="card w-full bg-[#E9D1D7] shadow-xl rounded-none pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-full bg-[#6EDCF3] shadow-xl rounded-none pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-full bg-[#E6BAA0] shadow-xl rounded-none pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card w-full bg-[#2B5FF6] shadow-xl rounded-none text-white pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-full bg-[#AAD2EA] shadow-xl rounded-none text-white pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-full bg-[#6AD1B4] shadow-xl rounded-none text-white pt-10">
            <figure>
              <img src={seo} alt="seo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gobal SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vitae nisi veniam delectus consequatur rerum.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="md:col-span-2 w-full card lg:card-side bg-[#3F33A2] shadow-xl rounded-none text-white">
            <div className="card-body mt-10">
              <h2 className="card-title">Global SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse
                labore nulla culpa quos iste dolores perferendis inventore
                maxime sint.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
            <figure>
              <img
                src={seo}
                className="object-contain w-full h-full"
                alt="image"
              />
            </figure>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-5">
          <button className="btn btn-primary btn-outline rounded-3xl shadow-xl">Request a free quote</button>
          <button className="btn btn-primary rounded-3xl shadow-xl shadow-[#849fe9ab]">Talk to our Expert</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
