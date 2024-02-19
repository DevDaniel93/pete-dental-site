
<?php include 'inc/header.php'; ?>

    <section className="loginform_section pb-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5 mx-auto">

                   <div className="main_login_form">

                        <h2 className="loginform_mainHeading">Pete Cardamone</h2>

                        <h6 className="text-center">WELCOME! SIGNUP TO CONTINUE</h6>

                        <p className="form_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                        <form action="">

                            <div className="form-group">
                                <label for="login_form_email" className="email_label">Email</label>
                                <div className="input_with_icon">
                                    <span className="input_icon"><i className="fa-solid fa-at"></i></span>
                                    <input type="email" className="form-control form_email_field" id="login_form_email" aria-describedby="emailHelp" placeholder="Enter Your Email">

                                </div>
                              </div>
                              
                              <div className="form-group">
                                <label for="login_form_password" className="password_label">Password</label>
                                <div className="password_with_icon">
                                    <span className="lock_icon"><i className="fa-solid fa-lock"></i></span>
                                    <input type="password" className="form-control form_password_field" id="login_form_password" placeholder="Enter Your Password">
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="login_form_confirm_password" className="password_label">Confirm Password</label>
                                <div className="password_with_icon">
                                    <span className="lock_icon"><i className="fa-solid fa-lock"></i></span>
                                    <input type="password" className="form-control form_password_field" id="login_form_confirm_password" placeholder="Re-Enter Your Password">
                                </div>
                              </div>

                              <button type="submit" className="btn btn-success w-100 mt-3">Sign Up</button>

                              <div className="text-center mt-2">
                                <span className="register_btn">Already have an Account? <a href="./loginpage.php">Login</a></span>
                              </div>

                              <!-- <div className="text-right mt-2">
                                <a href="javascript:;" className="forgot_password">Forgot Password?</a>
                              </div> -->

                              <div className="for_other_logins">
                                <div className="line"></div>
                                <p className="or_between m-0">OR</p>
                                <div className="line"></div>
                              </div>

                              <div className="with_other_account my-3">
                                <div className="account_logo">
                                    <!-- svg of google -->
                                    <img src="./images/google_icon.png" alt="" />
                                </div>
                                <div>
                                    <a href="javascript:;" className="account_link">
                                        Signup With Google
                                    </a>
                                </div>
                              </div>

                              <div className="with_other_account my-2 py-2">
                                <div className="facebook_logo ml-2">
                                    <!-- svg of facebook -->
                                    <img src="./images/facebook_icon.png" alt="" />
                                </div>
                                <div>
                                    <a href="javascript:;" className="account_link">
                                        Signup With Facebook
                                    </a>
                                </div>
                              </div>

                              <!-- <div className="text-center mt-2">
                                <span className="register_btn">Don't have an Account? <a href="javascript:;">Register</a></span>
                              </div> -->

                        </form>
                   </div>

                </div>
            </div>
        </div>
    </section>

    <?php include 'inc/footer.php'; ?> 