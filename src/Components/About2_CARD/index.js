import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

export function About_CARD2 (props){
    return(
        <section class="user_bio_section user_section_bg">
        <Container>
            <div class="row position-relative justify-content-end">
                <div class="col-sm-12 col-lg-6">

                    <h2 class="user_title">{props.title} <span>{props.title2}</span></h2>
                    <h2 class="user_bio_story">{props.Bios}</h2>

                    <p class="user_para mt-3">{props.descripction}</p>
                    <p class="user_para">{props.descripction2} </p>
                    
                </div>

                <div class="col-sm-12 col-lg-5">

                    <div class="user_img text-right">
                        <img src={props.image} alt=""/>
                    </div>

                </div>

                <div class="third_square">
                </div>

                <div class="forth_square">
                </div>

                
            </div>
        </Container>
    </section>
    )
}