import React from "react";
import groupTour from "./GroupTour";

const GroupEvent = () => {
  return (
    <div className="flex flex-wrap justify-center w-full p-1">
      {groupTour.map((tour) => (
        <div
          key={tour.id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-2"
        >
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-80"
                src={tour.imageLink}
                alt="Tour Image"
              />
            </div>
            <div>
              <div className="p-8">
                <div className="font-bold text-xl mb-2">{tour.eventName}</div>
                <p className="text-gray-700 text-base mb-4">
                  Date: {tour.eventDate}
                </p>
                <p className="text-gray-700 text-base">{tour.description}</p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-6 h-6 fill-current text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1l3 8h8l-6 4 3 8-8-5-8 5 3-8-6-4h8z"></path>
                  </svg>
                  <p className="text-green-500 font-semibold">
                    Rated {tour.rating}/5 Stars
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-gray-800 font-semibold">
                    Rs/-{tour.price} per person
                  </p>
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupEvent;
