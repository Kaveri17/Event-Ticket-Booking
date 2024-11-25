import React from "react";
import {
  FaCalendar,
  FaCalendarAlt,
  FaDollarSign,
  FaTicketAlt,
  FaUsers,
} from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div
      className="py-10 w-11/12 mx-auto px-2 flex flex-wrap justify-evenly"
      //   style={ md:flex-row flex-col{
      //     display: "grid",
      //     gridTemplateColumns: "repeat(2, 1f1/2 mx-auto md:mx-0 md:py-0,
      //     gap: "20px",
      //   }}
    >
      {/* <Sidebar/> */}
      {/* Total income of the week */}
      <div className="cards flex flex-col md:flex-row w-[87%] justify-between">
        <DashboardCard
          icon={<FaTicketAlt />}
          tittle="Total Income of Week"
          value="Rs 250"
        //   className="my-2"
        />

        {/* Customer */}
        <DashboardCard icon={<FaUsers />} tittle="Customer" value={1200} />
      </div>
      
      {/* <div className="cards flex w-[87%] justify-between bg-slate-300">
      </div> */}
        {/* <DashboardCard
          icon={<FaTicketAlt />}
          tittle="Total Income of Week"
          value="Rs 250"
        /> */}

        {/* Customer */}
        {/* <DashboardCard icon={<FaUsers />} tittle="Customer" value={1200} /> */}

      {/* Best Selling ticket */}
      <div className="best-sales w-[87%] py-10">
        <h1 className="text-2xl font-semibold pb-2">Best Selling ticket</h1>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/holi.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-info flex flex-col justify-center px-2 md:px-1 w-full md:w-3/4 lg:w-5/6 md:py-0 py-1 ">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              beatae fugiat? Aut quo laborum possimus voluptatem praesentium
              quaerat asperiores! Quae!
            </p>
          </div>
        </div>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/thamel.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-info flex flex-col justify-center px-2 md:px-1 w-full md:w-3/4 lg:w-5/6 md:py-0 py-1 ">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              beatae fugiat? Aut quo laborum possimus voluptatem praesentium
              quaerat asperiores! Quae!
            </p>
          </div>
        </div>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/sports.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-info flex flex-col justify-center px-2 md:px-1 w-full md:w-3/4 lg:w-5/6 md:py-0 py-1 ">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              beatae fugiat? Aut quo laborum possimus voluptatem praesentium
              quaerat asperiores! Quae!
            </p>
          </div>
        </div>
      </div>

      {/* Recent event lists */}
      <div className="recent-events w-[87%] py-10">
        <h1 className="text-2xl font-semibold pb-2">Recent Events</h1>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/holi.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-Tittle flex flex-col justify-center items-center px-2 md:px-1 w-full md:w-1/3 md:py-0 py-1">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="ticket-details w-full md:w-1/2 flex items-center justify-evenly md:py-0 py-1">
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaDollarSign className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">Rs. 500</span>
            </div>
            <div className="icon flex flex-col items-center w-1/3 ">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaTicketAlt className="text-white py-2 text-[2.2rem] sm:text-[2.5rem] -rotate-45" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                30 Tickets
              </span>
            </div>
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaCalendarAlt className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                20-11-2024
              </span>
            </div>
          </div>
        </div>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/thamel.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-Tittle flex flex-col justify-center items-center px-2 md:px-1 w-full md:w-1/3 md:py-0 py-1">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="ticket-details w-full md:w-1/2 flex items-center justify-evenly md:py-0 py-1">
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaDollarSign className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">Rs. 500</span>
            </div>
            <div className="icon flex flex-col items-center w-1/3 ">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaTicketAlt className="text-white py-2 text-[2.2rem] sm:text-[2.5rem] -rotate-45" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                30 Tickets
              </span>
            </div>
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaCalendarAlt className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                20-11-2024
              </span>
            </div>
          </div>
        </div>
        <div className="best-tickets flex justify-center md:flex-row flex-col py-2">
          <div className="ticket-img w-4/5 sm:w-1/2 mx-auto md:mx-0 md:w-1/4 lg:w-1/6 h-40 pe-2">
            <img
              src="/sports.jpg"
              alt="bestselling1"
              className="w-full rounded-xl h-full"
            />
          </div>
          <div className="ticket-Tittle flex flex-col justify-center items-center px-2 md:px-1 w-full md:w-1/3 md:py-0 py-1">
            <h1 className="text-lg md:text-xl font-medium py-1 tracking-wide md:text-left text-center">
              Ticket Tittle
            </h1>
            <p className="text-justify text-sm md:text-base">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="ticket-details w-full md:w-1/2 flex items-center justify-evenly md:py-0 py-1">
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaDollarSign className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">Rs. 500</span>
            </div>
            <div className="icon flex flex-col items-center w-1/3 ">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaTicketAlt className="text-white py-2 text-[2.2rem] sm:text-[2.5rem] -rotate-45" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                30 Tickets
              </span>
            </div>
            <div className="icon flex flex-col items-center w-1/3">
              <div className="tic-ic bg-orange-400 rounded-full">
                <FaCalendarAlt className="  text-white py-2 text-[2.2rem] sm:text-[2.5rem]" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                20-11-2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
