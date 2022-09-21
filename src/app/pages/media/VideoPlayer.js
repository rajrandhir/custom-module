import React, { useState, useEffect } from 'react';
import './MediaStyle.css';
import VideoProps from './VideoProps';
import { Container } from '@mui/system';
import axios from "axios";


//Custom video porps size
const customPlayerSize = {
  width: '100%',
  height: "100%"
}
const VideoPlayer = () => {
  const [videoLink, setVideoLink] = useState([]);

  // console.log(videoLink.url)
  // get video link from Api
  // const getApiData = async()=>{
  //   try {
  //     const res = await axios("https://jsonplaceholder.typicode.com/photos/1");
  //     setVideoLink(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/photos/1");
        setVideoLink(res.data)
      } catch (error) {
      }
    }
    getApiData();
  }, [])
  return (
    <>
      <Container maxWidth='xl'>
        {/* <VideoProps  url = {videoLink} customPlayerSize={customPlayerSize} />  */}
        <VideoProps />
      </Container>
    </>
  )
}

export default VideoPlayer;

