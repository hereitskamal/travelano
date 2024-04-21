import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/outline'; // Assuming you have calendar icon

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true);

  const handleDateClick = (date) => {
    if (isSelectingStartDate) {
      setStartDate(date);
      setIsSelectingStartDate(false);
    } else {
      setEndDate(date);
      setIsSelectingStartDate(true);
      console.log('Selected range:', startDate, 'to', date);
    }
  };

  // Dummy data for calendar, replace with your logic to get actual calendar data
  const calendarData = [
    { date: '2024-04-01', isActive: false },
    { date: '2024-04-02', isActive: false },
    { date: '2024-04-03', isActive: false },
    // Add more dates...
  ];

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-200 opacity-25 rounded-lg"></div>
        <ul className="grid grid-cols-7 gap-1 p-1">
          {calendarData.map(({ date, isActive }) => (
            <li
              key={date}
              onClick={() => handleDateClick(date)}
              className={`cursor-pointer p-2 text-center rounded-full ${
                isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {date}
            </li>
          ))}
        </ul>
      </div>
      <CalendarIcon className="w-6 h-6 text-gray-600" />
    </div>
  );
};

export default DateRangeSelector;
