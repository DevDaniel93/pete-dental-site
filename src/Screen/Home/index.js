 
 
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Link } from 'react-router-dom';

import "./style.css";

export const Home = () => {
  

  return (
    <>
      <UserLayout>
      <section className="banner_section">
        <Container>
            <div className="row">
                <div className="col-md-6">

                    <div className="banner_content">

                        <h2 className="mainHeading">Pete Cardamone</h2>

                        <p className="banner_para mt-3">
                            Your Dental Models Printed <span>With Quality & Delivered on time so</span> you can improve patient flow through your Practice
                        </p>

                        <div className="explore_now_btn">
                            <Link to={"/"}>Explore Now</Link>
                        </div>

                        <div>
                            <div></div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    </section>
      </UserLayout>
    </>
  );
};
