
    <?php include 'inc/header.php'; ?>

    <section class="loginform_section pb-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-5 mx-auto">

                   <div class="main_login_form">

                        <h2 class="loginform_mainHeading">Pete Cardamone</h2>

                        <h6 class="text-center">WELCOME! SIGNIN TO CONTINUE</h6>

                        <p class="form_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                        <form action="">

                            <div class="form-group">
                                <label for="login_form_email" class="email_label">Email</label>
                                <div class="input_with_icon">
                                    <span class="input_icon"><i class="fa-solid fa-at"></i></span>
                                    <input type="email" class="form-control form_email_field" id="login_form_email" aria-describedby="emailHelp" placeholder="Enter Your Email">

                                </div>
                              </div>
                              
                              <div class="form-group">
                                <label for="login_form_password" class="password_label">Password</label>
                                <div class="password_with_icon">
                                    <span class="lock_icon"><i class="fa-solid fa-lock"></i></span>
                                    <input type="password" class="form-control form_password_field" id="login_form_password" placeholder="Enter Your Password">
                                </div>
                              </div>

                              <button type="submit" class="btn btn-success w-100 mt-3">Log In</button>

                              <div class="text-right mt-2">
                                <a href="javascript:;" class="forgot_password">Forgot Password?</a>
                              </div>

                              <div class="for_other_logins">
                                <div class="line"></div>
                                <p class="or_between m-0">OR</p>
                                <div class="line"></div>
                              </div>

                              <div class="with_other_account my-3">
                                <div class="account_logo">
                                    <!-- svg of google -->
                                    <img src="./images/google_icon.png" alt="">
                                </div>
                                <div>
                                    <a href="javascript:;" class="account_link">
                                        Login With Google
                                    </a>
                                </div>
                              </div>

                              <div class="with_other_account my-2 py-2">
                                <div class="facebook_logo ml-2">
                                    <!-- svg of facebook -->
                                    <img src="./images/facebook_icon.png" alt="">
                                </div>
                                <div>
                                    <a href="javascript:;" class="account_link">
                                        Login With Facebook
                                    </a>
                                </div>
                              </div>

                              <div class="text-center mt-2">
                                <span class="register_btn">Don't have an Account? <a href="./signuppage.php">Register</a></span>
                              </div>

                        </form>
                   </div>

                </div>
            </div>
        </div>
    </section>
    

    <?php include 'inc/footer.php'; ?> 
    
