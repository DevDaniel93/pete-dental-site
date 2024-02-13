 
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


export const Footer = (props) => {
  

//   const navigate = useNavigate();

 
  return (
    // <header>
    //   <Navbar className="customHeader" expand="md">
    //     <Container fluid>
    //     {/* <header>
    //     <section class="navigationbar_section"> */}
    //         <div class="container">
    //             <div class="row">
    //                 <div class="col-md-12">

    //                     <nav class="navbar navbar-expand-lg navbar-light">
    //                         <a class="navbar-brand" href="./index.php">Pete Cardamone</a>
    //                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                           <span class="navbar-toggler-icon"></span>
    //                         </button>
                          
    //                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //                           <ul class="navbar-nav ml-auto">
    //                             <li class="nav-item">
    //                               <a class="nav-link" href="./second-banner.php">Home <span class="sr-only">(current)</span></a>
    //                             </li>
                              
    //                             <li class="nav-item dropdown">
    //                               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                 Products
    //                               </a>
    //                               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //                                 <a class="dropdown-item" href="./3D-products-listing.php">3D Printed Models</a>
    //                                 <a class="dropdown-item" href="./sports-product-listing.php">Sports Mouth Guards</a>
    //                                 <div class="dropdown-divider"></div>
    //                                 <a class="dropdown-item" href="./night-product-listing.php">Night Mouth Guards</a>
    //                               </div>
    //                             </li>
    //                             <li class="nav-item">
    //                               <a class="nav-link" href="./aboutuspage.php">About Us</a>
    //                             </li>
    //                             <li class="nav-item">
    //                                 <a class="nav-link" href="#">Contact Us</a>
    //                             </li>
    //                             <li class="nav-item">
    //                                 <a class="nav-link" href="faqpage.php">FAQ's</a>
    //                             </li>
    //                           </ul>

    //                           <div class="navigationbar_right_icons">
    //                             <span><a href="javascript:;"><i class="fa-solid fa-cart-shopping pl-2 pr-1"></i></a></span>
    //                             <span><a href="loginpage.php"><i class="fa-regular fa-user px-2"></i></a></span>
    //                           </div>
                             
    //                         </div>
    //                       </nav>

    //                 </div>
    //             </div>
    //         </div>
    //     {/* </section>
    // </header> */}
    //    
    //   </Navbar>

 
    // </header>





    
<footer class="footer_section">
      {/* <section> */}
      <Container fluid>
          {/* <div class="container"> */}
              <div class="row">
                  <div class="col-md-4 mb-2">
                      <div class="aboutus_main">

                          <h6 class="footer_title">Pete Cardamone</h6>

                          <p class="aboutus_description">Lorem ipsum dolor sit amet, consectetur adipisc
                            ing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                          <div class="footer_social_icons">

                              <span><i class="fa-brands fa-instagram footer_icon"></i></span>
                              <span><i class="fa-brands fa-facebook-f footer_icon"></i></span>
                              <span><i class="fa-brands fa-youtube footer_icon"></i></span>
                              <span><i class="fa-brands fa-tiktok footer_icon"></i></span>

                          </div>

                      </div>
                  </div>

                  <div class="col-md-8">
                      <div class="row">
                          <div class="col-md-4">
                              <div class="quicklinks_main">
                                  <h6 class="footer_subtitle">QUICK LINKS</h6>

                                  <div>
                                      <ul class="quick_links_list">
                                          <li><a href="./index.php">Home</a></li>
                                          <li><a href="aboutuspage.php">About Us</a></li>
                                          <li><a href="./3D-products-listing.php">Products</a></li>
                                          <li><a href="./faqpage.php">FAQ's</a></li>
                                      </ul>
                                  </div>

                              </div>
                              
                          </div>

                          <div class="col-md-4">
                              <div class="quicklinks_main">
                                  <h6 class="footer_subtitle">USEFUL LINKS</h6>

                                  <div>
                                      <ul class="quick_links_list">
                                          <li><a href="javascript:;">Terms And Conditions</a></li>
                                          <li><a href="javascript:;">Privacy Policy</a></li>
                                          <li><a href="./faqpage.php">FAQ's</a></li>
                                          <li><a href="javascript:;">Contact Us</a></li>
                                      </ul>
                                  </div>

                              </div>
                              
                          </div>

                          <div class="col-md-4">
                              <div class="quicklinks_main">
                                  <h6 class="footer_subtitle">CONTACT INFO</h6>

                                  <div>
                                      <ul class="quick_links_list">
                                          <li class="mb-2">
                                              <a href="javascript:;" class="contact_list">
                                                  <span><i class="fa-solid fa-phone-volume contact_icon"></i></span>
                                                  <span>+1 (123) 456-7890</span>
                                              </a>
                                          </li>

                                          <li class="mb-2">
                                              <a href="javascript:;" class="contact_list">
                                                  <span><i class="fa-solid fa-envelope-open-text contact_icon"></i></span>
                                                  <span>email@example.com</span>
                                              </a>
                                          </li>

                                          <li>
                                              <a href="javascript:;" class="contact_list">
                                                  <span><i class="fa-solid fa-location-dot contact_icon"></i></span>
                                                  <span>Lorem 123, Ipsum 456, Dolor 78, Sit AMET</span>
                                              </a>
                                          </li>
                                          
                                      </ul>
                                  </div>

                              </div>
                              
                          </div>
                      </div>
                  </div>

                  <div class="col-md-12">
                    <div class="footer_end">
                      <p class="m-0">Copyright © 2024 <span>Pete Cardamone</span> All Rights Reserved.</p>
                    </div>
                  </div>
              </div>
          {/* </div> */}
      {/* </section> */}
      </Container>
  </footer>
  );
};
