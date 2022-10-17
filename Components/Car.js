import Image from "next/image";
import React from "react";
import Link from "next/link";

const Car = ({ imgUrl, Type, Reg, CurrentMileage, Status }) => {
  return (
    <Link
      href={`/Cardetails/${Reg}`}
      className=" opacity-80 p-1  shadow-lg "
      key={Reg}
    >
      <div className="h-300 w-350 flex flex-col p-5 align-middle cursor-pointer transition-all hover:opacity-100 hover:-translate-x-1 bg-yellow-50 rounded-xl justify-center text-center">
        <div className="object-cover w-48 mx-auto mb-4  ">
          <Image
            className="rounded-full ring-1 ring-blue-200 max-w-none"
            src={imgUrl}
            width={100}
            height={100}
            alt="car image"
          />
        </div>
        <h2 className="text-xl font-semibold text-sky-400 border-b p-2 ">
          Registration: <span className="font-bold text-sky-800">{Reg}</span>
        </h2>
        <p className="text-xl font-semibold text-sky-400 border-b p-1">
          Type: <span className="font-bold text-sky-800">{Type}</span>
        </p>
        <p className="text-xl font-semibold text-sky-400 border-b p-1">
          Current Mileage:{" "}
          <span className="font-bold text-sky-800">{CurrentMileage}</span>
        </p>
        <p className="text-xl font-semibold text-sky-400 border-b p-1">
          Status:{" "}
          <span
            className={`${
              Status === "Due"
                ? "font-bold text-red-800"
                : "font-bold text-sky-800"
            }`}
          >
            {Status}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Car;
