import React from "react";
import { Container } from "react-bootstrap";
import './style.css'
export function CustonInput(props) {
    return (
        <section className=" ">
            <Container>
                {/* <div className="form-group"> */}

{/* input_with_icon input_icon*/}
                    <div className="form-group">
                        <label for={props?.id} className={props?.labelClass}>{props.label}</label>
                        <div className={props?.input_icon}>
                            <span className={props?.classiconname}><i className={props?.classicon}></i></span>
                            <input type={props?.type} value={props.value} className="form-control form_password_field" aria-describedby={props?.describedby} name={props?.name} required={props?.required} id={props.id} placeholder={props.placeholder} 
                            
                            
                            onChange={props?.onChange} />


                        </div>
                    </div>
                {/* </div> */}
            </Container>
        </section>
    )
}