/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../../../Components/Button/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";

const Banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);
  return (
    <section className="banner-bg p-8 md:p-28">
      <div className="flex md:justify-between lg:justify-around flex-col md:flex-row gap-4 md:gap-12">
        {/* text container */}
        <div className="w-full md:w-[550px] space-y-4 md:space-y-6">
          <h1 className="uppercase text-2xl md:text-5xl font-bold">
            Best <span className="text-primary">SEO Services</span> Company in
            Bangalore
          </h1>
          <h4 className="text-lg md:text-xl font-medium tracking-wider">
            Get past your competition with latest SEO strategies
          </h4>
          <p>
            If you're looking for the best SEO company for your business,
            PageTraffic is the perfect choice.
          </p>
          <div>
            <Button>Talk to our Expert</Button>
            <Link to="audit" smooth={true} className="btn btn-link text-primary text-xl font-medium">
              Free Website Audit
            </Link>
          </div>
        </div>

        {/* form container */}
        <div className="w-full md:w-[498px] form-bg p-5 md:px-6 md:py-12">
          <form className="form-control space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="input input-bordered"
              placeholder="NAME"
              {...register("name", { required: true})}
            />
            {errors.name && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="email"
              className="input input-bordered"
              placeholder="EMAIL"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="tel"
              className="input input-bordered"
              placeholder="PHONE NUMBER"
              {...register("number", { required: true })}
            />
            {errors.number && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="number"
              className="input input-bordered"
              placeholder="OTP"
              {...register("otp", { required: true })}
            />
            {errors.otp && (
              <span className="text-red-500">this field is required</span>
            )}
           <div className="text-center">
             <Button>contacts</Button>
           </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// export default function App() {
//
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (

//   );
// }
