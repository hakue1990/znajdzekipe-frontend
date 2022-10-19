import React, { useState, useEffect, useRef } from "react";
let autoComplete;

// dynamically load JavaScript files in our html with callback when finished
export const loadScript = (url, callback) => {
  let script = document.createElement("script"); // create script tag
  script.type = "text/javascript";

  // when script state is ready and loaded or complete we will call callback
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url; // load by url
  document.getElementsByTagName("head")[0].appendChild(script); // append to head
};

// handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete
export function handleScriptLoad(
  updateQuery,
  autoCompleteRef,
  handleLatitude,
  handleLongitude
) {
  // assign autoComplete with Google maps place one time
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: "pl" } }
  );
  autoComplete.setFields([
    "address_components",
    "formatted_address",
    "geometry",
    "name",
  ]); // specify what properties we will get from API
  // add a listener to handle when the place is selected
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, handleLatitude, handleLongitude)
  );
}

async function handlePlaceSelect(updateQuery, handleLatitude, handleLongitude) {
  const addressObject = autoComplete.getPlace(); // get place from google api
  if (!addressObject.geometry || !addressObject.geometry.location) {
    // User entered the name of a Place that was not suggested and
    // pressed the Enter key, or the Place Details request failed.
    window.alert(
      "No details available for input: '" + addressObject.name + "'"
    );
    return;
  }
  const query = addressObject.formatted_address;
  const lat = addressObject.geometry.location.lat();
  const lng = addressObject.geometry.location.lng();
  const name = addressObject.name;
  updateQuery(query);
  handleLatitude(lat);
  handleLongitude(lng);
  console.log(lat, lng, name);
}

function SearchLocationInput({ handleLatitude, handleLongitude }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () =>
        handleScriptLoad(
          setQuery,
          autoCompleteRef,
          handleLatitude,
          handleLongitude
        )
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;
