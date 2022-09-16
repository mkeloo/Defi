import React from 'react';
import subscribe from '../assets/subscribe.jpg';

const Subscribe = () => {
  return (
    <div className="w-full h-[700px] px-4 py-16 text-white text-center flex flex-col justify-center items-center">
      <img
        className="object-cover h-full w-full absolute -z-10"
        src={subscribe}
        alt="/"
      />
      <h1 className="z-4 link link-underline link-underline-black">
        Join Our DeFi Community
      </h1>
      <div className="py-4 ">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2 ">
        <input className="mr-2 " type="checkbox" />
        <p className="text-xl">
          Yes, I agree to receive email communications from DeFi.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
