import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Button from "../../../Components/Button/Button";
import Swal from 'sweetalert2';
const Form = () => {
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {console.log(data)
        Swal.fire(
          'Submitted',
          'You have successfully submitted your application.',
          'success'
        )
    };

      
    return (
        <>
           <form className="form-control space-y-4"
           ref={form}
           onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="input input-bordered bg-white placeholder:text-black"
              placeholder="NAME"
              {...register("name", { required: true})}
            />
            {errors.name && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="email"
              className="input input-bordered bg-white placeholder:text-black"
              placeholder="EMAIL"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500">this field is required</span>
            )}

            <input
              type="text"
              className="input input-bordered bg-white placeholder:text-black"
              placeholder="Company Name"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <span className="text-red-500">this field is required</span>
            )}
            <input
              type="url"
              className="input input-bordered bg-white placeholder:text-black"
              placeholder="URL"
              {...register("url", { required: true })}
            />
            {errors.url && (
              <span className="text-red-500">this field is required</span>
            )}
           <div className="text-center">
             <Button>contacts</Button>
           </div>
          </form> 
        </>
    );
};

export default Form;