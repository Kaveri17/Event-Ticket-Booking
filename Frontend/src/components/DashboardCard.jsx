import React from "react";

const DashboardCard = ({ icon, tittle, value }) => {
  return (
    <div className="w-11/12 sm:w-3/4 md:w-[45%] mx-auto flex flex-col bg-slate-100 justify-evenly items-center rounded-2xl hover:cursor-pointer shadow-md hover:shadow-lg h-[15rem] sm:h-[17rem] md:my-0 my-2 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider ">{tittle}</h1>
      <div className="flex justify-evenly items-center w-1/2">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-orange-600">{icon}</div>
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl md:py-1 italic">{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
