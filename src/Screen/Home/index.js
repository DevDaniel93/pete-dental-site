 
 
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
 
import "./style.css";

export const Home = () => {
  

  return (
    <>
      <UserLayout>
      <section class="banner_section">
        <Container>
            <div class="row">
                <div class="col-md-6">

                    <div class="banner_content">

                        <h2 class="mainHeading">Pete Cardamone</h2>

                        <p class="banner_para mt-3">
                            Your Dental Models Printed <span>With Quality & Delivered on time so</span> you can improve patient flow through your Practice
                        </p>

                        <div class="explore_now_btn">
                            <a href="javascript:;">Explore Now</a>
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
