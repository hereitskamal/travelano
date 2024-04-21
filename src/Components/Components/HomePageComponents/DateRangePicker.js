import React, { useState } from "react";
import { format, addMonths, addDays, subMonths, startOfMonth, endOfMonth, isBefore, isSameMonth } from "date-fns";

const CustomCalendar = ({ onSelectRange, closeModal }) => { 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null); 
  const [button, setButton] = useState('Close')
  const presentMonth = new Date();
  const nextMonth = addMonths(presentMonth, 1);

  const handleDateHover = (date) => {
    setHoveredDate(date);
  };

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setSelectedStartDate(date); // Set selected start date
      setButton('Close')
    } else if (startDate && !endDate) {
      if (date > startDate) {
        setEndDate(date);
        // Set the date range on end date click
        onSelectRange(format(startDate, "dd/MM/yyyy"), format(date, "dd/MM/yyyy"));
        // closeModal(); // Close the calendar modal
        setButton('Select')
      } else {
        setEndDate(startDate);
        setStartDate(date);
        setSelectedStartDate(date); // Set selected start date
      }
    }
  };

  const isDateDisabled = (date) => {
    return isBefore(date, startOfMonth(presentMonth));
  };

  const isDateSelected = (date) => {
    return (
      (startDate && endDate && date >= startDate && date <= endDate) ||
      (startDate && !endDate && date === startDate)
    );
  };

  const isInRange = (date) => {
    return (
      startDate &&
      endDate &&
      date > startDate &&
      date < endDate &&
      date > hoveredDate &&
      date < endDate
    );
  };

  const isStartDate = (date) => {
    return startDate && date === startDate;
  };

  const isEndDate = (date) => {
    return endDate && date === endDate;
  };

  const renderCalendar = (month) => {
    const daysInMonth = [];
    const start = startOfMonth(month);
    const end = endOfMonth(month);

    for (let i = start; i <= end; i = addDays(i, 1)) {
      daysInMonth.push(i);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((day, index) => {
          return (
            <div
              key={index}
              className={`text-center p-4 py-2 rounded-lg cursor-pointer ${
                isDateDisabled(day) ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
              } ${
                isDateSelected(day) ? "bg-blue-400 text-white" : ""
              } ${isInRange(day) ? "bg-blue-200" : ""} ${
                isStartDate(day) ? "rounded-l-lg bg-green-400 text-white" : ""
              } ${isEndDate(day) ? "rounded-r-lg" : ""} ${
                selectedStartDate && day.getTime() === selectedStartDate.getTime() ? "bg-green-400 text-white" : "" // Apply background color for selected start date
              }`}
              onMouseOver={() => handleDateHover(day)}
              onClick={() => !isDateDisabled(day) && handleDateClick(day)}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div 
    style={{zIndex:'5000'}} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="flex justify-between mb-4">
          <h2 className="text-2l p-1 font-semibold text-gray-800">{format(presentMonth, "MMMM yyyy")}</h2>
          <button onClick={closeModal} className={`p-1 px-3 rounded text-white ${button==='Select'? 'bg-green-500 hover:text-green-100': 'bg-red-500 hover:text-red-100'} focus:outline-none`}>
            {button}
          </button>
        </div>
        {renderCalendar(presentMonth)}
        <h2 className="mt-4 mb-2 text-2l font-semibold text-gray-800">{format(nextMonth, "MMMM yyyy")}</h2>
        {renderCalendar(nextMonth)}
      </div>
    </div>
  );
};

export default CustomCalendar;
