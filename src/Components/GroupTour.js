import gokarna from './Images/Gokarna.jpg'
import wayanad from './Images/wayanad.jpg'
import coorg from './Images/coorg.jpg'
import ooty from './Images/ooty.jpg'

const groupTour = [
    {
      id: 1,
      eventName: "Discover Gokarna",
      eventDate: "2025-05-15",
      imageLink: gokarna,
      maxParticipants: 20,
      description: "Embark on a journey to discover the hidden gems of Gokarna, a coastal paradise known for its pristine beaches and ancient temples.",
      associatedPackage: "Coastal Escape Package",
      itinerary: [
        {
          day: "Day 1",
          activity: "Visit Om Beach",
          destination: "Om Beach",
          duration: "Half Day",
          description: "Relax on the scenic Om Beach and enjoy water sports activities."
        },
        {
          day: "Day 2",
          activity: "Explore Mahabaleshwara Temple",
          destination: "Mahabaleshwara Temple",
          duration: "Half Day",
          description: "Visit the ancient Mahabaleshwara Temple and witness its architectural beauty."
        }
      ],
      locationDetails: [
        {
          location: "Meeting Point",
          imageLink: "./Images/meeting_point_gokarna.jpg"
        },
        {
          location: "Accommodation",
          imageLink: "./Images/accommodation_gokarna.jpg"
        }
      ],
      rating: 5,
      bookingEndDate: "2025-04-30",
      eventEndDate: "2025-05-18",
      pickupTime: "08:00",
      dropTime: "18:00",
      price:4999,
      pickupLocation: "Hotel Lobby",
      dropLocation: "Hotel Lobby",
      mealType: "Buffet",
      mealDescription: "Enjoy delicious coastal cuisine featuring fresh seafood.",
      notes: "Don't forget to bring sunscreen and beachwear."
    },
    {
      id: 2,
      eventName: "Discover Ooty",
      eventDate: "2025-07-10",
      imageLink: ooty,
      maxParticipants: 15,
      description: "Experience the charm of Ooty, the 'Queen of Hill Stations.' Explore lush tea gardens, trek through scenic trails, and visit historic landmarks.",
      associatedPackage: "Hill Station Retreat Package",
      itinerary: [
        {
          day: "Day 1",
          activity: "Visit Botanical Gardens",
          destination: "Botanical Gardens",
          duration: "Half Day",
          description: "Stroll through the beautiful Botanical Gardens and admire exotic flora."
        },
        {
          day: "Day 2",
          activity: "Trek to Doddabetta Peak",
          destination: "Doddabetta Peak",
          duration: "Full Day",
          description: "Embark on a scenic trek to Doddabetta Peak, the highest point in the Nilgiri Mountains."
        }
      ],
      locationDetails: [
        {
          location: "Meeting Point",
          imageLink: "./Images/meeting_point_ooty.jpg"
        },
        {
          location: "Accommodation",
          imageLink: "./Images/accommodation_ooty.jpg"
        }
      ],
      rating: 4,
      bookingEndDate: "2025-06-25",
      eventEndDate: "2025-07-15",
      price:7999,
      pickupTime: "09:00",
      dropTime: "17:00",
      pickupLocation: "City Center",
      dropLocation: "City Center",
      mealType: "Set Menu",
      mealDescription: "Indulge in delicious South Indian cuisine.",
      notes: "Wear comfortable shoes for trekking."
    },
    {
      id: 3,
      eventName: "Adventure in Coorg",
      eventDate: "2025-09-20",
      imageLink: coorg,
      maxParticipants: 25,
      description: "Embark on an adventurous journey to Coorg, known as the 'Scotland of India.' Explore coffee plantations, go trekking, and indulge in thrilling outdoor activities.",
      associatedPackage: "Adventure Escape Package",
      itinerary: [
        {
          day: "Day 1",
          activity: "Visit Dubare Elephant Camp",
          destination: "Dubare Elephant Camp",
          duration: "Half Day",
          description: "Interact with elephants and enjoy activities like elephant bathing and feeding."
        },
        {
          day: "Day 2",
          activity: "Trek to Abbey Falls",
          destination: "Abbey Falls",
          duration: "Half Day",
          description: "Hike through lush forests to Abbey Falls and enjoy the majestic waterfall."
        }
      ],
      locationDetails: [
        {
          location: "Meeting Point",
          imageLink: "./Images/meeting_point_coorg.jpg"
        },
        {
          location: "Accommodation",
          imageLink: "./Images/accommodation_coorg.jpg"
        }
      ],
      rating: 5,
      price:6999,
      bookingEndDate: "2025-09-05",
      eventEndDate: "2025-09-25",
      pickupTime: "07:30",
      dropTime: "19:00",
      pickupLocation: "Hotel Lobby",
      dropLocation: "Hotel Lobby",
      mealType: "Buffet",
      mealDescription: "Savor traditional Coorgi cuisine.",
      notes: "Bring mosquito repellent for outdoor activities."
    },
    {
      id: 4,
      eventName: "Retreat in Wayanad",
      eventDate: "2025-11-10",
      imageLink: wayanad,
      maxParticipants: 18,
      description: "Escape to the tranquility of Wayanad, a serene destination nestled amidst the Western Ghats. Explore lush greenery, visit wildlife sanctuaries, and unwind in nature's embrace.",
      associatedPackage: "Nature Retreat Package",
      itinerary: [
        {
          day: "Day 1",
          activity: "Visit Edakkal Caves",
          destination: "Edakkal Caves",
          duration: "Half Day",
          description: "Explore the ancient Edakkal Caves and discover prehistoric rock art."
        },
        {
          day: "Day 2",
          activity: "Explore Wayanad Wildlife Sanctuary",
          destination: "Wayanad Wildlife Sanctuary",
          duration: "Full Day",
          description: "Embark on a safari adventure in the Wayanad Wildlife Sanctuary and spot diverse wildlife."
        }
      ],
      locationDetails: [
        {
          location: "Meeting Point",
          imageLink: "./Images/meeting_point_wayanad.jpg"
        },
        {
          location: "Accommodation",
          imageLink: "./Images/accommodation_wayanad.jpg"
        }
      ],
      
      rating: 4.5,
      price:7999,
      bookingEndDate: "2025-10-25",
      eventEndDate: "2025-11-15",
      pickupTime: "08:00",
      dropTime: "18:00",
      pickupLocation: "Hotel Lobby",
      dropLocation: "Hotel Lobby",
      mealType: "Set Menu",
      mealDescription: "Taste authentic Kerala cuisine.",
      notes: "Carry binoculars for birdwatching in the sanctuary."
    }
  ];
  
  export default groupTour;
  