import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Banner } from "../../Components/Banner";
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
import { useDispatch, useSelector } from "react-redux";

import {
    incrementvariationQuantity, removeFromCart,
} from "../../store/action";

import GooglePayButton from '@google-pay/button-react';

import { UserLayout } from "../../Components/Layout/UserLayout";


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js'

import { useNavigate } from "react-router-dom";



import { Link } from "react-router-dom";


export function Checkout(product) {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const [paypaldata, setPaypaldata] = useState()


    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState("");
    const handlePaymentChange = (paymentType) => {
        setSelectedPayment(paymentType);
    };
    useEffect(() => {

        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };


    const [productQuantities, setProductQuantities] = useState({});
    const [qty, setQty] = useState(1);
    const baseurl = `${process.env.REACT_APP_API_URL}/public/`;
    const cartItems = useSelector((state) => state.cart.items);
    const [formData, setFormData] = useState({
        email: '',
        name: ""
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
 
    const paymentSend = (tokenData) => {

        toast("Checkout successfull")

        const formDataMethod = new FormData();

        formDataMethod.append('products', JSON.stringify(cartItems));



        for (const key in formData) {
            formDataMethod.append(key, formData[key]);
        }

        cartItems.forEach(function (item, index) {
            if (item.patient_file) {
                formDataMethod.append('pf_' + item?.id, item?.patient_file);
            } else {
                formDataMethod.append('products[' + index + ']', JSON.stringify(item));
            }
        });
        formDataMethod.append('stripe_token', tokenData);
        document.querySelector(".loaderBox").classList.remove("d-none");

        fetch(`${process.env.REACT_APP_API_URL}/public/api/checkout`, {
            method: "POST",

            body: formDataMethod,
        })
            .then((response) => {

                dispatch(removeFromCart())
                navigate('/order_places')
                return response.json();
            })
            .then((response) => {
 
                document.querySelector(".loaderBox").classList.add("d-none");

            })
            .catch((error) => {
                document.querySelector(".loaderBox").classList.add("d-none");

            });
    };




    const paypalpaymentSend = (data) => {
 
        toast("Checkout successfull")
        const formDataMethod = new FormData();
        formDataMethod.append('products', JSON.stringify(cartItems));
        formDataMethod.append('paypal token', JSON.stringify(data));
        for (const key in formData) {
            formDataMethod.append(key, formData[key]);
        }

        cartItems.forEach(function (item, index) {
            if (item.patient_file) {
                formDataMethod.append('pf_' + item?.id, item?.patient_file);
            } else {
                formDataMethod.append('products[' + index + ']', JSON.stringify(item));
            }
        });
        document.querySelector(".loaderBox").classList.remove("d-none");

        fetch(`${process.env.REACT_APP_API_URL}/public/api/checkout`, {
            method: "POST",

            body: formDataMethod,
        })
            .then((response) => {

                dispatch(removeFromCart())
                navigate('/order_places')
                return response.json();
            })
            .then((response) => {
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

    const storedEmail = localStorage.getItem('email');



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






    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const { token, error } = await stripe.createToken(elements.getElement(CardElement));

        if (token) {
 
            paymentSend(token?.id)

        } else {
         }
    };


 
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


                            <div className="row align-items-center py-4 mt-5">


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
                                                    value={formData?.name}
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
                                                    value={formData?.lastname}
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
                                                value={formData?.email}
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
                                                value={formData?.address_1}
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
                                        <div className="row">
                                            <div className="col-md-5 mb-3">
                                                <label for="country">Country</label>
                                                <input
                                                    required
                                                    labelclassName="mainLabel"
                                                    inputclassName="mainInput"
                                                    name="country"
                                                    value={formData?.country}
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
                                                    value={formData?.state}
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
                                                    value={formData?.town}
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

                                        <div className="mb-3">

                                            <h4 className="mb-3">Shipping address</h4>
                                            <label for="address2">
                                                Shipping Address  <span className="text-muted">(Optional)</span>
                                            </label>
                                            <input
                                                required
                                                labelclassName="mainLabel"
                                                inputclassName="mainInput"
                                                name="shipping_address"
                                                value={formData?.shipping_address}
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
                                                <input
                                                    required
                                                    labelclassName="mainLabel"
                                                    inputclassName="mainInput"
                                                    name="shipping_country"
                                                    value={formData?.shipping_country}
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
                                                    name="shipping_state"
                                                    value={formData?.shipping_state}
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
                                                    name="shipping_town"
                                                    value={formData?.shipping_town}
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
                                        <div className="">
                                        </div>
                                        <div className="mb-3">
                                            <h4 className="mb-3">Chose Your Payment Method</h4>
                                            <div>
                                                <div>
                                                    <div className=" mb-4 ">
                                                        <div className={`stripebox p-2 d-flex gap-4 border  mb-4  justify-content-between  ${selectedPayment === 'gpay' ? 'selected' : ''}`}>
                                                            <span className="  d-flex  align-items-center  ">
                                                                <input
                                                                    id="stripe-button-container"
                                                                    type="radio"
                                                                    className="paypalradio btn bg-black"
                                                                    onChange={() => handlePaymentChange('gpay')}
                                                                    checked={selectedPayment === 'gpay'}
                                                                />

                                                                <h4 className="strip-para ml-2 mb-0 ">Pay With Goolge</h4>
                                                            </span>
                                                            <span className="stripeicn "><i class="fa-brands fa-google-pay"></i></span>
                                                        </div>
                                                        {selectedPayment === 'gpay' &&
                                                            <GooglePayButton
                                                                environment="TEST"
                                                                paymentRequest={{
                                                                    apiVersion: 2,
                                                                    apiVersionMinor: 0,
                                                                    allowedPaymentMethods: [
                                                                        {
                                                                            type: 'CARD',
                                                                            parameters: {
                                                                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                                            },
                                                                            tokenizationSpecification: {
                                                                                type: 'PAYMENT_GATEWAY',
                                                                                parameters: {
                                                                                    gateway: 'example',
                                                                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                                                                },
                                                                            },
                                                                        },
                                                                    ],
                                                                    merchantInfo: {
                                                                        merchantId: '12345678901234567890',
                                                                        merchantName: 'Demo Merchant',
                                                                    },
                                                                    transactionInfo: {
                                                                        totalPriceStatus: 'FINAL',
                                                                        totalPriceLabel: 'Total',
                                                                        totalPrice: '100.00',
                                                                        currencyCode: 'USD',
                                                                        countryCode: 'US',
                                                                    },
                                                                }}
                                                                onLoadPaymentData={paymentRequest => {
 
                                                                }}
                                                            />}
                                                    </div>
                                                    <div className="  mb-4 ">
                                                        <div className={`stripebox p-2 d-flex gap-4 justify-content-between  border ${selectedPayment === 'stripe' ? 'selected' : ''}`}>
                                                            <span className="  d-flex  align-items-center  ">
                                                                <input
                                                                    id="stripe-button-container"
                                                                    type="radio"
                                                                    className="paypalradio btn bg-black"
                                                                    onChange={() => handlePaymentChange('stripe')}
                                                                    checked={selectedPayment === 'stripe'}
                                                                />

                                                                <h4 className="strip-para ml-2 mb-0  ">Pay With Stripe</h4>
                                                            </span>
                                                            <span className="stripeicn ">
                                                                <i class="fa-brands fa-stripe"></i>

                                                            </span>
                                                        </div>
                                                        {selectedPayment === 'stripe' &&

                                                            <div className=" mt-4 ">
                                                                <CardElement />
                                                                <span className="orderplaced mt-4 ">
                                                                    <button onClick={handleSubmit}
                                                                        className="btn btn-primary btn-lg btn-block mt-4 "
                                                                        type="submit"

                                                                    >
                                                                        Continue to checkout
                                                                    </button>

                                                                </span>
                                                            </div>}
                                                    </div>
                                                    <div className=" mb-4 ">
                                                        <div className={`stripebox p-2 d-flex gap-4 justify-content-between  border ${selectedPayment === 'paypal' ? 'selected' : ''}`}>
                                                            <span className=" d-flex  align-items-center">
                                                                <input

                                                                    type="radio"
                                                                    className="paypalradio btn bg-black"
                                                                    onChange={() => handlePaymentChange('paypal')}
                                                                    checked={selectedPayment === 'paypal'}
                                                                />

                                                                <h6 className="paypal-para  ml-2 mb-0 ">Paypal</h6>
                                                            </span>

                                                            <span className="stripeicn ">
                                                                <i class="fa-brands fa-paypal"></i>
                                                            </span>

                                                        </div>

                                                        {selectedPayment === 'paypal' &&


                                                            <PayPalCheckout
                                                                clientId='AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
                                                                amount={totalCartPrice}
                                                                currency='USD'
                                                                onSuccess={(data, order) => {
                                                                    paypalpaymentSend(data)
                                                                    setPaypaldata(data)


                                                                }}
                                                                onError={(error) => {
                                                                    console.log(error)
                                                                }}
                                                            />
                                                        }

                                                    </div>
                                                </div></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <ToastContainer />
                        </div>
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
