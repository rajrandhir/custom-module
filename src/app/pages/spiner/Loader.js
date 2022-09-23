import React from 'react';
import CustomImageLoader from "react-custom-image-loader.";


const Loader = (props) => {
  return (
    <>
      <CustomImageLoader
        image={props.image}
        animationType={'spin'}
        speed={2}
        circle={true}
      />
    </>
  )
}

export default Loader;
Loader.defaultProps = {
  image: "https://picsum.photos/200"
}
