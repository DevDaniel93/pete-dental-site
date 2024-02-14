
const LogoutData = localStorage.getItem('login');





export const Login = async (formData) => {
    const formDataMethod = new FormData();
    formDataMethod.append('email', formData.email);
    formDataMethod.append('password', formData.password);

    console.log(formData);
    
    document.querySelector('.loaderBox').classList.remove("d-none");

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/user-login`, {
            method: 'POST',
            body: formDataMethod
        });

        const response = await res.json();

        if (response.ok) {
            localStorage.setItem('login', response.data.token);
            console.log('Login Response:', response);
            document.querySelector('.loaderBox').classList.add("d-none");
            navigate('/dashboard');
        } else {
            document.querySelector('.loaderBox').classList.add("d-none");
            alert('Invalid Credentials');
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.querySelector('.loaderBox').classList.add("d-none");
    }
};

      
  
 












export const Get_all_product = async () => {

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/public/api/admin/product-listing`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            });
        const productData = await res.json();
        const data = productData
        return data;
    } catch (error) {
        console.log('Error in getting all products (service) =>', error)
    }

}



