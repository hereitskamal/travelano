import React from "react";
import packagesData from "./PackagesData";
import { FaMoon, FaSun } from "react-icons/fa";
const Package = () => {
  const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
  console.log(packagesData, "data");
  const renderData = packagesData.find((ele) => ele._Id === selectedPackage);

  return (
    <section class="py-10 relative">
      <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div class="flex items-center justify-center flex-col gap-5 mb-8">
          <h2 class="font-manrope font-bold text-4xl text-gray-900 text-center">
            {renderData.cityName}
          </h2>
          <p class="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
            {renderData.description}
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div class=" relative sm:col-span-2 bg-cover bg-center rounded-lg flex justify-end flex-col  ">
            <img src={renderData.images[0]} className="w-full rounded-lg" alt="" />
          </div>
          <div class="block">
            <img
              src={renderData.images[1]}
              alt="Building structure image"
              class="h-full rounded-lg"
            />
          </div>
          <div class="block">
            <img
              src={renderData.images[2]}
              alt="Building structure image"
              class="h-full rounded-lg"
            />
          </div>
        </div>

        <section class="py-10 ">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
              <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
                Tour Details{" "}
              </h2>
              <p class="text-gray-500 text-center leading-6 mb-9">
                Best Handpicked Tour Iternery
              </p>
            </div>

            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
              <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-10 transition-all duration-500 hover:bg-gray-100">
                <h3 class="font-manrope text-2xl font-bold mb-3">Iternery</h3>
                <ul class="mb-10 space-y-6 text-left text-lg text-gray-500">
                  {renderData.itinerary.map((val) => (
                    <li class="flex items-center space-x-4">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-indigo-600"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-10 transition-all duration-500 hover:bg-gray-100">
                <h3 class="font-manrope text-2xl font-bold mb-3">hotels</h3>
                <ul class="mb-10 space-y-6 text-left text-lg text-gray-500">
                  {renderData.hotels.map((val) => (
                    <li class="flex items-center space-x-4">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-indigo-600"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{val.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-10 transition-all duration-500 hover:bg-gray-100">
                <h3 class="font-manrope text-2xl font-bold mb-3">Inclusion & Exclusions</h3>
                <ul class="mb-6 space-y-6 text-left text-lg text-gray-500">
                  {renderData.inclusion.map((val) => (
                    <li class="flex items-center space-x-4">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-indigo-600"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
                <ul class="mb-10 space-y-6 text-left text-lg text-gray-500">
                  {renderData.exclusion.map((val) => (
                    <li class="flex items-center space-x-4">
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-red-600"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="13"
                          stroke="currentColor"
                          stroke-width="1.6"
                          fill="none"
                        />

                        <path
                          d="M10 10.7875L20 20.7875M20 10.7875L10 20.7875"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class=" py-2">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="shadow-lg lg:py-5 lg:px-12 p-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
              <div class="block text-center mb-5 lg:text-left lg:mb-0">
                <h2 class="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                  <div className="m-2 p-2 md:flex justify-center rounded ms:flex-col">
                    <p className="flex items-center font-bold">
                      Days: {renderData.days}&nbsp;
                      <FaSun color="yellow" />{" "}
                    </p>{" "}
                    &nbsp;&nbsp;
                    <p className="flex items-center font-bold">
                      Nights: {renderData.nights}&nbsp; <FaMoon color="white" />
                    </p>
                  </div>
                </h2>
              </div>
              <a
                href="#"
                class="flex font-bold items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 py-4 px-8 transition-all duration-500"
              >
                Just @ {renderData.price}
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Package;
