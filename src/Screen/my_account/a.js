

{/* <section className="vh-100 gradient-custom-2">
<div className="  ">
    <div className="row d-flex  align-items-center h-100">
        {/* col-md-10 col-lg-8 col-xl-6 */}
        <div className="">
            {/* style="border-radius: 16px;" */}
            {all_product?.data?.map((data) => (<div className="card card-stepper" >
                <div className="c p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">{data?.order_id}</span></p>
                            <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">{data?.created_at}</span> </p>
                        </div> */}
                        {/* <div>
                            <h6 className="mb-0"> <a href="#">View Details</a> </h6>
                        </div> */}
                    {/* </div>
                </div>
                {data?.order_items.map((item) => (

                    <div className="card-body p-4">
                        <div className="d-flex flex-row mb-4 pb-2">
                            <div className="flex-fill">
                                <h5 className="bold">{item?.product_name}</h5>
                                <p className="text-muted"> Qt: {item?.qty} item</p>
                                <h4 className="mb-3"> $ {item?.price} <span className="small text-muted">   </span></h4>
                                <p className="text-muted">Tracking Status on: <span className="text-body">{data?.status}</span></p>
                            </div>
                            <div>
                                <img className="align-self-center img-fluid"
                                    src={base_url + item?.image} width="250" />
                            </div>
                        </div>

                    </div>))}

            </div>))}

        </div>
    </div>
</div>
</section> */}

















<Table striped bordered hover>
                                                           
                                                           <thead>
                                                             <tr>
                                                                
                                                               <th>Product Name</th>
                                                               <th>Order ID</th>
                                                               <th>Place On</th>
                                                               <th>Quantity </th>
                                                               <th>Price </th>
                                                               <th>Image </th>
                                                               <th>Status </th>
                                                             </tr>
                                                           </thead>
                                                           {all_product?.data?.map((data) => (
                                                           <tbody>
                                                             {data?.order_items.map((item) => (
                                                                     <tr>
                                                            
                                                                     <td>{item?.name}</td>
                                                                     <td>{data?.order_id}</td>
                                                                     <td>@mdo</td>
                                                                   </tr>
                                                                 ))
                                                             }
                                                             <tr>
                                                            
                                                               <td>{data?.name}</td>
                                                               <td>{data?.order_id}</td>
                                                               <td>@mdo</td>
                                                             </tr>
                                                             <tr>
                                                            
                                                               <td>Jacob</td>
                                                               <td>Thornton</td>
                                                               <td>@fat</td>
                                                             </tr>
                                                             <tr>
                                                             
                                                               <td colSpan={2}>Larry the Bird</td>
                                                               <td>@twitter</td>
                                                             </tr>
                                                           </tbody>))}
                                                         </Table>