import React from "react";
import "./PrimaryBtn.css";

function PrimaryBtn(props) {
  return (
    <button className="primary-btn" onClick={props.clickEvent}>
      {props.text}
    </button>
  );
}

export default PrimaryBtn;
