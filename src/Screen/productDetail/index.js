import "./style.css";
import React, { useState , useEffect } from "react";
import { Banner } from "../../Components/Banner";
// import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../store/action';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementvariationQuantity, incrementQuantityCart,
  decrementQuantityCart,
  removeFromCart,
  updateCartItem,
} from "../../store/action";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Checkout } from "../../Services/index";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../Components/CustomButton";
import { Link } from "react-router-dom";
export function ProductCheckout(product) {
  const [productQuantities, setProductQuantities] = useState({});
  const [qty, setQty] = useState(1);
  const baseurl = `${process.env.REACT_APP_API_URL}/public/`;
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({
    email: '',
    name:""
  });

  const handleChangeQuantity = (productid, newQuantity) => {
    dispatch(incrementvariationQuantity(productid, newQuantity));

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productid]: newQuantity,
    }));
  };
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Checkout successfull")

    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    formDataMethod.append('products', JSON.stringify(cartItems));

    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}/public/api/checkout`, {
      method: "POST",

      body: formDataMethod,
    })
      .then((response) => {
        navigate('/order_places')
        return response.json();




      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");

      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");

      });
  };

  const calculateTotalPrice = (product) => {
    const quantity = product.qty || 0;

    return product.price * quantity;
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const name = localStorage.getItem('name');
  console.log("name" , name )
  const storedEmail = localStorage.getItem('email');
console.log("storedEmail" , storedEmail )
  // Update the email value in formData if it exists in localStorage
  useEffect(() => {
    if (storedEmail) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: storedEmail,
      }));
    }
  }, [storedEmail]);
  useEffect(() => {
    if (name) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: name,
      }));
    }
  }, [name]);

  const totalCartPrice = cartItems?.reduce((total, product) => {
    const productPrice = product.price || 0;
    const productQuantity = product.qty || 1; // Assuming a default quantity of 1


    return total + productPrice * productQuantity;
  }, 0);


  // const  handlecheckout = ( ) =>{
  //   navigate('/order_places')
  // }
  return (
    <>
      <UserLayout>
        <Banner
          heading="Cart"
          descripction="Our clients are our priority, we offer quality dental services with a team of specialists.More details about our services below."
        />

        {cartItems != '' ? (
          <section className="cart_item_section pb-5 mt-5">
            <div className="container">

              {cartItems?.map((data) => (
                <div className="row align-items-center py-4 mt-5">
                  <div className="col-md-1">
                    <div className="text-center">
                      <img
                        src={baseurl + data.src}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-md-11">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cart_item_details">
                        <h6 className="cart_item_title">{data.name}</h6>

                        <div className="cart_item_detail">
                          <span className="cart_item_price">${data.price}</span>
                          <span className="dtlqty">
                          <span type="button" onClick={() => dispatch(incrementQuantityCart(data.id))} className="inc">+</span>
                          <input
                            type="number"
                            id={`quantity-${data.id}`}
                            name={`quantity-${data.id}`}
                            value={productQuantities[data.id] || data.qty}
                            onChange={(e) =>
                              handleChangeQuantity(
                                data.id,
                                parseInt(e.target.value, 10)
                              )
                            }
                          />
 
                          <span className="dec" type="button" onClick={() => dispatch(decrementQuantityCart(data.id))}>-</span>
                      
                          </span>
 
                        </div>

                        <div>

                        </div>

                        <div>
                          <span className="cart_item_instock">
                            {data?.description
                              ?.split(" ")
                              .slice(0, 14)
                              .join(" ") || ""}
                          </span>
                        </div>
                      </div>

                      <div className="cart_item_action_btn text-center">
                        <p>${calculateTotalPrice(data) * qty} </p>

                        <div className=" text-center">
                          <button
                            className="cart_del_btn text-danger border-0 bg-transparent"
                            onClick={() => dispatch(removeFromCart(data.id))}
                          >
                            <span className="delete_bucket">
                              <i className="fa-solid fa-trash"></i>
                            </span>
                            <span className="delete_bucket_text"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="row py-4">
                <div className="col-md-8">
                  <div className="d-flex align-items-center justify-content-between flex-wrap"></div>
                </div>

                <div className="col-md-4">
                  <div className="cart_details_info">

                  </div>
                </div>
              </div>
            </div>
            <div className="container">

              <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{cartItems.length}</span>
                  </h4>
                  <ul className="list-group mb-3 sticky-top">
                    {cartItems?.map((data) => (

                      <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="my-0">{data?.name}</h6>
                          <small className="text-muted"> {data?.description
                            ?.split(" ")
                            .slice(0, 14)
                            .join(" ") || ""}</small>
                        </div>
                        <span className="text-muted">${calculateTotalPrice(data) * qty}</span>
                      </li>))}



                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>${totalCartPrice}</strong>
                    </li>
                  </ul>

                </div>
                <div className="col-md-8 order-md-1">
                  <h4 className="mb-3">Billing address</h4>
                  <form
                    onSubmit={handleSubmit}
                    className="needs-validation"
                    novalidate=""
                  >
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter Name"
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="name"
                          value={formData.name}
                          disabled={storedEmail ? true : false}
                          onChange={handleChange}
                          className="form-control"
                          id="firstName"
                        />

                        <div className="invalid-feedback">
                          {" "}
                          Valid first name is required.{" "}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input
                          required
                          placeholder="Enter lastName"
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          className="form-control"
                          id="lastName"
                        />
                        <div className="invalid-feedback">
                          {" "}
                          Valid last name is required.{" "}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="email">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                     

                      <input
                        type="email"
                        required
                        placeholder="Enter Email"
                        labelclassName="mainLabel"
                        inputclassName="mainInput"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        disabled={storedEmail ? true : false}
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Please enter a valid email address for shipping updates.{" "}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="address">Address</label>
                      <input
                        required
                        placeholder="Enter Adress"
                        labelclassName="mainLabel"
                        inputclassName="mainInput"
                        name="address_1"
                        value={formData.address_1}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="address"
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your shipping address.{" "}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="address2">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        required
                        labelclassName="mainLabel"
                        inputclassName="mainInput"
                        name="address_2"
                        value={formData.address_2}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label for="country">Country</label>
                        {/* <select className="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select> */}

                        <input
                          required
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="country"
                        />

                        <div className="invalid-feedback">
                          {" "}
                          Please select a valid country.{" "}
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label for="state">State</label>

                        <input
                          required
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="state"
                        />

                        <div className="invalid-feedback">
                          {" "}
                          Please provide a valid state.{" "}
                        </div>
                      </div>

                      <div className="col-md-5 mb-3">
                        <label for="state">Town</label>

                        <input
                          required
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="town"
                          value={formData.town}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="town"
                        />

                        <div className="invalid-feedback">
                          {" "}
                          Please provide a valid state.{" "}
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"

                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
              <footer className="my-5 pt-5 text-muted text-center text-small">

              </footer>
            </div>
            <ToastContainer />
          </section>
        ) : (
          <div className="container">
            <div className="emptyCart text-center py-5">
              <h4 className="mb-4">There is no product in your cart.</h4>
              <Link className="btn text-white" to='/3d-printed-models-1'>Continue Shopping</Link>
            </div>
          </div>
        )}



      </UserLayout>
    </>
  );
}
