import React from "react";
import { useNavigate } from "react-router-dom";

function Divisions() {
    let navigate = useNavigate();
    return (
        <div>
            <p>Divisions</p>
            <button onClick={() => {navigate("/statsHOCKEY")}}>Home</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
        </div>
    );
  }
  
  export default Divisions;