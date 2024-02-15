import React from "react";

import { product_img } from './../../Assets/product-img-01.png'
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Cards (props) {
    return (

        <section className="product_listing_section">
            <Container>
                <div className="row py-5 align-items-center">

                    <div className="col-sm-6 col-lg-5 mb-3 mx-auto">

                        <div className="product_img">
                            <img src={props.img} className="w-100" alt="" />
                        </div>

                    </div>

                    <div className="col-sm-12 col-lg-7 align-self-center">

                        <div className="product_content">

                            <h2 className="product_heading">{props.heading}</h2>
                            <span className="product_price_btn">${props.price}</span>   
                            <p className="product_para">
                                {props.descripction}
                            </p>

                            <p className="product_para">
                                {props.descripction2}
                            </p>
                        </div>

                        <div className="product_btns">

                            {/* <CustonButton className="product_add_to_cart_btn"
                                props={props.text}
                            /> */}
                           
                            <button  className="product_add_to_cart_btn"   onClick={props?.onClick}>{props?.text}</button>
                            <Link  className="product_add_to_cart_btn"  to={props?.to}  >{props?.viewtext}</Link>
                        </div>

                    </div>
                </div>

            </Container>
        </section>
        // <div>Hello</div>
    )
}
