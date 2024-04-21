
import kashmir from "../Images/tourcard/kashmir.jpg";
import jaipur from "../Images/tourcard/jaipur.jpg";
import gujarat from "../Images/tourcard/gujrat.jpg";
import kerala from "../Images/tourcard/Kerala.jpg";
import ladakh from "../Images/tourcard/ladakh.jpg";
import maldives from "../Images/tourcard/maldives.jpg";
import sikkim from "../Images/tourcard/sikkim.jpg";
import agra from "../Images/tourcard/tajmahal.jpg";


import kashmir1 from "../Images/kashmir/kashmir_group.jpeg";
import kashmir2 from "../Images/kashmir/Kashmir_solo_boat.jpg";
import kashmir3 from "../Images/kashmir/Kashmir_solo_portrait.jpg";

import gujarat1 from "../Images/Gujrat/run_of_kutch.jpg"
import gujarat2 from "../Images/Gujrat/gujrat.jpg"
import gujarat3 from "../Images/Gujrat/national_park.jpg"


import jaipur0 from '../Images/jaipur/hawamahal.jpg'
import jaipur1 from '../Images/jaipur/jal-mahal2.jpg'
import jaipur2 from '../Images/jaipur/jaipur.jpg'

import kerala1 from '../Images/kerala/kerala.jpg'
import kerala2 from '../Images/kerala/kerala_road.jpeg'
import kerala3 from '../Images/kerala/Kerala2.jpg'

import ladakh1 from '../Images/ladakh/ladakh1.jpg'
import ladakh2 from '../Images/ladakh/ladakh2.jpg'
import ladakh3 from '../Images/ladakh/ladakh3.jpg'

import maldives1 from '../Images/maldives/maldives-resorts-huts-over-water-22-1920x1080.jpg'
import maldives2 from '../Images/maldives/maldives2.jpg'
import maldives3 from '../Images/maldives/maldives3.jpg'

import sikkim1 from '../Images/sikkim/sikkim1.jpg'
import sikkim2 from '../Images/sikkim/sikkim2.jpg'
import sikkim3 from '../Images/sikkim/sikkim3.jpg'


