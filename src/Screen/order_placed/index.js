import React from "react";
import './style.css'
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from "../../Components/Banner";
import { Order_place } from '../../Services/index'
import { useState, useEffect } from 'react';
export function Order_placed() {




    const baseurl = `${process.env.REACT_APP_API_URL}/public/`;

    const [all_product, setAll_product] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Order_place();
                setAll_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log("opder_placed", all_product)
    return (
        // <>     

        <UserLayout>

            <Banner
                heading="Order Placed"
                descripction="Our clients are our priority, we offer quality dental services with a team of specialists.More details about our services below."
            />
            <div>
                <section className="order_confirmed_section mt-5 mb-5 pt-5">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto text-center">
                                <div>
                                    <h2 className="order_heading">Your Order has been placed.</h2>

                                    <div className="mt-3 mb-3">
                                        <span><i className="order_check_mark fa-solid fa-check"></i></span>
                                    </div>

                                    <h4 className="purchase_message">Thank you for your purchase!</h4>

                                    {all_product?.order_items?.map((data) => (
                                        <div className="order_details">

                                            <span>{data?.product_name}</span>

                                            <span>${data?.product_total}</span>
                                        </div>
                                    ))}

                                    <div className="sub_details ml-auto">
                                        <span>Subtotal</span>
                                        <span>#100</span>
                                    </div>

                                    <div className="sub_details ml-auto">
                                        <span>Total</span>
                                        <span>#100</span>
                                    </div>

                                    {/* <div className="mt-4">
                    <a href="./index.php" className="continue_shopping_button">CONTINUE SHOPPING</a>
                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </UserLayout>


    )
}