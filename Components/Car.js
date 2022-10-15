import Image from "next/image";
import React from "react";

const Car = ({ imgUrl, Type, Reg, CurrentMileage, Status }) => {
  return (
    <div className="h-300 w-350 flex flex-col p-5 align-middle justify-center text-center opacity-80 bg-yellow-50 rounded-xl shadow-lg cursor-pointer transition-all hover:opacity-100 hover:-translate-x-1">
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
  );
};

export default Car;
