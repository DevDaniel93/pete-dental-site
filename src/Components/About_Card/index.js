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

                <h2 class="user_title">About <span>Pete</span></h2>
                <h2 class="user_bio_story">(Bio & Story)</h2>

                <p class="user_para mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <p class="user_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                
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