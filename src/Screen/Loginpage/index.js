import { CustonButton } from '../../Components/CustonButton'
import {useState} from 'react'
import { Card } from '../../Components/Product_Card/index'
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from '../../Components/Banner'
import "./style.css";
import { AuthLayout } from '../../Components/AuthLayout'
import { CustonInput } from '../../Components/CustonInput'
import { Faqs } from '../../Components/Faqs'
import {Login} from '../../Services/index'
export const Loginpage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await Login(formData); 
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

 
    return (
        <>
            <UserLayout>


                <section class="loginform_section pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-lg-5 mx-auto">

                                <AuthLayout heading="Pete Cardamone" text="WELCOME! SIGNIN TO CONTINUE" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" >
                                <form onSubmit={handleSubmit}> 
                                    <CustonInput
                                        input_icon="input_with_icon"
                                        classiconname="input_icon"

                                        classicon="fa-solid fa-at"
                                        value="" 
                                        label="Email" type="email" labelClass='login_form_email'
                                        aria_describedby="emailHelp"
                                        inputClass='form-control form_email_field' name="email" required="required" id="login_form_email" placeholder="Enter Your Email"
                                        onChange={(event) => {
                                            setFormData({ ...formData, email: event.target.value });
                                            console.log(event.target.value);
                                        }}
                                    />
                                    <CustonInput label="password" type="pasword" labelClass='password_label'
                                        classiconname="lock_icon"
                                        input_icon="password_with_icon"
                                        value={props.value} 
                                        classicon="fa-solid fa-lock"
                                        inputClass='form-control form_password_field' name="password" required="required" className="input_with_icon" id="login_form_password" placeholder="placeholder"
                                        aria-describedby=""
                                        onChange={(event) => {
                                            setFormData({ ...formData, password: event.target.value });
                                            console.log(event.target.value);
                                        }}
                                    />
                                    <CustonButton
                                        type="submit" classbtn="btn btn-success w-100 mt-3" btn_text="Log In" />

</form>
                                </AuthLayout>
                            </div>
                        </div>
                    </div>
                </section>





            </UserLayout>
        </>
    );
};
