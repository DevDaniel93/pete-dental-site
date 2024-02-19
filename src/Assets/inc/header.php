
<!doctype html>
<html>
<head>
	<title>Pete Cardamone</title>
    <?php include 'inc/styles.php' ?>
</head>

<body>
    
<header>
        <section className="navigationbar_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="./index.php">Pete Cardamone</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                          
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                  <a className="nav-link" href="./second-banner.php">Home <span className="sr-only">(current)</span></a>
                                </li>
                              
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="./3D-products-listing.php">3D Printed Models</a>
                                    <a className="dropdown-item" href="./sports-product-listing.php">Sports Mouth Guards</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="./night-product-listing.php">Night Mouth Guards</a>
                                  </div>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="./aboutuspage.php">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faqpage.php">FAQ's</a>
                                </li>
                              </ul>

                              <div className="navigationbar_right_icons">
                                <span><a href="javascript:;"><i className="fa-solid fa-cart-shopping pl-2 pr-1"></i></a></span>
                                <span><a href="loginpage.php"><i className="fa-regular fa-user px-2"></i></a></span>
                              </div>
                             
                            </div>
                          </nav>

                    </div>
                </div>
            </div>
        </section>
    </header>
</body>