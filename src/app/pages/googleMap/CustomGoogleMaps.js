import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import Geocode from "react-geocode";




const CustomGoogleMaps = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const [selected, setSelected] = useState('');
  console.log(currentPosition)

  Geocode.setApiKey("AIzaSyCl7OWIGxUZtvwO9jcC9oJXV7bghh6VX7U");
  Geocode.setLanguage("en");

  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );


  
  const mapStyles = {
    height: "90vh",
    width: "100%"
  };
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition); 
    console.log(position)
 
  };
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelected({ lat, lng })
  };
  const onSelect = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelected({lat, lng});
  }
  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(success);
    
  }, [])

  return (
   <>
   <div>
   <LoadScript
      googleMapsApiKey="AIzaSyCl7OWIGxUZtvwO9jcC9oJXV7bghh6VX7U">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
        mapStyles='true'
      >
        {
          currentPosition.lat ?
            <Marker
              position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              draggable={true}
              onClick={(item) => onSelect(item)}
            /> :
            null
        }
        {
          selected.lng &&
          (
            <InfoWindow
              position={selected}
              clickable={false}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )
        }
      </GoogleMap>
    </LoadScript>
   </div>
   </>
  )
}
export default CustomGoogleMaps;
 
