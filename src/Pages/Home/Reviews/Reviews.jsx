import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
        <section className='p-8 md:p-28'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-12'>Reviews Form Our Customers</h1>
    <div className='md:w-1/2 mx-auto'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="w-full h-[600px] md:h-[384px] shadow-xl"
      >
       {
        reviews.map((review, index) => <SwiperSlide key={index}>
            <div className='relative'>
                {/* profile image */}
                {/* <div className='hidden md:block w-[100px] h-[100px] bg-blue-500 p-2 rounded-xl absolute top-32 -left-16 z-50'>
                    <img src={review.image_url} className='object-contain w-full h-full' alt="" />
                </div> */}
                {/* text container */}
                <div className='px-8 py-10 md:px-20 md:py-8'>
                    <FaQuoteLeft className='text-blue-600 text-4xl mb-2'/>
                    <p className='italic'>{review.review}</p>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-5'>
                    <div>
                    <h3>{review.name}</h3>
                    <p><span>{review.position} - <span>{review.company_name}</span></span></p>
                    </div>
                    <div className='w-[150px] md:w-[200px] md:h-[80px]'>
                    <img src={review.company_image} className='object-fill w-full h-full' alt="" />
                    </div>
                    </div>
                </div>

            </div>

        </SwiperSlide>)
       }
      </Swiper>
    </div>
        </section>

  );
};

export default Reviews;
