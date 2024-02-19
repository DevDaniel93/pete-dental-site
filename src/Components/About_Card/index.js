import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
export function About_Card(props){
    return(
        
    <section className="user_bio_section">
    <Container>
        <div className="row position-relative">

            <div className="col-sm-12 col-lg-5">

                <div className="user_img mb-3">
                    <img src={props.image} className="" alt=""/>
                </div>

            </div>

            <div className="col-sm-12 col-lg-6">

                <h2 className="user_title">{props?.heading} <span>{props?.heading2}</span></h2>
                <h2 className="user_bio_story">{props?.Bio}</h2>

                <p className="user_para mt-3">{props?.descripction}</p>
                <p className="user_para">{props?.descripction2}</p>
                
            </div>

            <div className="first_square">
            </div>

            <div className="second_square">
            </div>

        </div>
    </Container>
</section>
    )
}