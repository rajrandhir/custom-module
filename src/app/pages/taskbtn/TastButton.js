import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import "../../../assests/styles/Common.css"
import { Box } from '@mui/system';

const TastButton = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center,'&>*:m>1"}}>
        {/* <Container > */}
           <div className='button-group'>
                <Link to='/video' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Video Player</Button></Link>
                <Link to='/btn' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Custom Button</Button></Link>
                <Link to='/picker' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Date Picker</Button></Link>
                <Link to='/loader' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Custom Loader</Button></Link>
                <Link to='/map' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Google Map</Button></Link>
                <Link to='/place' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Place G-map</Button></Link>
                <Link to='/' style={{ textDecoration: "none" }}><Button variant="outlined" size="small">Commin Soon</Button></Link>
           </div>            
                     
        {/* </Container> */}
        </Box>
    )
}

export default TastButton
