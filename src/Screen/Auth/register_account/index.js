import { CustomButton } from '../../../Components/CustomButton'
import { useState, useEffect } from 'react'
// import { Card } from '../../Components/ProductCard/index'
// import { Container } from "react-bootstrap";
import { UserLayout } from "../../../Components/Layout/UserLayout";
// import { Banner } from '../../Components/Banner'
import "./style.css";
import { AuthLayout } from '../../../Components/AuthLayout'
import { CustomInput } from '../../../Components/CustomInput'
// import { Faqs } from '../../../Components/Faqs'
// import { Login } from '../../Services/index'
import { useNavigate } from 'react-router-dom';
export const Sign_up = () => {

    const [formData, setFormData] = useState({
        // email: '',
        // password: '',
        // confirm_password: '',

    });
    console.log("formData", formData)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();



        

    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
 
        console.log(formData)
        document.querySelector('.loaderBox').classList.remove("d-none");

        const apiUrl = 'https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user-register';


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formDataMethod
            });

            if (response.ok) {

                const responseData = await response.json();
                console.log("responseData", responseData)
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

    console.log("handleSubmit , ", handleSubmit)


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };


    const passwordsMatch = formData.password === formData.confirm_password;

    return (
        <>
            <UserLayout>


                <section className="loginform_section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-8 mx-auto">

                                <AuthLayout heading="Pete Cardamone" text="WELCOME! Register your Account" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                                    accountstaus="Already have an Account? Login " loginlink="/Login" login="login"


                                >


                                    <form onSubmit={handleSubmit}>

                                        <div className='row'>
                                            <div className='col-md-6 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.first_name}
                                                    label="First Name" type="text" labelclassName='login_form_name'

                                                    name="first_name" required="required"
                                                    id="login_form_First Name"
                                                    placeholder="First Name"


                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='col-md-6  mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.last_name}
                                                    label="Last Name" type="text" labelclassName='login_form_name'

                                                    name="last_name" required="required"
                                                    id="login_form_First last Name"
                                                    placeholder="Last Name"


                                                    onChange={handleChange}
                                                />


                                            </div>
                                            <div className='col-md-4 mb-4'>

                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.legal_office_name}
                                                    label="Legal Office Name" type="text" labelclassName='login_form_name'

                                                    name="legal_office_name" required="required"
                                                    id="login_form_First Legal Office Name"
                                                    placeholder="Legal Office Name"


                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='col-md-4 mb-4'>

                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.bussiness_address}
                                                    label="Business Name" type="text" labelclassName='login_form_name'

                                                    name="bussiness_address" required="required"
                                                    id="login_form_First Business Name"
                                                    placeholder="Business Name"


                                                    onChange={handleChange}
                                                />


                                            </div>

                                            <div className='col-md-4 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.city}
                                                    label="City" type="text" labelclassName='login_form_name'

                                                    name="city" required="required"
                                                    id="login_form_First Business Name"
                                                    placeholder="City"


                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='col-md-4 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.state}
                                                    label="State" type="text" labelclassName='login_form_name'

                                                    name="state" required="required"
                                                    id="login_form_First Business Name"
                                                    placeholder="State"


                                                    onChange={handleChange}
                                                />

                                            </div>









                                            <div className='col-md-4 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.zip_code}
                                                    label="Zip Code" type="text" labelclassName='login_form_name'

                                                    name="zip_code" required="required"
                                                    id="login_form_First Business Name"
                                                    placeholder="State"


                                                    onChange={handleChange}
                                                />

                                            </div>





                                            <div className='col-md-4 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"


                                                    value={formData.phone_number}
                                                    label="Phone Number" type="number" labelclassName='login_form_name'

                                                    name="phone_number" required="required"
                                                    id="login_form_First Business Name"
                                                    placeholder="Phone Number"


                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-md-4 mb-4'>

                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"
                                                    classicon="fa-solid fa-at"

                                                    value={formData.email}
                                                    label="Email" type="email" labelclassName='login_form_email'

                                                    name="email" required="required"
                                                    id="login_form_email"
                                                    placeholder="Enter Your Email"


                                                    onChange={handleChange}
                                                />


                                            </div>
                                            <div className='col-md-4 mb-4'>
                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"

                                                    classicon="fa-solid fa-at"
                                                    value={formData.dental_board_of_california_license_number}
                                                    label="Dental Board of California License Number" type="text" labelclassName='login_form_email'

                                                    name="dental_board_of_california_license_number" required="required"
                                                    id="login_form_email"
                                                    placeholder="License Number"


                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='col-md-4 mb-4'>





                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"

                                                    classicon="fa-solid fa-at"
                                                    value={formData.tin}
                                                    label="Tax Identification Number (TIN)" type="text" labelclassName='login_form_email'

                                                    name="tin" required="required"
                                                    id="login_form_email"
                                                    placeholder="Tax Identification Number  "


                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className='col-md-4 mb-4'>

                                                <CustomInput
                                                    input_icon="input_with_icon"
                                                    classiconname="input_icon"
                                                    classicon="fa-solid fa-at"
                                                    value={formData.user_name}
                                                    label="User Name" type="text" labelclassName='login_form_email'

                                                    name="user_name" required="required"
                                                    id="login_form_email"
                                                    placeholder="Tax Identification Number  "


                                                    onChange={handleChange}
                                                />

                                            </div>


                                            <div className='col-md-4 mb-4'>

                                                <CustomInput label="password"



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


                                            </div>


                                            <div className='col-md-4 mb-4'>

                                                <CustomInput label="Confirm Password"



                                                    type="password" labelclassName='password_label'
                                                    classiconname="lock_icon"
                                                    input_icon="password_with_icon"
                                                    value={formData.confirm_password}
                                                    classicon="fa-solid fa-lock"
                                                    // inputclassName='form-control form_password_field'
                                                    name="confirm_password"
                                                    required="required"

                                                    className="input_with_icon"
                                                    id="login_form_password"
                                                    placeholder="Confirm Password"
                                                    // aria-describedby=""

                                                    onChange={handleChange}
                                                />
                                            </div>


                                        </div>


























                                        {passwordsMatch ? null : <p style={{ color: 'red' }}>Passwords do not match</p>}

                                        <div>

                                            <CustomButton
                                                type='submit' classbtn="btn btn-success w-100 mt-3" btn_text="Sign Up" />

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
