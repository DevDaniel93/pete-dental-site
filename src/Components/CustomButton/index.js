import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Container } from "react-bootstrap";
import './style.css'
export function CustomButton(props) {
  return (

    <>
      {/* <button type={props?.type} className={`customButton ${props?.variant} ${props?.className}`} onClick={props?.onClick}>{props?.text} <FontAwesomeIcon icon={props.icon} /></button> */}

      <button type={props?.type} className={props?.classbtn}>{props?.btn_text}</button>

    </>
  )
}