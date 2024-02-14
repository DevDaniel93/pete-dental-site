import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
 
import { Home } from "../Screen/Home";
import { Printed_Models } from "../Screen/Product/printed_models"; 
import { About_us } from "../Screen/About_us/index"; 
import { FAQ } from "../Screen/Faq`s/index"; 
 import {Loginpage} from '../Screen/Loginpage'

export default function AdminRouter() {
 



  const token = localStorage.getItem('login');
 

  return (
    <BrowserRouter basename="/pete-dental-site">
       <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/3D-products-listing" element={<Printed_Models />} />
      <Route path="/sports-product-listing" element={<Printed_Models />} />
      <Route path="/night-product-listing" element={<Printed_Models />} />
 
      <Route path="/aboutuspage" element={<About_us />} />
      <Route path="/faqpage" element={<FAQ />} />
      <Route path="/loginpage" element={<Loginpage />} />
       
       
      </Routes>
    </BrowserRouter>
  );
}
