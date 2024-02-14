

import { Card } from '../../Components/Product_Card/index'
import { Container } from "react-bootstrap";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Banner } from '../../Components/Banner'
import "./style.css";

import { Faqs } from '../../Components/Faqs'
export const FAQ = () => {


    return (
        <>
            <UserLayout>

                <Banner
                    heading="FAQ's"
                    descripction="Navigate with confidence! Explore our concise FAQ section for instant clarity on common queries, making your interaction with our website effortless and enjoyable." />


                <section class="faq_section mt-5 mb-4">
                    <Container>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center">
                                    <h2 class="faq_heading">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
                                </div>


                                <Faqs id="headingOne" aria-labelledb="headingOne" expanded="false"
                                    target="#collapseOne"
                                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />
                                <Faqs id="headingTwo" aria-labelledb="headingTwo" expanded="true"
                                    target="#collapseTwo"
                                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />


                                <Faqs id="headingTwo" target="#collapseTwo" expanded="false"
                                 aria-labelledb="headingTwo" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />

                                <Faqs id="headingThree" expanded="false" aria-labelledb="headingThree" target="#collapseThree" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />

                                <Faqs id="headingfour"  expanded="false" aria-labelledb="headingfour" target="#collapsefour" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />

                                <Faqs id="headingfive" expanded="false" aria-labelledb="headingfive" target="#collapsefive" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    descripction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet." />


                            </div>
                        </div>
                    </Container>
                </section>






            </UserLayout>
        </>
    );
};
