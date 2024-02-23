import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
export const ProtectedRoutes = (props) => {
    const { Components } = props;
    const navigate = useNavigate();
//     const cartItems = useSelector((state) => state.cart.items);
// const patientmname = cartItems.map((item) =>
// )
// in the cartitem come array in the array come multiple object   in the object come patient name if patient name is empty  redirect to             navigate('/home');


const cartItems = useSelector((state) => state.cart.items);
const patientmname = cartItems.map((item) => item.patient_name);

 
const isAnyPatientNameEmpty = patientmname.some((name) => name === ""); 

 
// if (isAnyPatientNameEmpty) {
//   navigate('/home');
//   return null; // or you can render a loading indicator or null
// }
useEffect(() => {
     if (isAnyPatientNameEmpty) {
  navigate('/home');
 
        }
    })
    return (
        <>
            <Components />
        </>
    )
}

// ...state,
// items: state.items.map((item) =>
//   item.id === productId ? { ...item, qty: newQuantity } : item
