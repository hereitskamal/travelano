import React, { useState } from "react";
import DateRangePicker from "./Components/HomePageComponents/DateRangePicker";
import GroupedSelect from "./GroupSelect";
import { FiSearch } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";

const TourSelector = () => {
  const [calendar, setCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [where, setWhere] = useState(false);
  const [displayDates, setDisplayDates] = useState(false);

  const openCalendar = () => {
    setDisplayDates(true);
    setCalendar(true);
  };

  const closeCalendar = () => {
    setCalendar(false);
  };

  const handleDateRangeSelect = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div
      className={` ${
        window.innerWidth > 650 ? "flex justify-center items-center rounded-full":"rounded-md"
      } border m-1.5 `}
    >
      <div className="date-range-container m-1 p-1 flex justify-center">
        <button
          onClick={openCalendar}
          type="button"
          className="p-2 px-4 mr-2 bg-blue-400 flex items-center text-white hover:bg-blue-500 rounded-full"
        >
         <FaCalendar/> &nbsp; Choose Dates
        </button>
        {displayDates && (
          <div className="start-date flex rounded-xl mx-3">
            <span className="m-1 p-1 border-grey-500 font-semibold text-green-600">
              {startDate ? startDate : "dd/mm/yyyy"}
            </span>
            <p className="m-1 p-1 ">To:</p>
            <span className="m-1 p-1 border-grey-500 font-semibold text-green-600">
              {endDate ? endDate : "dd/mm/yyyy"}
            </span>
          </div>
        )}
      </div>

      {
        <div className="p-2  flex justify-center items-center bg-white rounded-full">
          <div className="flex items-center ">
            <GroupedSelect />
            <button
              type="button"
              className="p-3 text-white bg-green-400 ml-2 hover:bg-green-600 rounded-full"
            >
              <FiSearch />
            </button>
          </div>
          {calendar && (
            <DateRangePicker
              closeModal={closeCalendar}
              onSelectRange={handleDateRangeSelect}
            />
          )}
        </div>
      }
    </div>
  );
};

export default TourSelector;
