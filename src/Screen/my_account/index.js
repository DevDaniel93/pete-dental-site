import react, { useState, useEffect } from 'react'
import wish from '../../Assets/product-img-04.png'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
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
import { Order_list, Profile_view, Profile_edit } from '../../Services';
export function My_account() {
    const [formData, setFormData] = useState({});
    const [editUser, setEditUser] = useState(false);



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
                setFormData({
                    ...formData,
                    name: data.data.name,
                    email: data.data?.email
                });


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


    console.log("all_product order", all_product?.data)
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

                                {/* tabs  */}
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

                                                {/* <Nav.Item> */}
                                                <Nav.Link eventKey="MyOrder">My Orders</Nav.Link>
                                                {/* <Nav.Link eventKey="wishList">Wish List</Nav.Link> */}
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
                                                        <div className="col-lg-10">
                                                            <div className="row mb-4">
                                                                <div className="col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel">Name:</h4>
                                                                    <p className="secondaryText">{profile?.data?.name}</p>
                                                                </div>
                                                                {/* <div className="col-lg-6 mb-3">
                                                                    <h4 className="secondaryLabel">Email</h4>
                                                                    <p className="secondaryText">{profile?.data?.email}</p>
                                                                </div> */}

                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                        <CustomButton type="button" variant="primaryButton" className="me-3 mb-2" text="Edit Profile" onClick={() => { navigate('/profile/edit-profile') }} />
                                                        <CustomButton type="button" variant="secondaryButton" className="me-3 mb-2" text="Change Password" onClick={() => { navigate('/profile/change-password') }} />
                                                    </div> */}

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
                                                                            <h3> My Order</h3>

                                                                            <div>
                                                                                {/* <span type="button" onClick={handleget}>    View Details</span> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <section className="vh-100 gradient-custom-2">
                                                                    <div className="  ">
                                                                        <div className="row d-flex  align-items-center h-100">
                                                                            {/* col-md-10 col-lg-8 col-xl-6 */}
                                                                            <div className="">
                                                                                {/* style="border-radius: 16px;" */}
                                                                                <div className="card card-stepper" >

                                                                                    <div className="card-body p-4">
                                                                                        <div className="d-flex flex-row mb-4 pb-2">
                                                                                            <div className="flex-fill">
                                                                                                <h5 className="bold">Lower 3D Model</h5>
                                                                                                <div>
                                                                                                    <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">2112</span></p>
                                                                                                    <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">12-1-2024</span> </p>
                                                                                                </div>
                                                                                                <h4 className="mb-3"> $ 299 <span className="small text-muted">  </span></h4>

                                                                                            </div>
                                                                                            <div>
                                                                                                <img className="align-self-center img-fluid"
                                                                                                    src={wish} width="250" />
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </section>
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











                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                                {/* end  */}
                            </div>
                        </div>
                    </section>

                    <CustomModal show={editUser} close={() => { setEditUser(false) }} >
                        <CustomInput
                            label="Name"
                            type="text"
                            disabled
                            placeholder="Name"
                            required
                            name="name"
                            labelclassName='mainLabel'
                            input_icon='mainInput'
                            value={formData.name}
                            onChange={(event) => {
                                setFormData({ ...formData, name: event.target.value });

                            }}

                        />
                        {/* <CustomInput
                            className="mainInput"
                            label="Email"
                            type="rmail"
                            disabled
                            placeholder="email"
                            required
                            name="emai"
                            labelclassName='mainLabel'
                            input_icon='mainInput'
                            value={formData.email}
                            onChange={(event) => {
                                setFormData({ ...formData, email: event.target.value });

                            }}

                        /> */}


                        <CustomButton classbtn="cus-btn" btn_text='Update' type='button' onClick={handleEditSubmit} />
                    </CustomModal>
                </UserLayout>
            </>
        </div>
    )
}