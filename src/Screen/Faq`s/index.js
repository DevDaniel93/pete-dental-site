

import { Card } from '../../Components/ProductCard/index'
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


                <section className="faq_section mt-5 mb-4">
                    <Container>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h2 className="faq_heading">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
                                </div>


                                {/* <Faqs id="headingOne" aria-labelledb="headingOne" expanded="false"
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
 */}










<div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="accordian_para mb-0">
                                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
                              <button className="accordian_button" type="button" id="faq_button_01" data-toggle="collapse" data-target="#collapseOne"  aria-controls="collapseOne">
                               <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwo">
                            <h2 className="accordian_para mb-0">
                                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
                              <button className="accordian_button collapsed" type="button" id="faq_button_02" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>What 3D CAD file types does www.DentalModels.online accept?</span>
                                {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
                              </button>
                            </h2>
                          </div>
                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                The primary file type we accept is the ".stl" file type. If you have a different file type please contact us before you place an order to see if we can convert your specific file type in to something that our CAD software & machine's will accept.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingThree">
                            <h2 className="accordian_para mb-0">
                                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
                              <button className="accordian_button collapsed" type="button" id="faq_button_03" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
                              </button>
                            </h2>
                          </div>
                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt qui dolorem ipsum quia dolor sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingfour">
                              <h2 className="accordian_para mb-0">
                                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
                                <button className="accordian_button collapsed" type="button" id="faq_button_04" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    <span>Lorem Ipsu is simply dummy text of the printing and typesetting industry.</span>
                                    {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
                                </button>
                              </h2>
                            </div>
                            <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                              <div className="card-body">
                                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-header" id="headingfive">
                              <h2 className="accordian_para mb-0">
                                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
                                <button className="accordian_button collapsed" type="button" id="faq_button_04" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
                                </button>
                              </h2>
                            </div>
                            <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                              <div className="card-body">
                                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                              </div>
                            </div>
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
