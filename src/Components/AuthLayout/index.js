import React from "react";
import { CustomInput } from '../CustomInput'
import "./style.css";
import facebook_icon from '../../Assets/facebook_icon.png'
import google_icon from '../../Assets/google_icon.png'
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
export function AuthLayout(props) {
  return (

    <div className="main_login_form">

      <h2 className="loginform_mainHeading">{props.heading}</h2>

      <h6 className="text-center">{props.text}</h6>

      <p className="form_para">{props.para} </p>

      {/* <form action=""> */}
        {props?.children}


        {/* <button type="submit" className="btn btn-success w-100 mt-3">"{props?.accountstaus}"</button> */}

        <div className="text-right mt-2">
          <div className="text-center mt-2">
            <span className="register_btn">{props?.accountstaus} <Link to={"/loginpage"}>{props?.login}</Link></span>
          </div>
 
          <Link to={"/forgot_password"} className="forgot_password"> {props?.accountforget}</Link>
        </div>

        <div className="for_other_logins">
          <div className="line"></div>
          <p className="or_between m-0">OR</p>
          <div className="line"></div>
        </div>

        <div className="with_other_account my-3">
          <div className="account_logo">

            <img src={google_icon} alt="" />
          </div>
          <div>
            <a href="javascript:;" className="account_link">
              Login With Google
            </a>
          </div>
        </div>

        <div className="with_other_account my-2 py-2">
          <div className="facebook_logo ml-2">

            <img src={facebook_icon} alt="" />
          </div>
          <div>
            <a href="javascript:;" className="account_link">
              Login With Facebook
            </a>
          </div>
        </div>

        <div className="text-center mt-2">
          <span className="register_btn">{props?.register} <Link to={"/signuppage"}>{props?.account}</Link></span>
        </div>

      {/* </form> */}
    </div>
  )
}