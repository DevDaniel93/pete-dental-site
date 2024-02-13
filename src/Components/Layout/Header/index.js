 
import { Link } from "react-router-dom";
// import { logo, userImage, mtech } from './../../../Assets/images/'

import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
// import { useNavigate } from "react-router-dom";
// import {
//   faBell,
//   faUser,
//   faBars,
//   faEllipsisV,
//   faSignOut,
// } from "@fortawesome/free-solid-svg-icons";

// import { notifications } from "../../../Config/Data";

import "./style.css";


export const Header = (props) => {
  

//   const navigate = useNavigate();

 
  return (
    <header>
      <Navbar className="customHeader" expand="md">
        <Container fluid>
        {/* <header>
        <section class="navigationbar_section"> */}
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="./index.php">Pete Cardamone</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                          
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                  <a class="nav-link" href="./second-banner.php">Home <span class="sr-only">(current)</span></a>
                                </li>
                              
                                <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="./3D-products-listing.php">3D Printed Models</a>
                                    <a class="dropdown-item" href="./sports-product-listing.php">Sports Mouth Guards</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="./night-product-listing.php">Night Mouth Guards</a>
                                  </div>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="./aboutuspage.php">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="faqpage.php">FAQ's</a>
                                </li>
                              </ul>

                              <div class="navigationbar_right_icons">
                                <span><a href="javascript:;"><i class="fa-solid fa-cart-shopping pl-2 pr-1"></i></a></span>
                                <span><a href="loginpage.php"><i class="fa-regular fa-user px-2"></i></a></span>
                              </div>
                             
                            </div>
                          </nav>

                    </div>
                </div>
            </div>
        {/* </section>
    </header> */}
        </Container>
      </Navbar>

 
    </header>
  );
};
