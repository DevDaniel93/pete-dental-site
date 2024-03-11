import react, { useState, useEffect } from 'react'
import wish from '../../Assets/product-img-04.png'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

// import CustomTable from "../../Components/CustomTable"
import Tab from 'react-bootstrap/Tab';
import { UserLayout } from "../../Components/Layout/UserLayout";
import Logo from '../../Assets/logo.png'
import { Banner } from '../../Components/Banner'
import { CustomModal } from '../../Components/CustomModal'
import { CustomInput } from '../../Components/CustomInput'
import { CustomButton } from '../../Components/CustomButton'

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order_list, Profile_view, Profile_edit, Wish_list } from '../../Services';
import { Link, useParams } from 'react-router-dom';
export function My_account() {
    const [formData, setFormData] = useState({});
    const [editUser, setEditUser] = useState(false);
    const baseurl = `${process.env.REACT_APP_API_URL}/public/`;
 
    
  const handlechang = (event) => {
    const { name, value } = event.target;
 
 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

    console.log("formData", formData)
    const handleget = () => {
        document.querySelector('.loaderBox').classList.remove("d-none");
        const LogoutData = localStorage.getItem('login');
        fetch(`https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user/get-detail`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            },
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                document.querySelector('.loaderBox').classList.add("d-none");
                setEditUser(true)
                console.log("data profile", data)
                setFormData(data?.data);


            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");

            })
    }









    const [profile, setprofile] = useState([]);
    const fetchprofile = async () => {
        try {
            const data = await Profile_view();
            setprofile(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {


        fetchprofile();
    }, []);
    console.log("profile", profile)

    const base_url = 'https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/'

    const [all_product, setAll_product] = useState([]);
    const fetchData = async () => {
        try {
            const data = await Order_list();
            setAll_product(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        fetchData();
    }, []);
    console.log("all_product", all_product)

    const [wishlist, setWish_lish] = useState([]);
    const wishdata = async () => {
        document.querySelector('.loaderBox').classList.remove("d-none");
        try {
            document.querySelector('.loaderBox').classList.add("d-none");
            const data = await Wish_list();
            setWish_lish(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            document.querySelector('.loaderBox').classList.add("d-none")
        }
    };

    useEffect(() => {

        wishdata();
    }, []);
    console.log("wishlist", wishlist?.data)

    const handleEditSubmit = (event) => {
        event.preventDefault();

        document.querySelector('.loaderBox').classList.remove("d-none");
        const LogoutData = localStorage.getItem('login');
        fetch(`https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user/detail-edit`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
                body: JSON.stringify(formData)
            },
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                fetchprofile()
                document.querySelector('.loaderBox').classList.add("d-none");
                setFormData({
                    name: ''
                })


                setEditUser(false)


            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
            })
    }
    return (
        <div>
            <>
                <UserLayout>

                    <Banner
                        heading="My Account"
                        descripction="Our clients are our priority, we offer quality dental services with a team of specialists.

                    More details about our services below." />
                    <section className="book_listing_main_wrap myAccountPage pt-3">
                        <div className="container">
                            <div className="row">
                                <div className='col-md-12 text-center'>
                                    <div className='titleBox mb-4'>
                                        {/* <h3>My Account</h3> */}
                                    </div>
                                </div>

                                <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                                    <Row>
                                        <Col sm={3} className='bg-light'>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <div className='row'>


                                                        <Nav.Link eventKey="profile">My Profile</Nav.Link>
                                                        <div>


                                                        </div>
                                                    </div>
                                                </Nav.Item>

                                                <Nav.Link eventKey="MyOrder">My Orders</Nav.Link>
                                                <Nav.Link eventKey="wishList">Wish List</Nav.Link>
                                                {/* </Nav.Item> */}

                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="profile">
                                                    <div className='row'>
                                                        <div className='col-md-6      justify-content-between
 d-flex'>
                                                            <div className='pageTitle mb-4'>
                                                                <h3>My Profile</h3>

                                                            </div>
                                                            <span type="button" onClick={handleget}>       <i className="fa-solid fa-pen-to-square"></i></span>


                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-lg-4 order-2 order-lg-1 mb-3">
                                                                <div className="profileImage">
                                                                    <img src={Logo} alt="User" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="row mb-4">
                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel">Name</h4>
                                                                    <p className="secondaryText">{profile?.data?.first_name}</p>
                                                                </div>
                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Last Name</h4>
                                                                    <p className="secondaryText">{profile?.data?.last_name}</p>
                                                                </div>
                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Email</h4>
                                                                    <p className="secondaryText">{profile?.data?.email}</p>
                                                                </div>
                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Phone Number</h4>
                                                                    <p className="secondaryText">{profile?.data?.phone_number}</p>
                                                                </div>
                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> City    </h4>
                                                                    <p className="secondaryText">{profile?.data?.city}</p>
                                                                </div>

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> State    </h4>
                                                                    <p className="secondaryText">{profile?.data?.state}</p>
                                                                </div>

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Zip Code    </h4>
                                                                    <p className="secondaryText">{profile?.data?.zip_code}</p>
                                                                </div>

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Dental board_of California License number    </h4>
                                                                    <p className="secondaryText">{profile?.data?.dental_board_of_california_license_number}</p>
                                                                </div>


                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Tex number    </h4>
                                                                    <p className="secondaryText">{profile?.data?.tin}</p>
                                                                </div>

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Dental board_of California License number    </h4>
                                                                    <p className="secondaryText">{profile?.data?.dental_board_of_california_license_number}</p>
                                                                </div>

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Dental board_of California License number    </h4>
                                                                    <p className="secondaryText">{profile?.data?.dental_board_of_california_license_number}</p>
                                                                </div>
                                                                {/* tin */}

                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Legal Office Name</h4>
                                                                    <p className="secondaryText">{profile?.data?.legal_office_name}</p>
                                                                </div>


                                                                <div className="col-xl-4 col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel"> Business Address</h4>
                                                                    <p className="secondaryText">{profile?.data?.bussiness_address}</p>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="library">
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className='pageTitle mb-4'>
                                                                <h3>My Library</h3>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="dashCards">
                                                                    <div className="row">
                                                                        <div className="col-12">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="MyOrder">
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className='pageTitle mb-4'>
                                                                <div className='row'>
                                                                    <div className='col-md-10'>
                                                                        <div className='d-flex align-items-baseline justify-content-between'>
                                                                            <h3 className=' p-0'> My Order</h3>


                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <Table striped bordered hover>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order Id </th>
                                                                            <th>Order Date </th>
                                                                            <th>Client Id </th>
                                                                            <th>Client Name </th>
                                                                            {/* Shipping carrier */}
                                                                            <th>Shipping Carrier</th>
                                                                            <th>Shipping DATE</th>
                                                                            <th>Tracking</th>
                                                                            <th>total</th>

                                                                            <th>Status</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {all_product?.data?.map((data) => (
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>{data?.order_id}</td>

                                                                                <td>{data?.created_at}</td>

                                                                                <td>{data?.user_id}</td>
                                                                                <td>{data?.user_name}</td>
                                                                                <td>234234</td>
                                                                                <td>{data?.created_at}</td>
                                                                                <td>2323</td>
                                                                                <td>{data?.total_price}</td>
                                                                                <td>{data?.status}</td>
                                                                                {/* to={`/${data?.slug}`} */}
                                                                                <td className=' text-decoration-none  text-black  text-de'>
                                                                                    <Link
                                                                                        className=' text-black   text-decoration-none '
                                                                                        to={`/order-history/${data?.id}`}
                                                                                    >

                                                                                        View
                                                                                    </Link>
                                                                                </td>
                                                                            </tr>

                                                                        </tbody>))}
                                                                </Table>




                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="dashCards">
                                                                    <div className="row">
                                                                        <div className="col-12">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="wishList">
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className='pageTitle mb-4'>
                                                                <div className='row'>
                                                                    <div className='col-md-10'>
                                                                        <div className='d-flex align-items-baseline justify-content-between'>
                                                                            <h3 className=' p-0'> Wish List</h3>


                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                {
                                                                    wishlist?.data?.map((item) => (
                                                                        <div className="row justify-content-center  align-items-center py-4 ">
                                                                            <div className="col-md-2">
                                                                                <div className="wish text-center">
                                                                                    <img
                                                                                        src={baseurl + item?.product_detail?.src}
                                                                                        className="img-fluid mw-100 coverImage"
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-md-10">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <div className="cart_item_details ml-0">
                                                                                        <h6 className="cart_item_title">{item?.product_detail?.name}</h6>

                                                                                        <div className="cart_item_detail">
                                                                                            <span className="cart_item_price">{item?.product_detail?.price}</span>
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
                                                        </div>


                                                    </div>
                                                </Tab.Pane>





                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                                {/* end  */}
                            </div>
                        </div>
                    </section>

                    <CustomModal show={editUser} close={() => { setEditUser(false) }} className="modalXl" heading="Edit Profile">


                        <form onSubmit={handleEditSubmit} className='formDataStyle '>
                            <div className='row mt-3'>
                            
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="First Name"
                                        type="text"
                                         
                                        placeholder="Name"
                                        required
                                        name="first_name"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.first_name}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Last Name"
                                        type="text"
                                         
                                        placeholder="last_name"
                                        required
                                        name="last_name"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.last_name}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Legal Office Name"
                                        type="text"
                                         
                                        placeholder="legal_office_name"
                                        required
                                        name="legal_office_name"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.legal_office_name}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Bussiness_Address"
                                        type="text"
                                         
                                        placeholder="bussiness_address"
                                        required
                                        name="bussiness_address"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData?.bussiness_address}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Email"
                                        type="email"
                                        disabled
                                         
                                        placeholder="email"
                                        required
                                        name="email"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.email}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="User Name"
                                        type="text"
                                         
                                        placeholder=" User Name"
                                        required
                                        name="user_name"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.user_name}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="phone_number"
                                        type="number"
                                         
                                        placeholder="phone_number"
                                        required
                                        name="phone_number"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.phone_number}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="City"
                                        type="text"
                                         
                                        placeholder="City"
                                        required
                                        name="city"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.city}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="State"
                                        type="text"
                                         
                                        placeholder="state"
                                        required
                                        name="state"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.state}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Zip Code"
                                        type="text"
                                         
                                        placeholder="zip_code"
                                        required
                                        name="zip_code"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.zip_code}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Dental Board_Of California License Number"
                                        type="text"
                                         
                                        placeholder="dental_board_of_california_license_number"
                                        required
                                        name="dental_board_of_california_license_number"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.dental_board_of_california_license_number}
                                        onChange={handlechang}

                                    />
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-4'>
                                    <CustomInput
                                        label="Tex"
                                        type="text"
                                         
                                        placeholder="tin"
                                        required
                                        name="tin"
                                        labelclassName='mainLabel'
                                        input_icon='mainInput'
                                        value={formData.tin}
                                        onChange={handlechang}

                                    />
                                </div>
                            </div>
                        </form>





























                        <CustomButton classbtn="cus-btn" btn_text='Update' type='button' onClick={handleEditSubmit} />
                    </CustomModal>
                </UserLayout>
            </>
        </div>
    )
}