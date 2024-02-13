import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

export function About_CARD (props){
    return(
        <section class="user_bio_section user_section_bg">
        <Container>
            <div class="row position-relative justify-content-end">
                <div class="col-sm-12 col-lg-6">

                    <h2 class="user_title">About <span>Trish</span></h2>
                    <h2 class="user_bio_story">(Bio & Story)</h2>

                    <p class="user_para mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    <p class="user_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    
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