import agra1 from '../Images/agra/agra1.jpg'
import agra2 from '../Images/agra/agra2.jpg'
import agra3 from '../Images/agra/agra3.jpg'
const packagesData = [
    {
        _Id:'1',
        imageUrl: kashmir,
        cityName: "Kashmir",
        description: "Kashmir is a state in northern India that is known for its natural beauty, culture, and adventure activities.",
        days: 5,
        nights: 4,
        attractions: ["Dal Lake", "Shalimar Bagh", "Gulmarg", "Pahalgam"],
        itinerary: ["Day 1: Arrival in Srinagar", "Day 2: Sightseeing in Gulmarg", "Day 3: Exploring Pahalgam", "Day 4: Visit to Dal Lake", "Day 5: Departure"],
         images: [kashmir1, kashmir2, kashmir3], // URLs of additional images
        price: "$1000",
        hotels: [
            {
                name: "Hotel ABC",
                //imageUrl: hotelABC // image,
            },
            {
                name: "Hotel XYZ",
                //imageUrl: hotelXYZ // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'2',
        imageUrl: jaipur,
        cityName: "Jaipur",
        description: "Jaipur is the capital city of the Indian state of Rajasthan, known for its vibrant culture, majestic forts, and palaces.",
        days: 7,
        nights: 6,
        attractions: ["Amber Fort", "City Palace", "Jantar Mantar", "Hawa Mahal"],
        itinerary: ["Day 1: Arrival in Jaipur", "Day 2: Visit to Amber Fort", "Day 3: Explore City Palace", "Day 4: Sightseeing in Jantar Mantar", "Day 5: Visit to Hawa Mahal", "Day 6: Shopping and leisure", "Day 7: Departure"],
        images: [jaipur0, jaipur1, jaipur2], // URLs of additional images
        price: "$1200",
        hotels: [
            {
                name: "Hotel Jaipur Palace",
                //imageUrl: hotelJaipurPalace // image,
            },
            {
                name: "Hotel Rajvilas",
                //imageUrl: hotelRajvilas // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'3',
        imageUrl: gujarat,
        cityName: "Gujarat",
        description: "Gujarat is a state on the western coast of India, known for its rich history, vibrant culture, and architectural marvels.",
        days: 6,
        nights: 5,
        attractions: ["Gir National Park", "Sabarmati Ashram", "Somnath Temple", "Rann of Kutch"],
        itinerary: ["Day 1: Arrival in Ahmedabad", "Day 2: Visit to Sabarmati Ashram", "Day 3: Explore Gir National Park", "Day 4: Sightseeing in Somnath", "Day 5: Visit to Rann of Kutch", "Day 6: Departure"],
        images: [gujarat1,gujarat3, gujarat2], // URLs of additional images
        price: "$900",
        hotels: [
            {
                name: "Hotel Grand Ahmedabad",
                //imageUrl: hotelGrandAhmedabad // image,
            },
            {
                name: "Hotel Somnath Residency",
                //imageUrl: hotelSomnathResidency // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'4',
        imageUrl: kerala,
        cityName: "Kerala",
        description: "Kerala, also known as 'God's Own Country', is a state in South India known for its lush greenery, backwaters, and cultural heritage.",
        days: 7,
        nights: 6,
        attractions: ["Backwaters of Alleppey", "Periyar Wildlife Sanctuary", "Munnar Tea Gardens", "Kerala Kathakali Centre"],
        itinerary: ["Day 1: Arrival in Kochi", "Day 2: Explore Backwaters of Alleppey", "Day 3: Visit to Periyar Wildlife Sanctuary", "Day 4: Sightseeing in Munnar", "Day 5: Visit to Kerala Kathakali Centre", "Day 6: Leisure time", "Day 7: Departure"],
        images: [kerala1, kerala2, kerala3], // URLs of additional images
        price: "$1100",
        hotels: [
            {
                name: "Lake Palace Resort",
                //imageUrl: hotelLakePalaceResort // image,
            },
            {
                name: "Munnar Hill View",
                //imageUrl: hotelMunnarHillView // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'5',
        imageUrl: ladakh,
        cityName: "Ladakh",
        description: "Ladakh, often referred to as 'Land of High Passes', is a region in the Indian state of Jammu and Kashmir, known for its stark landscapes and Buddhist culture.",
        days: 8,
        nights: 7,
        attractions: ["Pangong Lake", "Nubra Valley", "Hemis Monastery", "Leh Palace"],
        itinerary: ["Day 1: Arrival in Leh", "Day 2: Visit to Pangong Lake", "Day 3: Exploring Nubra Valley", "Day 4: Visit to Hemis Monastery", "Day 5: Sightseeing in Leh", "Day 6: Adventure activities", "Day 7: Leisure time", "Day 8: Departure"],
         images: [ladakh1, ladakh2, ladakh3], // URLs of additional images
        price: "$1500",
        hotels: [
            {
                name: "Hotel Leh View",
                //imageUrl: hotelLehView // image,
            },
            {
                name: "Nubra Dream Camp",
                //imageUrl: hotelNubraDreamCamp // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'6',
        imageUrl: maldives,
        cityName: "Maldives",
        description: "The Maldives is a tropical paradise in the Indian Ocean known for its crystal-clear waters, white sandy beaches, and luxurious overwater bungalows.",
        days: 5,
        nights: 4,
        attractions: ["Male Fish Market", "Artificial Beach", "Banana Reef", "Hulhumalé Island"],
        itinerary: ["Day 1: Arrival in Malé", "Day 2: Explore Male Fish Market", "Day 3: Visit to Artificial Beach", "Day 4: Snorkeling at Banana Reef", "Day 5: Departure"],
        images: [maldives1, maldives2, maldives3], // URLs of additional images
        price: "$2000",
        hotels: [
            {
                name: "Sun Island Resort & Spa",
                //imageUrl: hotelSunIslandResort // image,
            },
            {
                name: "Vilamendhoo Island Resort",
                //imageUrl: hotelVilamendhooIslandResort // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'7',
        imageUrl: sikkim,
        cityName: "Sikkim",
        description: "Sikkim is a state in the northeastern region of India known for its stunning Himalayan landscapes, ancient monasteries, and vibrant culture.",
        days: 6,
        nights: 5,
        attractions: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "Yumthang Valley"],
        itinerary: ["Day 1: Arrival in Gangtok", "Day 2: Visit to Tsomgo Lake", "Day 3: Exploring Nathula Pass", "Day 4: Visit to Rumtek Monastery", "Day 5: Sightseeing in Yumthang Valley", "Day 6: Departure"],
        images: [sikkim1, sikkim2, sikkim3], // URLs of additional images
        price: "$950",
        hotels: [
            {
                name: "Mayfair Spa Resort & Casino",
                //imageUrl: hotelMayfairSpaResort // image,
            },
            {
                name: "Cherry Village Resort",
                //imageUrl: hotelCherryVillageResort // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
    {
        _Id:'8',
        imageUrl: agra,
        cityName: "Agra",
        description: "Agra is a city in the Indian state of Uttar Pradesh, famous for being the home to the iconic Taj Mahal, a UNESCO World Heritage Site.",
        days: 3,
        nights: 2,
        attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itimad-ud-Daulah's Tomb"],
        itinerary: ["Day 1: Arrival in Agra", "Day 2: Visit to Taj Mahal and Agra Fort", "Day 3: Sightseeing in Fatehpur Sikri and Itimad-ud-Daulah's Tomb", "Day 4: Departure"],
             images: [agra1, agra2, agra3], // URLs of additional images
        price: "$600",
        hotels: [
            {
                name: "The Oberoi Amarvilas",
                //imageUrl: hotelOberoiAmarvilas // image,
            },
            {
                name: "Hotel Taj Resorts",
                //imageUrl: hotelTajResorts // image,
            },
        ],
        inclusion: ["Accommodation", "Meals", "Transportation"],
        exclusion: ["Airfare", "Personal expenses", "Guide fees"],
    },
];


export default packagesData;
