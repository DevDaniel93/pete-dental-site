import user_imgs from '../../Assets/user-img-05.png'
import user_img1 from '../../Assets/user-img-01.png' 
import user_img2 from '../../Assets/user-img-02.png' 
import user_img3 from '../../Assets/user-img-03.png' 
import user_img4 from '../../Assets/user-img-04.png' 
import user_img6 from '../../Assets/user-img-06.png' 
 
 
import {useState , useEffect} from 'react'
import product_img3 from '../../Assets/product-img-03.png'
 
import { About_CARD2 } from '../../Components/About2_CARD'
import { About_Card } from '../../Components/About_Card'
import { Card } from '../../Components/ProductCard/index'
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from '../../Components/Banner'
import "./style.css";
import { useParams } from 'react-router-dom'
import {order_view} from '../../Services/index'
export const Wish_List = () => {
 

  const baseurl = `${process.env.REACT_APP_API_URL}/public/`;
 
const [all_product, setAll_product] = useState([]);
    const { id } = useParams() 
 

    const fetchData = async ( ) => {
        try {
            const data = await order_view(id);
            setAll_product(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        fetchData();
    }, [id]);
console.log("all_product fetch data view data" , all_product)
    return (
      <>
      <UserLayout>

          <Banner
              heading="Order History"
              descripction="Our clients are our priority, we offer quality dental services with a team of specialists.

              More details about our services below." />

          <section>
              <div className='container'>

                  <div>
                      {
                          all_product?.data?.order_items?.map((item) => (
                              <div className="row justify-content-center  align-items-center py-4 mt-5">
                                  <div className="col-md-1">
                                      <div className="text-center">
                                          <img
                                              src={baseurl + item?.product_detail.src}
                                              className="img-fluid"
                                              alt=""
                                          />
                                      </div>
                                  </div>

                                  <div className="col-md-11">
                                      <div className="d-flex align-items-center justify-content-between">
                                          <div className="cart_item_details">
                                              <h6 className="cart_item_title">{item?.product_detail?.name}</h6>

                                              <div className="cart_item_detail">
                                                  <span className="cart_item_price">${item?.product_detail?.price}</span>
                                              </div>

                                              <div>

                                              </div>

                                              <div>
                                                  <span className="cart_item_instock">
                                                      {item?.product_detail?.description
                                                          ?.split(" ")
                                                          .slice(0, 14)
                                                          .join(" ") || ""}
                                                  </span>
                                              </div>
                                          </div>

                                          <div className="cart_item_action_btn text-center">


                                              <div className=" text-center">

                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          ))

                      }
                  </div>

              </div></section>
      </UserLayout>
  </>
    );
};
