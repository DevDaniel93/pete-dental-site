import React, { useState, useEffect } from 'react'
import product_img from '../../Assets/product-img-01.png'
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../store/action';
import {
    faBell,
    faUser,
    faHeart,
    faBars,
    faEllipsisV,
    faSignOut,
  } from "@fortawesome/free-solid-svg-icons";
import product_img2 from '../../Assets/product-img-02.png'
import {Link} from 'react-router-dom'
import product_img3 from '../../Assets/product-img-03.png'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../Components/ProductCard/index'
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from '../../Components/Banner'
import "./style.css";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Get_all_product  , Add_wish} from '../../Services/index'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
 
export const PrintedModels = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    console.log('qwq', slug)

    const baseurl = `${process.env.REACT_APP_API_URL}/public/`;

 

    const [all_product, setAll_product] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_product(slug);
                setAll_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug]);




    const wish = () => toast("Add in to Wish List");



    const wishdata= async (id) => {
      try {
          const data = await Add_wish(id);
          // setAll_product(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };


      const notify = () => toast("Product added successfully");

    console.log("notify" , notify)
    const navigate = useNavigate()
    // navigate('./productdetail')
    return (
        <>
            <UserLayout>

                <Banner
                    heading="3D PRINTED MODELS"
                    descripction="Revolutionize dentistry with our precision-crafted 3D printed models, setting a new standard for accuracy. Elevate patient care by embracing cutting-edge technology that guarantees a perfect fit." />
              {all_product?.map((data, index) => (
        <Cards
          key={index}
          img={baseurl + data?.src}
          heading={data?.name}
          descripction={data?.short_description}
          descripction2={data?.description}
          icon="faHeart"

          price="59.34"
          text="Add to cart"
        //   onClick={notify}
        addwish={ () => wishdata(data?.id)}
          onClick={() => (dispatch(addToCart(data ) )  , notify() , wishdata(data?.id)) }
          to={"/productdetail"}
          viewtext="View Card"
        />
      ))}
                           
                          
                   

<ToastContainer />


            </UserLayout>
        </>
    );
};
