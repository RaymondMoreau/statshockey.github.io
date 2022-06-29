import React from "react";
import { useNavigate } from "react-router-dom";

function Offers() {
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
        <div class="container">
            <div class="page-header">
                <h1 class="offers-header">Get future updates on hockey-related activities!</h1>
                <p class="offers-subheader"><i>We have many connections to other useful stats/news websites, as well as other 
                    betting/guessing games such as Tim Horton's NHL Hockey Challenge!</i></p>
            </div>
        </div>
        <div class="container">
            <div class="red-container">
            <h3 class="form-header">Would you like to be put into the loop, and receive special hockey-related opportunities from us? Then <b>sign up</b>!</h3>
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-center">
                        <h2 class="text-center p-3">Enter Information Below!</h2>
                    </div>
                    <form class="needs-validation" id="signingUp">
                        <div class="row pb-3 px-3">
                            <div class="col-sm">
                                <label for="name">Name</label>
                                <input type="text" class="form-control p-2" id="name" placeholder="Name" required></input>
                            </div>
                            <div class="col-sm">
                                <label for="name">Email</label>
                                <input type="text" class="form-control p-2" id="email" placeholder="Email" required></input>
                            </div>
                        </div>
                        <div class="row pb-3 px-3">
                            <div class="col-sm">
                                <label for="name">How Old Are You?</label>
                                <input type="text" class="form-control p-2" id="age" placeholder="Age" required></input>
                            </div>
                            <div class="col-sm">
                                <label for="name">What's Your Favourite Team?</label>
                                <input type="text" class="form-control p-2" id="team" placeholder="Team" required></input>
                            </div>
                        </div>
                        <div class="row pb-3 px-3">
                            <div class="col-sm">
                                <label for="name">Mobile Phone Number</label>
                                <input type="text" class="form-control p-2" id="phone" placeholder="Phone Number" required></input>
                            </div>
                            <div class="col-sm">
                                <button class="btn btn-primary btn-lg active text-white" type="button" id="bookingButton"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Finish Registration!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default Offers;