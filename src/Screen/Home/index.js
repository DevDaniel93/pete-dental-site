 
 
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Link } from 'react-router-dom';

import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const Home = () => {
  

  return (
    <>
      <UserLayout>
    















      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            



        <section className="banner_section">
        <Container>
            <div className="row">
                <div className="col-md-6">

                    <div className="banner_content">

                        <h2 className="mainHeading">Pete Cardamone</h2>

                        <p className="banner_para mt-3 text-white">
                            Your Dental Models Printed <span>With Quality & Delivered on time so</span> you can improve patient flow through your Practice
                        </p>

                        <div className="explore_now_btn">
                            <Link to={"/sports-mouth-guards-1"}>Explore Now</Link>
                        </div>

                        <div>
                            <div></div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    </section>





        </SwiperSlide>
        <SwiperSlide>  <section className="banner_section2">
        <Container>
            <div className="row">
                <div className="col-md-6">

                    <div className="banner_content">

                        <h2 className="mainHeading">Pete Cardamone</h2>

                        <p className="banner_para mt-3 text-white">
                            Your Dental Models Printed <span>With Quality & Delivered on time so</span> you can improve patient flow through your Practice
                        </p>

                        <div className="explore_now_btn">
                            <Link to={"/sports-mouth-guards-1"}>Explore Now</Link>
                        </div>

                        <div>
                            <div></div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    </section>
        </SwiperSlide>
        <SwiperSlide>  <section className="banner_section3">
        <Container>
            <div className="row">
                <div className="col-md-6">

                    <div className="banner_content">

                        <h2 className="mainHeading">Pete Cardamone</h2>

                        <p className="banner_para mt-3 text-white">
                            Your Dental Models Printed <span>With Quality & Delivered on time so</span> you can improve patient flow through your Practice
                        </p>

                        <div className="explore_now_btn">
                            <Link to={"/night-mouth-guards-1"}>Explore Now</Link>
                        </div>

                        <div>
                            <div></div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    </section></SwiperSlide>
    
      </Swiper>
      </UserLayout>
    </>
  );
};
