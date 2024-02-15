import React from "react";

import "./style.css";
import { Container } from "react-bootstrap";

export function Banner (props) {
    return(
        <section class="aboutus_banner_section">
        {/* <Container> */}
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="main_aboutus text-center">

                        <h1 class="banner_heading">{props.heading}</h1>
                        <p class="m-0">{props.descripction}</p>
 


                    </div>
                </div>
            </div>
        {/* </Container> */}
    </section>
    )
}