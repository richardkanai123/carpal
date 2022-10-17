import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { FaOilCan, FaAirFreshener } from "react-icons/fa";
const CarDetails = ({
  carReg,
  currentMilage,
  serviceStatus,
  lastOilChangeMilage,
  lastOilChangeDate,
  lastOilUsed,
  nextOilChangeMilage,
  lastOilFilterChangeMilage,
  lastOilFilterChangeDate,
  nextOilFilterChangeMilage,
  lastAirFilterMileageChange,
  nextAirFilterMilageChange,
}) => {
  return (
    <div className="sm:w-full flex flex-col justify-center p-2 gap-2 shadow-sm  md:w-350 lg:max-w-sm sm:min-h-full h-fit bg-yellow-100 text-center  rounded-lg items-center ">
      <div className=" font-bold text-sky-800 border-b border-3 flex flex-col gap-2">
        <h3 className="text-2xl">{carReg}KBC 001H</h3>
        <p className="text-xl font-semibold text-sky-900 flex justify-center align-middle items-center gap-2">
          Mileage
          <GiPathDistance className="text-lime-400" />:{currentMilage} 67872
        </p>

        <p className="text-center text-cyan-900 font-bold text-lg flex justify-center items-center align-middle gap-1 ">
          <GoSettings /> Service Status: {serviceStatus} Due
        </p>
      </div>

      <div className="flex w-full justify-around items-center align-middle flex-wrap text-center gap-1">
        <div className=" w-full md:w-1/2 p-1 mt-2 border-b-2 opacity-95">
          <FaOilCan />
        </div>
        <div className=" w-full md:w-1/2 p-1 mt-2 border-b-2 opacity-95">
          <FaAirFreshener />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
