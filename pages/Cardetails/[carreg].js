import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { FaOilCan, FaAirFreshener } from "react-icons/fa";
const CarDetails = ({
  Reg,
  currentMilage,
  serviceStatus,
  lastOilChangeMilage,
  lastOilUsed,
  nextOilChangeMilage,
  lastOilFilterChangeMilage,
  nextOilFilterChangeMilage,
  lastAirFilterMileageChange,
  nextAirFilterMilageChange,
}) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center p-3 w-full md:w-3/4 lg:w-500 bg-yellow-100 rounded-xl">
      <div className="w-full p-1  flex flex-col text-center items-center justify-center gap-2 mb-3 align-middle mx-auto border-b-4">
        <h4 className="text-4xl font-bold text-sky-800 mb-2 border-b-2">
          {Reg} KCA 001H
        </h4>
        <p className="text-2xl font-semibold flex items-center text-center text-sky-600 gap-2 ">
          <GiPathDistance />
          :12000 {currentMilage}
        </p>
        <p className="text-2xl font-semibold flex items-center text-center text-sky-600 gap-2">
          <GoSettings />: Ok{serviceStatus}
        </p>
      </div>

      <div className="min-w-full flex flex-col  items-center justify-around align-middle p-1 gap-2">
        <div className="sm:w-full flex-1 text-center rounded-lg shadow-xl flex flex-col items-center justify-center gap-2 p-3">
          <FaOilCan className="text-4xl text-red-400 shadow-sm m-auto self-center items-center" />
          <p className="w-full flex flex-row gap-2 items-center justify-between text-center text-base font-semibold text-sky-600 border-b-2 border-sky-50 p-1 ">
            Prev. Oil Change at:
            {lastOilChangeMilage}10000Km
          </p>
          <p className="w-full flex flex-row gap-2 items-center justify-between text-center text-base font-semibold text-sky-600 border-b-2 border-sky-100 p-1">
            Prev. Oil Used:
            {lastOilUsed}Castrol
          </p>
          <p className="w-full flex flex-row gap-2 items-center justify-between text-center text-base font-semibold text-sky-600 border-b-2 border-sky-200 p-1">
            Next Oil Change {"approx"} at:
            {nextOilFilterChangeMilage}km
          </p>
        </div>
        <div className="sm:w-full md:w-1/2 flex-1 text-center">
          <FaAirFreshener className="text-2xl m-auto self-center items-center" />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
