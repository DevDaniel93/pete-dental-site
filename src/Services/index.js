import { useNavigate } from "react-router-dom";

const LogoutData = localStorage.getItem('login');


console.log("LogoutData" , LogoutData)


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

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/product-listing/${slug}`,
            {
                method: 'GET',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     // 'Authorization': `Bearer ${'60|GdwThafWZ9bw1JI3PuhVlv3hNPUStMh3hUEFqpLZ541862d9'}`
                // },
            });
        const productData = await res.json();
        console.log("productData" ,productData)
        const data = productData
        console.log("LogoutData data"  , data)
        return data?.data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
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
        console.log("procatigoryDataductData" ,catigoryData)
        const data = catigoryData
        console.log("LogoutData data"  , data)
        return data?.data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}


export const Checkout = async (  formData , cartItems) => {
 
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

// https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/order-detail


export const Order_place = async() =>{

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