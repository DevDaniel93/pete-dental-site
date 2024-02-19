import React from "react";

import "./style.css";
import { Container } from "react-bootstrap";

export function Banner (props) {
    return(
        <section className="aboutus_banner_section">
        <div className="container">
        <div className="row">
                <div className="col-md-12">
                    <div className="main_aboutus text-center">

                        <h1 className="banner_heading">{props.heading}</h1>
                        <p className="m-0">{props.descripction}</p>
 


                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}