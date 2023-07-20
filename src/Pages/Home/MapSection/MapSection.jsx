/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
const MapSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
    
  return (
    <section>
      <div className="relative">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1081507253907!2d77.64786557579468!3d12.900766716425807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155592db98cd%3A0x2cfeaebf1a29ce94!2sZeppstr!5e0!3m2!1sen!2sbd!4v1689868472133!5m2!1sen!2sbd" loading="lazy" className="w-full h-[590px]"></iframe>
        </div>
        <div className="bg-[#295DF3] md:w-2/5 h-fit text-white p-6 space-y-4 rounded-lg absolute top-10 right-10">
          <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
        <form className="form-control space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="input input-bordered rounded-3xl bg-blue-800 placeholder:text-white"
              placeholder="Your Name*"
              {...register("name", { required: true})}
            />
            {errors.name && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="email"
              className="input input-bordered rounded-3xl bg-blue-800 placeholder:text-white"
              placeholder="Your Email Address*"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="tel"
              className="input input-bordered rounded-3xl bg-blue-800 placeholder:text-white"
              placeholder="Your Number*"
              {...register("number", { required: true })}
            />
            {errors.number && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="url"
              className="input input-bordered rounded-3xl bg-blue-800 placeholder:text-white"
              placeholder="Website URL*"
              {...register("url", { required: true })}
            />
            {errors.url && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="url"
              className="input input-bordered rounded-3xl bg-blue-800 placeholder:text-white"
              placeholder="Company Name"
              {...register("company")}
            />
            
          <input className="btn text-white hover:text-black border-none rounded-3xl p-4 w-full bg-[#EC642B]" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
