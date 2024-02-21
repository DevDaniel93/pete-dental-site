import React, { useState } from "react";
import './style.css'
import { UserLayout } from '../../Components/Layout/UserLayout'
import { Banner } from '../../Components/Banner'
import { Container } from "react-bootstrap";
import { CustomInput } from "../../Components/CustomInput";
export function Contect_us() {
  const [formData, setFormData] = useState({

  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const LogoutData = localStorage.getItem('login');
  const handleSubmit = (event) => {
    event.preventDefault();


    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }


    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}/public/api/inquiry-send`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LogoutData}`
      },
    }
    )

      .then((response) => {

        return response.json();


        console.log("contact", response)

      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");

      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");

      });
  };
  const filehandleChange = (event) => {
    const file = event.target.files[0];
    // console.log(file.name)
    if (file) {
      const fileName = file;
      setFormData((prevData) => ({
        ...prevData,
        image: fileName,
      }));
    }
    console.log(formData)
  };
  return (
    <>

      <UserLayout >
        <Banner
          heading="Contact us "
          descripction="Our clients are our priority, we offer quality dental services with a team of specialists.

                    More details about our services below." />
        <Container>
          <section className="contact mb-4">

            <section className="cart_item_section pb-5 mt-5">
              <div className="container">



                <div className="row py-4">
                  <div className="col-md-8">
                    <div className="d-flex align-items-center justify-content-between flex-wrap"></div>
                  </div>

                  <div className="col-md-4">
                    <div className="cart_details_info">

                    </div>
                  </div>
                </div>
              </div>
              <div className="container">

                <div className="row">

                  <div className="col-md-8 order-md-1">
                    {/* <h4 className="mb-3">Billing address</h4> */}
                    <form
                      onSubmit={handleSubmit}
                      className="needs-validation"
                      novalidate=""
                    >
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label for="firstName">  Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter Name"
                            labelclassName="mainLabel"
                            inputclassName="mainInput"
                            name="name"
                            value={formData.name}

                            onChange={handleChange}
                            className="form-control"
                            id="firstName"
                          />

                          <div className="invalid-feedback">
                            {" "}
                            Valid first name is required.{" "}
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="email">
                            Email
                          </label>


                          <input
                            type="email"
                            required
                            placeholder="Enter Email"
                            labelclassName="mainLabel"
                            inputclassName="mainInput"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            id="email"

                          />
                          <div className="invalid-feedback">
                            {" "}
                            Valid last name is required.{" "}
                          </div>
                        </div>



                        <div className="col-md-6 mb-3">
                          <label for="email">
                            Upload Image
                          </label>



                          <input
className="Upload-IMG"
                            required
                            id='file'
                            type='file'
                            labelClass='mainLabel'
                            inputClass=''
                            name="image"
                            // value={formData.image}
                            onChange={filehandleChange}

                          />
                          <div className="invalid-feedback">
                            {" "}
                            Valid last name is required.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label for="email">
                          Subject
                        </label>


                        <input
                          type="email"
                          required
                          placeholder="Subject"
                          labelclassName="mainLabel"
                          inputclassName="mainInput"
                          name="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          id="subject"

                        />

                      </div>


                      <div className="row">
                        <div className="md-form  mb-4">
                          <label for="message">Your message</label>
                          <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>

                        </div>

                      </div>

                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"

                      >
                        Submit
                      </button>
                    </form>
                  </div>
              
              
              
              
              
                  <div className="col-md-4 order-2">
                              <div className="quicklinks_main">
                                  <h6 className="footer_subtitle">CONTACT INFO</h6>

                                  <div>
                                      <ul className="quick_links_list">
                                          <li className="mb-2">
                                              <a href="javascript:;" className="contact_list">
                                                  <span><i className="fa-solid fa-phone-volume contact_icon"></i></span>
                                                  <span>+1 (123) 456-7890</span>
                                              </a>
                                          </li>

                                          <li className="mb-2">
                                              <a href="javascript:;" className="contact_list">
                                                  <span><i className="fa-solid fa-envelope-open-text contact_icon"></i></span>
                                                  <span>email@example.com</span>
                                              </a>
                                          </li>

                                          <li>
                                              <a href="javascript:;" className="contact_list">
                                                  <span><i className="fa-solid fa-location-dot contact_icon"></i></span>
                                                  <span>Lorem 123, Ipsum 456, Dolor 78, Sit AMET</span>
                                              </a>
                                          </li>
                                          
                                      </ul>
                                  </div>

                              </div>
                              
                          </div>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
                </div>
                <footer className="my-5 pt-5 text-muted text-center text-small">

                </footer>
              </div>

            </section>
          </section>
        </Container>
      </UserLayout>
    </>
  )
}