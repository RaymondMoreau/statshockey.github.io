import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    let navigate = useNavigate();
    return (
        <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4">statsHOCKEY</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><button onClick={() => {navigate("/statsHOCKEY")}}>Home</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Divisions")}}>Divisions</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Graphs")}}>Graphs</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Offers")}}>Offers</button></li>
                </ul>
            </header>
        </div>
        </div>
        /* <div>
            code graveyard

            <p>Home</p>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Divisions</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Graphs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Offers</a></li>
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>

        </div> */
    );
  }
  
  export default Home;