import React from "react";

import {product_img} from './../../Assets/product-img-01.png'
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

export function Card() {
    return (

        <section class="product_listing_section">
        <Container>
            <div class="row py-5 align-items-center">

                <div class="col-sm-6 col-lg-5 mb-3 mx-auto">

                    <div class="product_img">
                        <img src={product_img} class="w-100" alt=""/>
                    </div>

                </div>

                <div class="col-sm-12 col-lg-7 align-self-center">

                    <div class="product_content">

                        <h2 class="product_heading">Lower 3D Model</h2>

                        <p class="product_para">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <p class="product_para">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                        </p>
                    </div>

                    <div class="product_btns">
                        <span class="product_price_btn">$59.34</span>
                        <button class="product_add_to_cart_btn">Add to cart</button>
                        {/* <!-- <span class="product_add_to_cart_btn"><a href="javascript:;">Add to cart</a></span> --> */}
                    </div>

                </div>
                </div>

        </Container>
    </section>
    )
}
