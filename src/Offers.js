import React from "react";
import { useNavigate } from "react-router-dom";

function Offers() {
    let navigate = useNavigate();
    return (
        <div>
            <p>Offers</p>
            <button onClick={() => {navigate("/statsHOCKEY")}}>Home</button>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
        </div>
    );
  }
  
  export default Offers;