import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
export function About_Card(props){
    return(
        
    <section class="user_bio_section">
    <Container>
        <div class="row position-relative">

            <div class="col-sm-12 col-lg-5">

                <div class="user_img mb-3">
                    <img src={props.image} class="" alt=""/>
                </div>

            </div>

            <div class="col-sm-12 col-lg-6">

                <h2 class="user_title">{props?.heading} <span>{props?.heading2}</span></h2>
                <h2 class="user_bio_story">{props?.Bio}</h2>

                <p class="user_para mt-3">{props?.descripction}</p>
                <p class="user_para">{props?.descripction2}</p>
                
            </div>

            <div class="first_square">
            </div>

            <div class="second_square">
            </div>

        </div>
    </Container>
</section>
    )
}