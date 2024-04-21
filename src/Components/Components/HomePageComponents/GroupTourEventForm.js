  import React, { useState } from "react";
  import { MdGroup } from "react-icons/md";

  function GroupTourEventForm() {
    const [eventData, setEventData] = useState({
      eventName: "",
      eventDate: "",
      imageLink: "",
      maxParticipants: "",
      description: "",
      associatedPackage: "",
      itinerary: [],
      locationDetails: [],
      bookingEndDate: "",
      eventEndDate: "",
      pickupTime: "",
      dropTime: "",
      pickupLocation: "",
      dropLocation: "",
      mealType: "",
      mealDescription: "",
      notes: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEventData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleItineraryChange = (index, field, value) => {
      const newItinerary = [...eventData.itinerary];
      newItinerary[index][field] = value;
      setEventData((prevData) => ({
        ...prevData,
        itinerary: newItinerary,
      }));
    };

    const handleLocationChange = (index, field, value) => {
      const newLocationDetails = [...eventData.locationDetails];
      newLocationDetails[index][field] = value;
      setEventData((prevData) => ({
        ...prevData,
        locationDetails: newLocationDetails,
      }));
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(eventData);
      // Typically you would send this data to a server here
    };

    const handleItineraryAdd = () => {
      setEventData((prevData) => ({
        ...prevData,
        itinerary: [
          ...prevData.itinerary,
          {
            day: "",
            activity: "",
            destination: "",
            duration: "",
            description: "",
          },
        ],
      }));
    };

    const handleLocationAdd = () => {
      setEventData((prevData) => ({
        ...prevData,
        locationDetails: [
          ...prevData.locationDetails,
          { location: "", imageLink: "" },
        ],
      }));
    };

    return (
      <>
        <div className="p-2 flex justify-center w-100 overflow-scroll">
          <form className="max-w-screen-sm w-full" onSubmit={handleFormSubmit}>
            <h2 className="m-3 flex justify-center items-center text-2xl font-semibold text-pink-500 border p-3 text-center rounded-md border-pink-400 hover:text-white hover:bg-pink-400">
              <MdGroup size={"30px"} /> &nbsp; Add a Group Tour Event
            </h2>
            {/* Input fields */}
            <div className="mb-3">
              <label className="block mb-1">Image Link:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="text"
                name="imageLink"
                value={eventData.imageLink}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Max Participants:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="number"
                name="maxParticipants"
                value={eventData.maxParticipants}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Description:</label>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Associated Tour Package:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="text"
                name="associatedPackage"
                value={eventData.associatedPackage}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Booking End Date:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="date"
                name="bookingEndDate"
                value={eventData.bookingEndDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Event End Date:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="date"
                name="eventEndDate"
                value={eventData.eventEndDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Pickup Time:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="time"
                name="pickupTime"
                value={eventData.pickupTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Drop Time:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="time"
                name="dropTime"
                value={eventData.dropTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Pickup Location:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="text"
                name="pickupLocation"
                value={eventData.pickupLocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Drop Location:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="text"
                name="dropLocation"
                value={eventData.dropLocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Meal Type:</label>
              <input
                className="w-full border rounded-md px-3 py-2"
                type="text"
                name="mealType"
                value={eventData.mealType}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Meal Description:</label>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                name="mealDescription"
                value={eventData.mealDescription}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Notes:</label>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                name="notes"
                value={eventData.notes}
                onChange={handleInputChange}
              />
            </div>

            {eventData.itinerary.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">Itinerary</h3>
                {eventData.itinerary.map((item, index) => (
                  <div key={index}>
                    <div className="mb-3">
                      <label className="block mb-1">Day:</label>
                      <input
                        className="w-full border rounded-md px-3 py-2"
                        type="text"
                        value={item.day}
                        onChange={(e) =>
                          handleItineraryChange(index, "day", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Activity:</label>
                      <input
                        className="w-full border rounded-md px-3 py-2"
                        type="text"
                        value={item.activity}
                        onChange={(e) =>
                          handleItineraryChange(index, "activity", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Destination:</label>
                      <input
                        className="w-full border rounded-md px-3 py-2"
                        type="text"
                        value={item.destination}
                        onChange={(e) =>
                          handleItineraryChange(
                            index,
                            "destination",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Duration:</label>
                      <input
                        className="w-full border rounded-md px-3 py-2"
                        type="text"
                        value={item.duration}
                        onChange={(e) =>
                          handleItineraryChange(index, "duration", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Description:</label>
                      <textarea
                        className="w-full border rounded-md px-3 py-2"
                        value={item.description}
                        onChange={(e) =>
                          handleItineraryChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-3"
              type="button"
              onClick={handleItineraryAdd}
            >
              Add Itinerary
            </button>
            <br />
            {eventData.locationDetails.map((location, index) => (
              <div className="mb-3" key={index}>
                <label className="block mb-1">Location Detail:</label>
                <input
                  className="w-full border rounded-md px-3 py-2"
                  type="text"
                  name="location"
                  value={location.location}
                  onChange={(e) =>
                    handleLocationChange(index, "location", e.target.value)
                  }
                />
                <label className="block mb-1 mt-3">Location Image Link:</label>
                <input
                  className="w-full border rounded-md px-3 py-2"
                  type="text"
                  name="imageLink"
                  value={location.imageLink}
                  onChange={(e) =>
                    handleLocationChange(index, "imageLink", e.target.value)
                  }
                />
              </div>
            ))}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-3"
              type="button"
              onClick={handleLocationAdd}
            >
              Add Location Detail
            </button>
            <br />
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-md"
              type="submit"
            >
              Submit Event
            </button>
          </form>
        </div>
      </>
    );
  }

  export default GroupTourEventForm;
