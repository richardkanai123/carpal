import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const CreateAccount = () => {
  const handleCreateAccount = (e) => {
    console.log(e.target);
  };
  return (
    <div className=" bg-lime-500 w-full lg:w-3/4 p-5 m-auto flex flex-col items-center text-center gap-3 justify-center align-middle lg:flex-row lg:gap-3 lg:justify-around   rounded-md shadow-lg ">
      <section className="flex flex-col gap-1 w-full lg:w-1/2 border-double">
        <div>
          <h1 className="text-5xl font-bold mb-3 text-white">CarPal</h1>
          <h6 className="text-lg text-white font-bold">
            {" "}
            Your Car Service Partner{" "}
          </h6>
        </div>
        <div>
          <Image
            src="https://i.ibb.co/1m3ZS7n/car200.png"
            width={200}
            height={200}
            alt="loading car image"
            className="rounded-full max-w-none animate-pulse"
          />
        </div>
      </section>

      <section className="flex flex-col gap-1 w-full lg:w-1/2 p-2">
        <form className="flex flex-col gap-1 w-full p-1 mb-5">
          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            required
            className="block w-full md:w-3/4  font-semibold self-center px-4 py-3 bg-slate-100 border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder:slate-400 focus:outline-none focus:ring-indigo-500 focus:border-green-900 sm:text-lg focus:bg-white"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your Email"
            required
            className="block w-full md:w-3/4  font-semibold self-center px-4 py-3 bg-slate-100 border-slate-300 rounded-md text-sm shadow-sm placeholder:slate-400 focus:outline-none focus:ring-indigo-500 focus:border-green-900 sm:text-lg focus:bg-white"
          />
          <input
            type="password"
            name="userPass"
            placeholder="Enter your password"
            required
            className="block w-full md:w-3/4 font-semibold self-center px-4 py-3 bg-slate-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder:slate-400 focus:outline-none focus:ring-indigo-500 focus:border-green-900 sm:text-lg focus:bg-white"
          />
          <button
            className=" w-2/3 self-center text-center items-center  p-2 mt-3 rounded-md justify-center flex-row bg-slate-700 text-white text-md hover:opacity-70"
            onClick={handleCreateAccount}
            type="submit"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 w-full flex items-center text-center ">
          <button className="flex w-300 text-center mx-auto self-center items-center gap-2 p-3 rounded-md justify-center flex-row bg-slate-700 text-white text-lg hover:opacity-70">
            <FcGoogle />
            Sign Up With Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
