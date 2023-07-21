import React from "react";
import Button from "../../../Components/Button/Button";
import { useForm } from "react-hook-form";
const SeoAudit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    window.my_modal_5.showModal()
    console.log(data);
  };
  //   console.log(errors);
  const handleDetailsData = (event) =>{
    event.preventDefault()
    console.log('ok');
  } 
  return (
    <section id="audit" className="gradient-bg p-8 md:p-28 mb-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Get a Free SEO Audit!</h1>
        <p className="text-lg mb-11">
          Let us increase the search engine rank and site traffic of your
          website. Our team of professional SEO experts and copywriters allows
          us to meet the needs of companies with complex websites in competitive
          industries.
        </p>
      </div>
      <div>
        <form
          className="flex flex-col md:flex-row items-center justify-center gap-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="url"
            className="input input-bordered bg-white placeholder:text-black placeholder:font-medium py-5 rounded-[50px] shadow-xl w-[350px]"
            placeholder="Enter Your Website URL.."
            {...register("url", { required: true })}
          />
          {errors.url && (
            <span className="text-red-500">this field is required</span>
          )}
          <input
            type="email"
            className="input input-bordered bg-white placeholder:text-black placeholder:font-medium py-5 rounded-[50px] shadow-xl w-[350px]"
            placeholder="Enter Your Email ID"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="text-red-500">this field is required</span>
          )}
          <input
            type="submit"
            className="bg-[#2EC4B6] text-white text-xl font-medium py-5 px-12 rounded-[50px] shadow-2xl shadow-[#2ec4b67a]"
            value="Free Website Audit"
          />
        </form>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box" onSubmit={handleDetailsData}>
          <h3 className="font-bold text-lg">Free SEO Audit</h3>
          <p className="py-4">
            Fill the form for a free SEO audit of your website
          </p>
          <div>
            <div>
            <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input type="text" placeholder="Company Name" className="input input-bordered w-full" />
            <label className="label">
            <span className="label-text">Website URL</span>
          </label>
          <input type="url" placeholder="Website URL" className="input input-bordered w-full" />
            </div>
            <input
            type="submit"
            className="bg-[#2EC4B6] text-white text-lg font-medium py-2 px-6 rounded-[50px] shadow-2xl shadow-[#2ec4b67a] mt-5"
            value="submit"
          />
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
      </dialog>
    </section>
  );
};

export default SeoAudit;
