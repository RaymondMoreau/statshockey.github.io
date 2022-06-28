import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <p>Home</p>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
        </div>
    );
  }
  
  export default Home;