import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { height } from "@mui/system";

const PlaceComponent = () => {
    const inputRef = useRef();

    const handlePlaceChanged = () => { 
        const [ place ] = inputRef.current.getPlaces();
        if(place) { 
            console.log(place.formatted_address)
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
        } 
    }

    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",flexWrap:"wrap", marginTop:"50px"}}>
            <LoadScript googleMapsApiKey='AIzaSyCl7OWIGxUZtvwO9jcC9oJXV7bghh6VX7U' libraries={["places"]}>
                <StandaloneSearchBox
                    onLoad={ref => inputRef.current = ref}
                    onPlacesChanged={handlePlaceChanged}                  
                >
                    <input
                    style={{width:"80vw",padding:"3px "}}
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                    />
                </StandaloneSearchBox>
        </LoadScript>
        </div>
    );
};

export default PlaceComponent;




