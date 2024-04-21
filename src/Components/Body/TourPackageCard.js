import React from "react";
import { useNavigate } from "react-router-dom";

const TourPackageCard = ({ imageUrl, cityName, description, days, nights, _Id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`rounded overflow-hidden shadow-lg  ${
        window.innerWidth > 560 ? "min-w-72 " : "min-w-52 "
      }`}
    >
      <img className="w-full" src={imageUrl} alt={cityName} />
      <div className="p-3">
        <div className="font-bold text-xl mb-2">{cityName}</div>
        <p className="text-sm">{description.slice(0, 90)}...</p>
        <div className="flex mt-2 justify-between items-center ">
          <p className=" text-gray-900 bg-white border border-gray-300 text-xs focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg p-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            {days} Days / {nights} Nights
          </p>
          <button
            onClick={() => {
                navigate('/package');
                localStorage.setItem('selectedPackage', JSON.stringify(_Id));
            }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
