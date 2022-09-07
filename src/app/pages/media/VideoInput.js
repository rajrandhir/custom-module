import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import '../media/MediaStyle.css';



const VideoInput = ({ width, height }) => {
    const [source, setSource] = useState();
    const inputRef = useRef();

    const onChangeHandler = (e) => {
        const file = e.target.files[0];
        console.log(file)

        const url = URL.createObjectURL(file);
        setSource(url)
    }
    const handleClick = () => {
        inputRef.current.click();
    }

    return (
        <div className='video_input_container'>
            <input
                ref={inputRef}
                type="file"
                className='video_input_field'
                accept='.mov,.mp4,.avi,.wmv'
                onChange={onChangeHandler}

            />
            {
                !source && <div style={{ textAlign: "center" }}>
                    <Button style={{backgroundColor:'#d9d9d9', color:"black"}} onClick={handleClick} variant="contained">Close</Button><br />
                    <h5>Nothing Selected</h5>
                </div>
            }
            {
                source && (
                    <video
                        className='video_input_video'
                        width='100%'
                        controls
                        src={source}
                        type="video/wmv"
                    />
                )
            }

        </div>
    )
}

export default VideoInput
