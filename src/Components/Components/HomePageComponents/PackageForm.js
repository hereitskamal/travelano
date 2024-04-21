import React, { useState } from 'react';
import { MdCardTravel } from 'react-icons/md';

function PackageForm() {
    const [packageData, setPackageData] = useState({
        packageName: '',
        description: '',
        duration: '',
        startLocation: '',
        price: '',
        destinations: [],
        activities: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPackageData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDestinationAdd = () => {
        setPackageData((prevData) => ({
            ...prevData,
            destinations: [...prevData.destinations, { name: '', country: '', region: '', description: '' }],
        }));
    };

    const handleActivityAdd = () => {
        setPackageData((prevData) => ({
            ...prevData,
            activities: [...prevData.activities, { name: '', description: '', duration: '' }],
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(packageData);
        // Typically you would send this data to a server here
    };

    return (
        <>
            <div className="p-2 flex justify-center w-full">
                <form className="max-w-screen-sm w-full" onSubmit={handleFormSubmit}>
                    <h2 className="m-3 flex justify-center items-center text-2xl font-semibold text-pink-500 border p-3 text-center rounded-md border-pink-400 hover:text-white hover:bg-pink-400">
                        <MdCardTravel size={'30px'} /> &nbsp; Add a Tour Package
                    </h2>
                    <div className="mb-3">
                        <label className="block mb-1">Package Name:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="packageName"
                            value={packageData.packageName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Description:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="description"
                            value={packageData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Duration:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="duration"
                            value={packageData.duration}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Start Location:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="text"
                            name="startLocation"
                            value={packageData.startLocation}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-1">Price:</label>
                        <input
                            className="w-full border rounded-md px-3 py-2"
                            type="number"
                            name="price"
                            value={packageData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Destinations</h3>
                        {packageData.destinations.map((dest, index) => (
                            <div key={index}>
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Name"
                                    value={dest.name}
                                    onChange={(e) => {
                                        const newDestinations = [...packageData.destinations];
                                        newDestinations[index].name = e.target.value;
                                        setPackageData({ ...packageData, destinations: newDestinations });
                                    }}
                                />
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Country"
                                    value={dest.country}
                                    onChange={(e) => {
                                        const newDestinations = [...packageData.destinations];
                                        newDestinations[index].country = e.target.value;
                                        setPackageData({ ...packageData, destinations: newDestinations });
                                    }}
                                />
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Region"
                                    value={dest.region}
                                    onChange={(e) => {
                                        const newDestinations = [...packageData.destinations];
                                        newDestinations[index].region = e.target.value;
                                        setPackageData({ ...packageData, destinations: newDestinations });
                                    }}
                                />
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Description"
                                    value={dest.description}
                                    onChange={(e) => {
                                        const newDestinations = [...packageData.destinations];
                                        newDestinations[index].description = e.target.value;
                                        setPackageData({ ...packageData, destinations: newDestinations });
                                    }}
                                />
                            </div>
                        ))}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-3"
                            type="button"
                            onClick={handleDestinationAdd}
                        >
                            Add Destination
                        </button>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Activities</h3>
                        {packageData.activities.map((act, index) => (
                            <div key={index}>
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Name"
                                    value={act.name}
                                    onChange={(e) => {
                                        const newActivities = [...packageData.activities];
                                        newActivities[index].name = e.target.value;
                                        setPackageData({ ...packageData, activities: newActivities });
                                    }}
                                />
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Description"
                                    value={act.description}
                                    onChange={(e) => {
                                        const newActivities = [...packageData.activities];
                                        newActivities[index].description = e.target.value;
                                        setPackageData({ ...packageData, activities: newActivities });
                                    }}
                                />
                                <input
                                    className="w-full border rounded-md px-3 py-2 mb-1"
                                    type="text"
                                    placeholder="Duration"
                                    value={act.duration}
                                    onChange={(e) => {
                                        const newActivities = [...packageData.activities];
                                        newActivities[index].duration = e.target.value;
                                        setPackageData({ ...packageData, activities: newActivities });
                                    }}
                                />
                            </div>
                        ))}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-3"
                            type="button"
                            onClick={handleActivityAdd}
                        >
                            Add Activity
                        </button>
                    </div>
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-md"
                        type="submit"
                    >
                        Submit Package
                    </button>
                </form>
            </div>
        </>
    );
}

export default PackageForm;
