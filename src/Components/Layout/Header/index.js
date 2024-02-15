import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// import { logo, userImage, mtech } from './../../../Assets/images/'

import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Get_all_category } from '../../../Services/index'
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

  const [all_category, setAll_category] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Get_all_category();
        setAll_category(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log("all_category", all_category)
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <nav class="navbar navbar-expand-lg navbar-light">
              <Link class="navbar-brand" to={"#"}>Pete Cardamone</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to={"/home"}>Home <span class="sr-only">(current)</span></Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" href="products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Products
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                      {
                        all_category?.map((data) => (
                          <Link class="dropdown-item" to={`/${data?.slug}`}> {data?.name}</Link >

                        ))}
                      {/* <Link class="dropdown-item" to={"/3D-products-listing"} >3D Printed Models</Link>}
                                    <Link class="dropdown-item" to={"/sports-product-listing"}>Sports Mouth Guards</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link class="dropdown-item" to={"/night-product-listing"}  >Night Mouth Guards</Link> */}
                    </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/aboutuspage"}  >About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/contact_us"}   >Contact Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/faqpage"}  >FAQ's</Link>
                  </li>
                </ul>

                <div class="navigationbar_right_icons">
                  <span><Link to={"#"}><i class="fa-solid fa-cart-shopping pl-2 pr-1"></i></Link></span>
                  <span><Link to={"/loginpage"}><i class="fa-regular fa-user px-2"></i></Link></span>
                </div>

              </div>
            </nav>

          </div>
        </div>
      </div>


    </header>
  );
};
