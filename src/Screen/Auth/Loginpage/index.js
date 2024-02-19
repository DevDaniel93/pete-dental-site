import { CustomButton } from '../../../Components/CustomButton'
import { useState, useEffect } from 'react'
// import { Card } from '../../Components/ProductCard/index'
// import { Container } from "react-bootstrap";
import { UserLayout } from "../../../Components/Layout/UserLayout";
import { Banner } from '../../../Components/Banner'
import "./style.css";
import { AuthLayout } from '../../../Components/AuthLayout'
import { CustonInput } from '../../../Components/CustonInput'
// import { Faqs } from '../../../Components/Faqs'
// import { Login } from '../../Services/index'
import { useNavigate } from 'react-router-dom';
export const Loginpage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataMethod = new FormData();
        formDataMethod.append('email', formData.email);
        formDataMethod.append('password', formData.password);
        console.log(formData)
        document.querySelector('.loaderBox').classList.remove("d-none");

        const apiUrl = 'https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user-login';


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formDataMethod
            });

            if (response.ok) {

                const responseData = await response.json();
                localStorage.setItem('login', responseData.data.token);
                console.log('Login Response:', responseData);
                document.querySelector('.loaderBox').classList.add("d-none");
                navigate('/')

            } else {
                document.querySelector('.loaderBox').classList.add("d-none");
                alert('Invalid Credentials')

                console.error('Login failed');
            }
        } catch (error) {
            document.querySelector('.loaderBox').classList.add("d-none");
            console.error('Error:', error);
        }


    };

    console.log("formData", formData)




    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    return (
        <>
            <UserLayout>


                <section className="loginform_section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 mx-auto">

                                <AuthLayout heading="Pete Cardamone" text="WELCOME! SIGNIN TO CONTINUE" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                                    register="Don't have an Account?" accountforget="Forgot Password?" account="Rigester">
                                    <form onSubmit={handleSubmit}>
                                        <CustonInput
                                            input_icon="input_with_icon"
                                            classiconname="input_icon"

                                            classicon="fa-solid fa-at"
                                            value={formData.email}
                                            label="Email" type="email" labelclassName='login_form_email'
                                            // aria_describedby="emailHelp"
                                            // inputclassName='form-control form_email_field' 



                                            name="email" required="required"
                                            id="login_form_email"
                                            placeholder="Enter Your Email"


                                            onChange={handleChange}
                                        />




                                        <CustonInput label="password"



                                            type="password" labelclassName='password_label'
                                            classiconname="lock_icon"
                                            input_icon="password_with_icon"
                                            value={formData.password}
                                            classicon="fa-solid fa-lock"
                                            // inputclassName='form-control form_password_field'
                                            name="password"
                                            required="required"

                                            className="input_with_icon"
                                            id="login_form_password"
                                            placeholder="placeholder"
                                            // aria-describedby=""

                                            onChange={handleChange}
                                        />
                                        <div>
                                            <CustomButton
                                                type='sunmit'  classbtn="btn btn-success w-100 mt-3" btn_text="Log In" />
                                        </div>
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
