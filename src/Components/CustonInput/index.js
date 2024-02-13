import React  from "react";
import { Container } from "react-bootstrap";
import './style.css'
export function CustonButton(props){
    return(
        <section class="loginform_section pb-5">
        <Container>
        <div class="form-group">
        {props?.label && <label  htmlFor={props?.id} className={props?.labelClass}>{props?.label}<span>{props?.required ? '*' : ''}</span></label>}
 
        <div class="password_with_icon">
            <span class="lock_icon"><i class="fa-solid fa-lock"></i></span>
            <input type={props?.type}  value={props.value} name={props?.name}  required={props?.required} className={props?.inputClass} id={props.id} placeholder={props.placeholder}/>
        </div>
      </div>
      </Container>
      </section>
    )
}