import React, { useState } from "react";
// import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementvariationQuantity, removeFromCart, updateCartItem } from '../../store/action';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { UserLayout } from '../../Components/Layout/UserLayout'
import { Checkout } from '../../Services/index'
export function ProductCheckout(product) {
  const [productQuantities, setProductQuantities] = useState({});
  const [qty, setQty] = useState(1)
  const baseurl = `${process.env.REACT_APP_API_URL}/public/`;
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({});
  const handleChangeQuantity = (productid, newQuantity) => {
    console.log("newQuantity", newQuantity)
    dispatch(incrementvariationQuantity(productid, newQuantity));

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productid]: newQuantity,
    }));
  };
  const dispatch = useDispatch()




  // const handleSubmit = async (event, formData) => {
  //   event.preventDefault();

  //   try {
  //     const data = await Checkout(formData);
  //     return data;
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };





  const handleSubmit = async () => {
    try {
        const response = await Checkout(formData);

        if (response && response.status === true) {
            // Handle the successful response here

            console.log('Success ', response.message);

            // toast.success('Order placed successfully!', {
            //     position: toast.POSITION.TOP_RIGHT,
            // });

 
            // setApplyCoupon("");

        } else {
            console.error('Error in placing order:', response.statusText);

          
        }
    } catch (error) {
        console.error('Error in placing order:', error);

      
    }
};


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };
  return (
    <>
      <UserLayout>
        <section className="h-100 mt-10"  >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                    Shopping Cart
                  </MDBTypography>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>
                {cartItems?.map((data) => (


                  <MDBCard className="rounded-3 mb-4">
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage className="rounded-3" fluid
                            src={baseurl + data?.src}
                            alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <p className="lead fw-normal mb-2">{data?.name}</p>
                          <p>
                            <span className="text-muted">{data?.short_description}</span>
                            {/* <span className="text-muted">Color: </span>Grey */}
                          </p>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="2"
                          className="d-flex align-items-center justify-content-around">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
                          {/* {data.quantity} */}
                          <MDBInput value={productQuantities[data.id] || data?.featured} onChange={(e) => handleChangeQuantity(data.id, parseInt(e.target.value, 10))} min={0} default="8" type="number" size="sm" />
                          {/* {qty} */}
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0">
                            ${data?.price}
                          </MDBTypography>
                        </MDBCol>
                        {/* <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </a>
                      </MDBCol> */}
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))}





                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn className="ms-3" color="warning" block size="lg" onClick={() => dispatch(addToCart(product))} >
                      Add to Card
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

























        <div className="container">
          {/* <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h2>Checkout form</h2>
        <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div> */}
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3 sticky-top">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              {/* <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form> */}
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form onSubmit={handleSubmit} className="needs-validation" novalidate="">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text"
                      required


                      placeholder='Enter Name'
                      labelClass='mainLabel'
                      inputClass='mainInput'
                      name="firsename"
                      value={formData.firsename}
                      onChange={handleChange}
                      className="form-control" id="firstName" />



                    <div className="invalid-feedback"> Valid first name is required. </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input required


                      placeholder='Enter lastName'
                      labelClass='mainLabel'
                      inputClass='mainInput'
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange} className="form-control" id="lastName" />
                    <div className="invalid-feedback"> Valid last name is required. </div>
                  </div>
                </div>
                {/* <div className="mb-3">
                    <label for="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                         
                        <div className="invalid-feedback" > Your username is required. </div>
                    </div>
                </div> */}
                <div className="mb-3">
                  <label for="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email"

                    required


                    placeholder='Enter Email'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}


                    className="form-control" id="email" />
                  <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input

                    required


                    placeholder='Enter Adress'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    name="address_1"
                    value={formData.address_1}
                    onChange={handleChange}
                    type="text" className="form-control" id="address" />
                  <div className="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div className="mb-3">
                  <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input
                    required



                    labelClass='mainLabel'
                    inputClass='mainInput'
                    name="address_2"
                    value={formData.address_2}
                    onChange={handleChange}

                    type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    {/* <select className="custom-select d-block w-100" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select> */}

                    <input
                      required


                      labelClass='mainLabel'
                      inputClass='mainInput'
                      name="country"
                      value={formData.country}
                      onChange={handleChange}

                      type="text" className="form-control" id="address2" placeholder="country" />

                    <div className="invalid-feedback"> Please select a valid country. </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>


                    <input
                      required



                      labelClass='mainLabel'
                      inputClass='mainInput'
                      name="state"
                      value={formData.state}
                      onChange={handleChange}

                      type="text" className="form-control" id="address2" placeholder="state" />

                    <div className="invalid-feedback"> Please provide a valid state. </div>
                  </div>

                  <div className="col-md-5 mb-3">
                    <label for="state">Town</label>


                    <input
                      required



                      labelClass='mainLabel'
                      inputClass='mainInput'
                      name="town"
                      value={formData.town}
                      onChange={handleChange}

                      type="text" className="form-control" id="address2" placeholder="town" />

                    <div className="invalid-feedback"> Please provide a valid state. </div>
                  </div>



                </div>


                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
              </form>
            </div>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">© 2017-2019 Company Name</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        </div>
      </UserLayout>
    </>
  );
}