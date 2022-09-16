import React from 'react';
import terminal from '../assets/terminal.png';

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1 className="mb-5 mt-5">
            <span className="link link-underline link-underline-black mb-10">
              Superpowers for DEFI developers.
            </span>
          </h1>
          <p className="text-xl">
            Checkout the <span className="blue">documentation</span>, the{' '}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-16 mb-5">
          <img
            className="max-w-[300px] shadow-lg shadow-cyan-500/50 mt-[-30px] duration-300 hover:scale-110"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
