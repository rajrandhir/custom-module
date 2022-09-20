import React from 'react';
import Loader from './Loader';
import "../../../assests/styles/Common.css";


const customImage = {
  img1:"https://picsum.photos/seed/picsum/200/300",
  img2: "https://picsum.photos/200/300",
  img3: 'https://picsum.photos/200/300?grayscale'

}


const LoaderProps = () => {
  return (
    <>
     <div className='button-group loader_margin'>
      <Loader image={customImage.img1} />
      <Loader image={customImage.img2} />
      <Loader image={customImage.img3} />
     </div>
    </>
  )
}

export default LoaderProps;
