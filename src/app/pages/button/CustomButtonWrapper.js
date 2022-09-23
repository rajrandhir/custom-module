import React from 'react';


const CustomButtonWrapper = (props) => {
    console.log(props);

    return (
        <>
            <div className="button-group">
                <button className={props.customIcon ? "buttonStyleWithIcon " : "buttonStyleWithoutIcon"}><span>Primary</span><span>{props.customIcon}</span></button>
            </div>
        </>
    )
}
export default CustomButtonWrapper;
CustomButtonWrapper.defaultProps = {
    customIcon: "",

}

