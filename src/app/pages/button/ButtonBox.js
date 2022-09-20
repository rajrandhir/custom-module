import React from 'react';
import { Button } from '@mui/material';
import "../../../assests/styles/Common.css"

const ButtonBox = ({ customText, customIcon, customButton, customcColor, iconContainer, customButton1, customButton3,customButton4, customButton5 }) => {
    console.log(iconContainer)
    return (
        <>
            <div className="button-group">
                <Button
                    style={customButton}
                    startIcon={customIcon.icon1 ? <div style={iconContainer}>{customIcon.icon1}</div> : null}
                >
                    <span style={{ color: customcColor.color2 }} className='btn_text'>{customText.text2}</span>

                </Button>
                <Button
                    style={customButton1}
                    endIcon={customIcon.icon1 ? <div style={iconContainer}>{customIcon.icon2}</div> : null}
                >
                    <span style={{ color: customcColor.color2 }} className='btn_text'>{customText.text3}</span>

                </Button>
                <Button
                    style={customButton3}
                    endIcon={customIcon.icon1 ? <div style={iconContainer}>{customIcon.icon3}</div> : null}
                >
                    <span style={{ color: customcColor.color2 }} className='btn_text'>{customText.text4}</span>

                </Button>
                <Button
                    style={customButton4}
                    endIcon={customIcon.icon1 ? <div style={iconContainer}>{customIcon.icon4}</div> : null}
                >
                    <span style={{ color: customcColor.color2 }} className='btn_text'>{customText.text1}</span>

                </Button>
                <Button
                    style={customButton5}
                    endIcon={customIcon.icon ? <div style={iconContainer}>{customIcon.icon5}</div> : null}
                >
                    <span style={{ color: customcColor.color2 }} className='btn_text'>{customText.text5}</span>

                </Button>
                
            </div>
        </>
    )
}
export default ButtonBox;

