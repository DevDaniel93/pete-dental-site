import "./style.css";
import React, { useState, useEffect } from "react";
import { Banner } from "../../Components/Banner";
// import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../store/action';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementvariationQuantity, incrementQuantityCart,
  patient_name,
  patient_file,
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
import { CustomInput } from '../../Components/CustomInput'
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
    patient_name: "",
    file: ""
  });

  const handleChangeQuantity = (productid, newQuantity) => {
    dispatch(incrementvariationQuantity(productid, newQuantity));

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productid]: newQuantity,
    }));
  };


  console.log("cartitem ", cartItems)


  const dispatch = useDispatch();

  const navigate = useNavigate()

  const calculateTotalPrice = (product) => {
    const quantity = product.qty || 0;

    return product.price * quantity;
  };

  const totalCartPrice = cartItems?.reduce((total, product) => {
    const productPrice = product.price || 0;
    const productQuantity = product.qty || 1;


    return total + productPrice * productQuantity;
  }, 0);





  const filehandleChange = (productid, event) => {
    const file = event.target.files[0];

    if (file) {
      const fileName = file;
      dispatch(patient_file(productid, fileName));
      setFormData((prevData) => ({
        ...prevData,
        file: fileName,
      }));
    }
    console.log(formData)
  };



  const handleChange = (patientid, event) => {
    const { name, value } = event.target;
    console.log("name", name, "value pro", value)
    if (name === "patient_name") {


      dispatch(patient_name(patientid, value));
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };













  console.log("formData", formData.patient_name)
  console.log("formData", formData.patient_file)


  const [nameerror, setNameerror] = useState();
  const [fileerror, setFileerror] = useState();

  const handleSubmit = () => {
    if (formData.patient_name === "") {

      setNameerror("Patient name is required");
      console.log("patient_name full")
    } else if (formData.patient_file === "") {
      setFileerror("Patient file is required");
      console.log("patient_file full")

    } else {
      console.log(" full")
      navigate("/checkout");
    }
  }

  console.log("cartitm", cartItems)
  return (
    <>
      <UserLayout>
        <Banner
          heading="Cart"
          descripction="Our clients are our priority, we offer quality dental services with a team of specialists.More details about our services below."
        />

        {cartItems != '' ? (
          <section className="cart_item_section pb-5 mt-5">
            <form onSubmit={handleSubmit}>
              <div className="container">

                {cartItems?.map((data) => (
                  <div className="row align-items-center py-4 mt-5">


                    <div className=" col-md-4">
                    
                        <div className="cart_input mb-0 ">
                          <CustomInput
                            label="Patient Name/id"
                            type="text"

                            placeholder="Patient Name"
                            required
                            name="patient_name"
                            labelclassName='mainLabel'
                            input_icon='mainInput'
                            onChange={(event) => handleChange(data.id, event)}
                          />
                          <span className=" mt-0 ">
                            {nameerror}
                          </span>

                        </div>
                        <div class="">
                          <div className="mb-3">

                            <CustomInput
                              label=" Upload File"
                              type="file"
                              required
                              name="patient_file"
                              labelclassName='mainLabel'
                              input_icon='mainInput'

                              // onChange={() => filehandleChange(data.id)}
                              onChange={(event) => filehandleChange(data.id, event)}
                            />
                            <span className=" mt-0 ">
                              {fileerror}
                            </span>


                            <div className="invalid-feedback">
                              {" "}
                              Valid last name is required.{" "}
                            </div>
                          </div>
                        </div>

                   
                    </div>


                    <div className="col-md-1">
                      <div className="text-center">
                        <img
                          src={baseurl + data.src}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-md-7">
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

                <div className="row  justify-content-end  ">
                  <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Your cart</span>
                      <span className="badge badge-secondary badge-pill">{cartItems.length}</span>
                    </h4>
                    <ul className="list-group mb-3 sticky-top">
                      {cartItems?.map((data) => (

                        <div>
                          <li className=" d-flex justify-content-between lh-condensed">
                            <p>Total</p>


                            <div>

                              <span className="text-muted">${calculateTotalPrice(data) * qty}</span>
                            </div>

                          </li>

                        </div>
                      ))}

                      {/* <button onClick={handleSubmit} className="   w-25     badge-secondary      border-1   ">Checkout</button> */}
                      <button type="submit" className="product_add_to_cart_btn">Checkout</button>
                    </ul>

                  </div>

                </div>
              </div>
            </form>

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
