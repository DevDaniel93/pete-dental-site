  // {/* <section className="h-100 mt-10"  >
  //         <MDBContainer className="py-5 h-100">
  //           <MDBRow className="justify-content-center align-items-center h-100">
  //             <MDBCol md="10">
  //               <div className="d-flex justify-content-between align-items-center mb-4">
  //                 <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
  //                   Shopping Cart
  //                 </MDBTypography>
  //                 <div>
  //                   <p className="mb-0">
  //                     <span className="text-muted">Sort by:</span>
  //                     <a href="#!" className="text-body">
  //                       price <i className="fas fa-angle-down mt-1"></i>
  //                     </a>
  //                   </p>
  //                 </div>
  //               </div>
  //               {cartItems?.map((data) => (


  //                 <MDBCard className="rounded-3 mb-4">
  //                   <MDBCardBody className="p-4">
  //                     <MDBRow className="justify-content-between align-items-center">
  //                       <MDBCol md="2" lg="2" xl="2">
  //                         <MDBCardImage className="rounded-3" fluid
  //                           src={baseurl + data?.src}
  //                           alt="Cotton T-shirt" />
  //                       </MDBCol>
  //                       <MDBCol md="3" lg="3" xl="3">
  //                         <p className="lead fw-normal mb-2">{data?.name}</p>
  //                         <p>
  //                           <span className="text-muted">{data?.short_description}</span>
  //                           {/* <span className="text-muted">Color: </span>Grey */}
  //                           </p>
  //                           </MDBCol>
  //                           <MDBCol md="3" lg="3" xl="2"
  //                             className="d-flex align-items-center justify-content-around">
  //                             <MDBBtn color="link" className="px-2">
  //                               <MDBIcon fas icon="minus" />
  //                             </MDBBtn>
  //                             {/* {data.quantity} */}
  //                             <MDBInput value={productQuantities[data.id] || data?.featured} onChange={(e) => handleChangeQuantity(data.id, parseInt(e.target.value, 10))} min={0} default="8" type="number" size="sm" />
  //                             {/* {qty} */}
  //                             <MDBBtn color="link" className="px-2">
  //                               <MDBIcon fas icon="plus" />
  //                             </MDBBtn>
  //                           </MDBCol>
  //                           <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
  //                             <MDBTypography tag="h5" className="mb-0">
  //                               ${data?.price}
  //                             </MDBTypography>
  //                           </MDBCol>
  //                           {/* <MDBCol md="1" lg="1" xl="1" className="text-end">
  //                           <a href="#!" className="text-danger">
  //                             <MDBIcon fas icon="trash text-danger" size="lg" />
  //                           </a>
  //                         </MDBCol> */}
  //                         </MDBRow>
  //                       </MDBCardBody>
  //                     </MDBCard>
  //                   ))}
    
    
    
    
    
  //                   <MDBCard>
  //                     <MDBCardBody>
  //                       <MDBBtn className="ms-3" color="warning" block size="lg" onClick={() => dispatch(addToCart(product))} >
  //                         Add to Card
  //                       </MDBBtn>
  //                     </MDBCardBody>
  //                   </MDBCard>
  //                 </MDBCol>
  //               </MDBRow>
  //             </MDBContainer>
  //           </section> */}


  <form>
  <div className="cart_input">




    <CustomInput
      label="Patient Name/id"
      type="text"
      disabled
      placeholder="Patient Name"
      required
      name="name"
      labelclassName='mainLabel'
      input_icon='mainInput'
    />
  </div>




  <div className="col-md-6 mb-3">

    <CustomInput
      label=" Upload File"
      type="file"
      disabled

      required
      name="name"
      labelclassName='mainLabel'
      input_icon='mainInput'
    />
    <div className="invalid-feedback">
      {" "}
      Valid last name is required.{" "}
    </div>
  </div>
  
</form>