import React from "react";
import { Container } from "react-bootstrap";
import './style.css'
export function CustomInput(props) {
    return (
        <div className="form-group">
            <label for={props?.id} className={props?.labelClass}>{props.label}</label>
            <div className={props?.input_icon} inputclassName={props?.inputClass}>
                <span className={props?.classiconname}><i className={props?.classicon}></i></span>
                <input type={props?.type} value={props.value} className="form-control form_password_field" 
                
                disabled={props?.disabled}
                aria-describedby={props?.describedby} name={props?.name} required={props?.required} id={props.id} placeholder={props.placeholder}


                    onChange={props?.onChange} />


            </div>
        </div>
    )
}