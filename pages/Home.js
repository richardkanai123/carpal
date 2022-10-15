import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="container flex flex-col gap-4 relative">
      <div className="sm:w-full md:w-3/4 h-1/5 max-w-screen-lg flex flex-row p-4 bg-green-400 mx-auto mb-5 align-middle items-center  rounded-2xl">
        <section className="mx-auto">
          <h1 className="text-3xl font-bold mb-3 text-white">CarPal</h1>
        </section>

        <section className=" self-end">
          <Image
            src="https://i.ibb.co/1m3ZS7n/car200.png"
            width={50}
            height={50}
            alt="loading car image"
            className="inline-block h-12 w-12 rounded-full ring-1 ring-white max-w-none"
          />
        </section>
      </div>

      <div className="h-4/5 flex flex-wrap  "></div>
    </div>
  );
};

export default Home;
