import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

export function About_CARD2 (props){
    return(
        <section className="user_bio_section user_section_bg">
        <Container>
            <div className="row position-relative justify-content-end">
                <div className="col-sm-12 col-lg-6">

                    <h2 className="user_title">{props.title} <span>{props.title2}</span></h2>
                    <h2 className="user_bio_story">{props.Bios}</h2>

                    <p className="user_para mt-3">{props.descripction}</p>
                    <p className="user_para">{props.descripction2} </p>
                    
                </div>

                <div className="col-sm-12 col-lg-5">

                    <div className="user_img text-right">
                        <img src={props.image} alt=""/>
                    </div>

                </div>

                <div className="third_square">
                </div>

                <div className="forth_square">
                </div>

                
            </div>
        </Container>
    </section>
    )
}