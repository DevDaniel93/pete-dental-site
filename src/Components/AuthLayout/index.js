import React from "react";
import {CustonInput} from '../CustonInput'
import "./style.css";
import facebook_icon  from '../../Assets/facebook_icon.png'
import google_icon  from '../../Assets/google_icon.png'
import { Container } from "react-bootstrap";

export function AuthLayout (props) {
    return(
       
        <div class="main_login_form">

        <h2 class="loginform_mainHeading">{props.heading}</h2>

        <h6 class="text-center">{props.text}</h6>

        <p class="form_para">{props.para} </p>

        <form action="">
        {props?.children}
        

              {/* <button type="submit" class="btn btn-success w-100 mt-3">Log In</button> */}

              <div class="text-right mt-2">
                <a href="javascript:;" class="forgot_password">Forgot Password?</a>
              </div>

              <div class="for_other_logins">
                <div class="line"></div>
                <p class="or_between m-0">OR</p>
                <div class="line"></div>
              </div>

              <div class="with_other_account my-3">
                <div class="account_logo">
 
                    <img src={google_icon} alt=""/>
                </div>
                <div>
                    <a href="javascript:;" class="account_link">
                        Login With Google
                    </a>
                </div>
              </div>

              <div class="with_other_account my-2 py-2">
                <div class="facebook_logo ml-2">
 
                    <img src={facebook_icon} alt=""/>
                </div>
                <div>
                    <a href="javascript:;" class="account_link">
                        Login With Facebook
                    </a>
                </div>
              </div>

              <div class="text-center mt-2">
                <span class="register_btn">Don't have an Account? <a href="./signuppage.php">Register</a></span>
              </div>

        </form>
   </div>
    )
}