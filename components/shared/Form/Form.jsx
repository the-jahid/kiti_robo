"use client";

import { fetchUserProfile } from "@/utils/object-utils";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { redirect } from 'next/navigation'
import { useDispatch } from "react-redux";
import { setLoggedIn } from "@/features/users/useSlice";
import { useState } from "react";

const InputField = ({ label, id, type, register, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={id}
        required={required}
        {...register(id, { required: true })}
        className=" px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
);


const Form = (props) => {

  const { login = false, feedback = false, order = false } = props;
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const [topic, setTopic] = useState('');


  const onSubmit =  (data) => {
    const {firstName, lastName, email, password} = data;

    if (login) {
      const logindata = { email, password }
      axios.post('http://203.190.8.197/auth/login', logindata)
        .then( async response => {

          localStorage.setItem('jwtToken', response.data.token);
          toast.success('Successfully Logged In!');
           await fetchUserProfile();
           dispatch(setLoggedIn());
           window.location.reload()
           
        })
        .catch(error => {
          console.log('error', error)
          toast.error("Server is not Responding....")
        });

      reset();
    } else if (feedback) {
      console.log("feedbackData", data);
    } else if (order) {
      console.log("orderData", data);
    } else {
      
    const registerData = {
      first_name:firstName,
      last_name:lastName,
      email,
      password
    }

      axios.post('http://203.190.8.197/auth/register', registerData)
      .then( async response => {
        
          
          toast.success('Successfully Registered!');
          
           window.location.reload()
      })
      .catch(error => {
        toast.error('There is same email with this account please try another email');
      });

      reset();
    }

    
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {login
              ? "Login to your account"
              : feedback
              ? ""
              : "Registration to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Registration section */}
            {!login && !feedback && (
               <>
               <InputField label="First Name" id="firstName" type="text" register={register} required />
               <InputField label="Last Name" id="lastName" type="text" register={register} required />
               <InputField label="Email address" id="email" type="email" register={register} required />
               <InputField label="Password" id="password" type="password" register={register} required />
             </>
            )}
            {/* Login section */}
            {login && (
                <>
                <InputField label="Email address" id="email" type="email" register={register} required />
                <InputField label="Password" id="password" type="password" register={register} required />
              </>
            )}


             {feedback && (
              <>
  
<div>
  {/* Email section */}
  <InputField label="Email address" id="email" type="email" register={register} required />
  {/* Select Problem section */}
  <div className="flex flex-col sm:flex-row">
    <label
      htmlFor="topic"
      className="block text-sm sm:text-xl font-bold leading-6 text-gray-900"
    >
      Select Contact Topic
    </label>
    <div className="mt-2 sm:mt-0 sm:ml-4">
      <label>
        <input
          type="radio"
          name="topic"
          id="topic1"
          checked={topic === 'About Kiti'}
          onChange={() => setTopic('About Kiti')}
          className="mx-2"
        />
        About Kiti
      </label>
      <label>
        <input
          type="radio"
          name="topic"
          id="topic2"
          checked={topic === 'About Food'}
          onChange={() => setTopic('About Food')}
          className="mx-2"
        />
        About Food
      </label>
      <label>
        <input
          type="radio"
          name="topic"
          id="topic3"
          checked={topic === 'About Discount'}
          onChange={() => setTopic('About Discount')}
          className="mx-2"
        />
        About Discount
      </label>
      <label>
        <input
          type="radio"
          name="topic"
          id="topic4"
          checked={topic === 'About Restaurant'}
          onChange={() => setTopic('About Restaurant')}
          className="mx-2"
        />
        About Restaurant
      </label>
    </div>
  </div>
  {/* Comment section */}
  <div className="mt-4">
    <label
      htmlFor="comment"
      className="block text-sm sm:text-xl font-medium leading-6 text-gray-900"
    >
      Your Problem
    </label>
    <div className="mt-2">
      <textarea
        id="comment"
        name="comment"
        type="text"
        rows={4}
        autoComplete="comment"
        required
        {...register("comment", { required: true })}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</div>
              </>
            )} 

            <div>
              <button
                type="submit"
                placeholder="Login"
                className=" bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {login ? "Login" : feedback ? "Send" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
