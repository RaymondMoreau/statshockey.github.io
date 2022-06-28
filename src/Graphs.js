import React from "react";
import { useNavigate } from "react-router-dom";

function Graphs() {
    let navigate = useNavigate();
    return (
        <div>
            <p>Graphs</p>
            <button onClick={() => {navigate("/statsHOCKEY")}}>Home</button>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
        </div>
    );
  }
  
  export default Graphs;