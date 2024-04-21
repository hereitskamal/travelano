import React,{useState, useEffect} from "react";
import Navbar from "../Navbar";
import trevelano1 from "../Images/travelano_1.png";
import trevelano2 from "../Images/travelano_2.png";
import logo from '../Images/icon.png'
const AboutUs = () => {
    const [destinations, setDestinations] = useState(0);
    const [satisfiedTravelers, setSatisfiedTravelers] = useState(0);
    const [memorableExperiences, setMemorableExperiences] = useState(0);

    useEffect(() => {
        const destinationInterval = setInterval(() => {
            if (destinations < 270) {
                setDestinations(prevDestinations => prevDestinations + Math.floor((Math.random()*10)-3));
            } else {
                clearInterval(destinationInterval);
            }
        }, 100);

        const satisfiedInterval = setInterval(() => {
            if (satisfiedTravelers < 175) {
                setSatisfiedTravelers(prevSatisfied => prevSatisfied + Math.floor((Math.random()*10)-3));
            } else {
                clearInterval(satisfiedInterval);
            }
        }, 100);

        const experiencesInterval = setInterval(() => {
            if (memorableExperiences < 625) {
                setMemorableExperiences(prevExperiences => prevExperiences + Math.floor((Math.random()*10)-3));
            } else {
                clearInterval(experiencesInterval);
            }
        }, 100);

        return () => {
            clearInterval(destinationInterval);
            clearInterval(satisfiedInterval);
            clearInterval(experiencesInterval);
        };
    }, [destinations, satisfiedTravelers, memorableExperiences]);

  return (
    <>
      <Navbar />
      <section class="py-14 lg:py-10 relative z-0 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 class="max-w-2xl mx-auto flex justify-center items-center text-center font-manrope font-bold text-4xl text-blue-800 mb-5 md:text-5xl md:leading-normal">
           <label className="w-10"><img className="" src={logo} alt="" /></label>RAVELANO
          </h1>
          <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Discover Unforgettable Adventures with Our{" "}
            <span class="text-indigo-600">Exclusive Tours </span>
          </h1>
          <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Embark on extraordinary journeys and explore the world in a whole
            new way.
          </p>
        </div>
      </section>

      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div class="img-box">
              <img
                src={trevelano1}
                alt="About Us tailwind page"
                class="max-lg:mx-auto  shadow-xl"
              />
            </div>
            <div class="lg:pl-[100px] flex items-center">
              <div class="data w-full">
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p class="font-normal  leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Fueled by a fervor for unforgettable journeys, we've
                  meticulously crafted our tour company to cater to adventurers,
                  explorers, and travel enthusiasts. Our mission is to offer an
                  array of meticulously planned packages and group tour events,
                  empowering you to embark on seamless, exhilarating
                  experiences. We provide a comprehensive toolkit of
                  destinations and activities, enabling you to create
                  unforgettable memories that resonate with your inner explorer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div class="lg:pr-24 flex items-center">
              <div class="data w-full">
                <img
                  src={trevelano2}
                  alt="About Us tailwind page"
                  class="block lg:hidden mb-9 mx-auto"
                />
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are serving from 2024
                </h2>
                <p class="font-normal leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  we've been crafting unforgettable experiences for travelers
                  ever since. Beyond just offering packages and tours, we embody
                  a philosophy that prioritizes accessibility, scalability, and
                  usability. Every destination, every itinerary, and every
                  experience is meticulously crafted to enhance functionality
                  and elevate user satisfaction. We're not just a tour company;
                  we're creators of immersive journeys that leave a lasting
                  impression.
                </p>
              </div>
            </div>
            <div class="img-box ">
              <img
                src={trevelano2}
                alt="About Us tailwind page"
                class="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Experience Our Journey in Numbers
          </h2>
          <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  {destinations}+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Destinations Explored
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Explore over 240 breathtaking destinations with our expertly
                    crafted tours.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  {satisfiedTravelers}+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Satisfied Travelers
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Join over 175 satisfied travelers who have experienced the
                    magic of our tours.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  {memorableExperiences}+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Memorable Experiences
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Create lasting memories with over 625 unforgettable
                    experiences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" py-14 lg:py-14 bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mb-10 rounded-full">
            <h2 class="text-4xl font-manrope font-bold text-gray-900 text-center">
              Hear from Our Delighted Travelers!
            </h2>
          </div>

          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="relative mb-10">
                  <div class="max-w-max mx-auto lg:max-w-4xl">
                    <p class=" text-gray-500 leading-8 mb-8 text-center">
                      I have been on multiple tours with this company, and each
                      time, they exceed my expectations. The attention to detail
                      in planning and execution is impeccable. Their
                      knowledgeable guides and seamless logistics make every
                      journey unforgettable. I highly recommend them to anyone
                      seeking exceptional travel experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="relative mb-10">
                  <div class="max-w-max mx-auto lg:max-w-4xl">
                    <p class=" text-gray-500 leading-8 mb-8 text-center">
                      My family and I recently went on a tour organized by this
                      company, and it was fantastic. From start to finish,
                      everything was well-organized, and we felt safe and
                      comfortable throughout the journey. The itinerary was
                      diverse, catering to different interests, and the guides
                      were knowledgeable and friendly. It was truly a memorable
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="relative mb-10">
                  <div class="max-w-max mx-auto lg:max-w-4xl">
                    <p class=" text-gray-500 leading-8 mb-8 text-center">
                      This tour company exceeded my expectations in every
                      aspect. The itinerary was well-planned, allowing us to
                      experience the best of each destination. The guides were
                      passionate and knowledgeable, providing insightful
                      information throughout the journey. I had an amazing time
                      and would definitely travel with them again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
