import React from "react";

const Square = (props) => {
    return (
        <div onClick={props.onClick}style={{border: "1px solid" , height:"50px" , width:"70%" , display:"flex" , justifyContent:"center" , alignItems:"center"}} className="Square">
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;