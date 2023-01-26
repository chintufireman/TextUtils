import React from "react";

export default function Alert(props) {
    const captialize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    /* what the below statement means is if first and second statement are not null
    then jsx part will be written else null this happens because all the JSX will be 
    converted to Javascript calls */
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captialize(props.alert.type)}</strong>: {props.alert.msg}
     {/*  <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  );
}
