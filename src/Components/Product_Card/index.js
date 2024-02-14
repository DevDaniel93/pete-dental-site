import React from "react";

import { product_img } from './../../Assets/product-img-01.png'
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

export function Card(props) {
    return (

        <section class="product_listing_section">
            <Container>
                <div class="row py-5 align-items-center">

                    <div class="col-sm-6 col-lg-5 mb-3 mx-auto">

                        <div class="product_img">
                            <img src={props.img} class="w-100" alt="" />
                        </div>

                    </div>

                    <div class="col-sm-12 col-lg-7 align-self-center">

                        <div class="product_content">

                            <h2 class="product_heading">{props.heading}</h2>

                            <p class="product_para">
                                {props.descripction}
                            </p>

                            <p class="product_para">
                            {props.descripction2}
                            </p>
                        </div>

                        <div class="product_btns">
                            <span class="product_price_btn">${props.price}</span>
                            <button class="product_add_to_cart_btn">{props?.text}</button>
                            {/* <!-- <span class="product_add_to_cart_btn"><a href="javascript:;">Add to cart</a></span> --> */}
                        </div>

                    </div>
                </div>

            </Container>
        </section>
    )
}
