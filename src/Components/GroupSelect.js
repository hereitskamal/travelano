import React, { useState } from "react";
import Select from "react-select";
import destinations from "./Array";
const GroupedSelect = () => {
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const groupedOptions = destinations.map(({ state, cities }) => ({
    label: state,
    options: cities.map((city) => ({ value: city, label: city })),
  }));

  const handleChange = (selectedOptions) => {
    setSelectedDestinations(selectedOptions);
  };

  return (
    <>
      <Select
        isMulti
        placeholder='Choose City'
        options={groupedOptions}
        onChange={handleChange}
        value={selectedDestinations}
        styles={{
          control: (provided) => ({
            ...provided,
            minWidth: 180,
          }),
        }}
      />
    </>
  );
};

export default GroupedSelect;
