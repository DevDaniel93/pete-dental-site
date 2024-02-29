import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { logo, userImage, mtech } from './../../../Assets/images/'

import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Get_all_category } from '../../../Services/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import userImage from '../../../Assets/userImage.png'
import "./style.css";


export const Header = () => {
  const login = localStorage.getItem('login');

  const handleRedirect = () => {
    const LogoutData = localStorage.getItem('login');
    fetch(`https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/logout`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      },
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        localStorage.removeItem('login');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const navigate = useNavigate()

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

  const cartItems = useSelector((state) => state.cart.items);



  console.log("all_category", all_category)
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to={"/home"}>Pete Cardamone</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pr-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Home <span className="sr-only">(current)</span></Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Products
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                      {
                        all_category?.map((data) => (
                          <Link className="dropdown-item" to={`/${data?.slug}`}> {data?.name}</Link >

                        ))}

                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/aboutuspage"}  >About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contact_us"}   >Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/faqpage"}  >FAQ's</Link>
                  </li>
                </ul>

                <div className="navigationbar_right_icons">
 
               
                  <span><Link to={"/cart"}><i className="fa-solid fa-cart-shopping pl-2 pr-1"></i></Link></span>
                  {/* <span><Link to={"/loginpage"}><i className="fa-regular fa-user px-2"></i></Link></span> */}
                  <span className='qty'> {cartItems.length}</span>




{/* full round background */}


                  {!login ? (
                    // <button type="button" className='w-100'>
                    //   <Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} to="/login" type="button">
                    //     <i className="fa fa-user-circle-o" aria-hidden="true"></i> Login / Signup
                    //   </Link>
                    // </button>
                    <span><Link to={"/loginpage"}><i className="fa-regular fa-user px-2"></i></Link></span>
                  ) :
                    (
                      <>

                        <Dropdown className="userDropdown">
                          <Dropdown.Toggle
                            variant="transparent"
                            className="notButton toggleButton"
                          >
                            <div className="userImage">
                              <img
                                src={userImage}
                                alt=""
                                className=" "
                              />
                            </div>

                          </Dropdown.Toggle>
                          <Dropdown.Menu className="userMenu" align="end">
                          <Link to="/myaccount" className="userMenuItem" >
                          <i className="fa-regular fa-user px-2"></i>{" "}
                              My Account
                            </Link>
                            <Link to="#" className="userMenuItem" onClick={handleRedirect}>
                              <FontAwesomeIcon
                                className="me-1 yellow-text"
                                icon={faSignOut}

                              />{" "}
                              Logout
                            </Link>
                         
                          </Dropdown.Menu>
                        </Dropdown>


                      </>
                    )}
                </div>

              </div>
            </nav>

          </div>
        </div>
      </div>


    </header>
  );
};
