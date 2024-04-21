import React, { useState } from "react";
import DateRangePicker from "./Components/HomePageComponents/DateRangePicker";
import GroupedSelect from "./GroupSelect";

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
    <div className="p-1.5 border border-grey-700 rounded-b-xl">
        <div
          class="inline-flex shadow-sm w-full flex justify-between"
          role="group"
        >
          <button
            onClick={() => {
              setWhere(false);
            }}
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 border-b-0 w-1/3 rounded-tl-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            When to go
          </button>
          <button
            onClick={() => {
              setWhere(true);
            }}
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 w-1/3 border-b-0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            where to go
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 w-1/3 rounded-tr-lg border-b-0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Submit to go
          </button>
        </div>
      <div className="block w-full">
        <h1 className="text-3xl text-indigo-400 font-bold text-center m-3">
          {(!where && "When to go") || (where && "Where to go")}
        </h1>
      </div>

      {(!where && (
        <div className="flex justify-center p-2">
          {displayDates && (
            <div className="date-range-container flex">
              <div className="start-date flex border rounded-xl mx-3">
                <p className="m-1 p-1 ">From:</p>
                <span className="m-1 p-1 border-grey-500 font-semibold text-green-600">
                  {startDate ? startDate : "dd/mm/yyyy"}
                </span>
                <p className="m-1 p-1 ">To:</p>
                <span className="m-1 p-1 border-grey-500 font-semibold text-green-600">
                  {endDate ? endDate : "dd/mm/yyyy"}
                </span>
              </div>
            </div>
          )}
          <button
            onClick={openCalendar}
            type="button"
            className="text-gray-900 bg-blue-800 text-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-1.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Choose Dates
          </button>

          {calendar && (
            <DateRangePicker
              closeModal={closeCalendar}
              onSelectRange={handleDateRangeSelect}
            />
          )}
        </div>
      )) ||
        (where && <GroupedSelect />)}
    </div>
  );
};

export default TourSelector;
