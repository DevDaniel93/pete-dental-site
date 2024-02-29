import { useNavigate } from "react-router-dom";

const LogoutData = localStorage.getItem('login');


console.log("LogoutData itm", LogoutData)


export const Login = async (formData) => {
    const navigate = useNavigate()
    const formDataMethod = new FormData();
    formDataMethod.append('email', formData.email);
    formDataMethod.append('password', formData.password);

    console.log(formData);

    // document.querySelector('.loaderBox').classList.remove("d-none");

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user-login`, {
            method: 'POST',
            body: formDataMethod
        });

        const response = await res.json();

        if (response.ok) {
            localStorage.setItem('login', '60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9');
            console.log('Login Response:', response);
            // document.querySelector('.loaderBox').classList.add("d-none");
            navigate('/hone');
        } else {
            // document.querySelector('.loaderBox').classList.add("d-none");
            alert('Invalid Credentials');
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        // document.querySelector('.loaderBox').classList.add("d-none");
    }
};
















export const Get_all_product = async (slug) => {
    const LogoutData = localStorage.getItem('login');
    console.log("LogoutData", LogoutData)
    // try {
    //         const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/product-listing/${slug}`,
    //             {
    //                 method: 'GET',
    //             });
    //         const productData = await res.json();
    //         console.log("productData" ,productData)
    //         const data = productData
    //         console.log("LogoutData data"  , data)
    //         return data?.data;
    //     } catch (error) {
    //         console.log('Error in getting all products (service) =>', error)
    //     }
    if (LogoutData) {
        console.log('yes');
        // try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/product-listing/${slug}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            });
        ;
        const productData = await res.json();
        document.querySelector('.loaderBox').classList.add("d-none");

        console.log("productData", res)
        const data = productData
        console.log("LogoutDataCat data", data)
        return data?.data;
        // } catch (error) {
        // console.log('Error in getting all products (service) =>', error)
        // }
    }
    else {
        console.log('no');

        // try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/product-listing/${slug}`,
            {
                method: 'GET',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${'60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9'}`
                // },
            });
        const productData = await res.json();
        console.log("productData", productData)
        const data = productData
        console.log("LogoutData data", data)
        return data?.data;
        // } catch (error) {
        //     console.log('Error in getting all products (service) =>', error)
        // }
    }

}





// export const checkout = async () => {

//     try {
//         const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/checkout`,
//             {
//                 method: 'GET',
//                 // headers: {
//                 //     'Accept': 'application/json',
//                 //     'Content-Type': 'application/json',
//                 //     'Authorization': `Bearer ${'60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9'}`
//                 // },
//             });
//         const catigoryData = await res.json();
//         console.log("procatigoryDataductData" ,catigoryData)
//         const data = catigoryData
//         console.log("LogoutData data"  , data)
//         return data?.data;
//     } catch (error) {
//         console.log('Error in getting all products (service) =>', error)
//     }

// }

export const Get_all_category = async () => {

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/category-listing`,
            {
                method: 'GET',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${'60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9'}`
                // },
            });
        const catigoryData = await res.json();
        console.log("procatigoryDataductData", catigoryData)
        const data = catigoryData
        console.log("LogoutData data", data)
        return data?.data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}


export const Checkout = async (formData, cartItems) => {

    const navigate = useNavigate()

    const formDataMethod = new FormData();
    for (const key in formData) {
        formDataMethod.append(key, formData[key]);
        formDataMethod.append('products', cartItems);
    }

    console.log(formData);

    // document.querySelector('.loaderBox').classList.remove("d-none");

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/checkout`, {
            method: 'POST',
            body: formDataMethod
        });

        const response = await res.json();

        if (response.ok) {
            localStorage.setItem('login', '60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9');

            // document.querySelector('.loaderBox').classList.add("d-none");
            navigate('/hone');
        } else {
            // document.querySelector('.loaderBox').classList.add("d-none");
            alert('Invalid Credentials');
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        // document.querySelector('.loaderBox').classList.add("d-none");
    }
};

// https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/order-detail


export const Order_place = async () => {

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/order-detail`,
            {
                method: 'GET',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${'60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9'}`
                // },
            });
        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}















export const Order_list = async () => {
    const LogoutData = localStorage.getItem('login');
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/order-listing`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}




export const Profile_view = async () => {
    const LogoutData = localStorage.getItem('login');
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/get-detail`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}






export const Profile_edit = async () => {
    const LogoutData = localStorage.getItem('login');
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/detail-edit`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}


export const Wish_list = async () => {
    const LogoutData = localStorage.getItem('login');
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/wish-list`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}


export const Add_wish = async (id) => {
    const LogoutData = localStorage.getItem('login');
    try {

        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/favourite-unfavourite-product/${id}`,
            {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${LogoutData}`,
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                // body: JSON.stringify(data), // body data type must match "Content-Type" header
            }
        )
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${LogoutData}`
        //         },
        //     }
        // )

        const orders = await res.json();
        console.log(orders)
        // const data = orders

        return orders;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}


// https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user/wish-list


export const order_view = async (id) => {
    const LogoutData = localStorage.getItem('login');
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user/order-view/${id}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

        const orders = await res.json();

        const data = orders

        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}  
