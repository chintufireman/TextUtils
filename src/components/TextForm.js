import React, { useState } from "react";

export default function TextForm(props) {
  function handleChange(event) {
    /* whenever user tries to change the text area 
   then the new value will be like the prev written value
   + the new value u added asshole 
   */
    setText(event.target.value);
    
  }
  function handleUpClick(event) {
    console.log(event);
    setText(text.toUpperCase());
    props.showAlert("converted to upper-case","success");
  }
  function handleLowClick() {
    setText(text.toLowerCase());
    props.showAlert("converted to lower-case","success")
  }
  /* btw it is recommended to use arrow function 
  as it used lexical this unlike function which refers 
  to current object this 
  
  please research more on lexical this
  */
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{backgroundColor:props.mode === 'dark' ? 'grey':'white',
            color:props.mode === 'dark' ? 'white':'black'}}
          />
        </div>
        <button className="btm btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btm btn-primary mx-1" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-2" style={{backgroundColor:props.mode === 'dark' ? '#071017':'white',
    color:props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your text sumary</h2>
        <p>
          {text.charAt(0) != "" ? text.split(" ").length : 0} words {text.length} number of characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to preview'}</p>
      </div>
    </>
  );
}
/* whenever you are listening anything in react 
for like onchange or onclick then react will provide you
an event object from where you can fetch value or other 
functionalities */
