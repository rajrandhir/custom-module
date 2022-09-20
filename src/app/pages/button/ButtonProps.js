import { Card, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ButtonBox from './ButtonBox';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AbcIcon from '@mui/icons-material/Abc';

const ButtonProps = () => {
  const customButton = {
    backgroundColor: "#0000ff",
    color: '#fff !important',
    fontSize: "14px",
    fontWeight: 500,
    borderRadious: "50px",
    padding: "0px 12px",
    innerHeight: "35px",
    minWidth: "100px",
    outline: 'none',
    border: "0"
  }
  const customButton1 = {
    backgroundColor: "#008080",
    color: '#fff !important',
    fontSize: "14px",
    fontWeight: 500,
    borderRadious: "50px",
    padding: "0px 12px",
    innerHeight: "35px",
    minWidth: "100px",
    outline: 'none',
    border: "0"
  }
  const customButton3 = {
    backgroundColor: "#333333",
    color: '#fff !important',
    fontSize: "14px",
    fontWeight: 500,
    borderRadious: "50px",
    padding: "0px 12px",
    innerHeight: "35px",
    minWidth: "100px",
    outline: 'none',
    border: "0"
  }
  const customButton4 = {
    backgroundColor: "#ff99cc",
    color: '#fff !important',
    fontSize: "14px",
    fontWeight: 500,
    borderRadious: "50px",
    padding: "0px 12px",
    innerHeight: "35px",
    minWidth: "100px",
    outline: 'none',
    border: "0"
  }
  const customButton5 = {
    backgroundColor: " #804000",
    color: '#fff !important',
    fontSize: "14px",
    fontWeight: 500,
    borderRadious: "50px",
    padding: "0px 12px",
    innerHeight: "35px",
    minWidth: "100px",
    outline: 'none',
    border: "0"
  }
  const customcColor = {
    color1: "red",
    color2: "#fff",
    color3: "teal",
  }

  const customText = {
    text1: 'pink',
    text2: 'Bule',
    text3: "Teal",
    text4: "black",
    text5: "Brown"
  }

  const customIcon = {
    icon1: <ChangeCircleIcon />,
    icon2: <AccountCircleIcon />,
    icon3: <ModeStandbyIcon />,
    icon4: <AccountBalanceIcon />
  }
  const iconContainer = {
    color:"#fff",
    height: "27px",
    width: "27px",
    lineHeight: '29px',
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginTop: "3px"
  }
  const customSize = {
    height: "35px",
    width: "35px",
    radious: '50%'
  }
  return (
    <>
      <Container maxWidth="lg" sx={{mt:5}}>
        <Card>
          <CardContent>
            <ButtonBox iconContainer={iconContainer} customcColor={customcColor} customText={customText} customIcon={customIcon} customButton={customButton} 
            customButton1={customButton1} customButton3={customButton3} customButton4={customButton4} customButton5={customButton5}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
export default ButtonProps
