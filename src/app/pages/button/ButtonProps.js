import { Card, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CustomButtonWrapper from './CustomButtonWrapper';
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
    ChangeCircleIcon: <ChangeCircleIcon />,
    AccountCircleIcon: <AccountCircleIcon />,
    ModeStandbyIcon: <ModeStandbyIcon />,
    AccountBalanceIcon: <AccountBalanceIcon />
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Card>
          <CardContent>
            <CustomButtonWrapper customcColor={customcColor}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
export default ButtonProps
