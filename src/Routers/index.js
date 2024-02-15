import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
 
import { Home } from "../Screen/Home";
import { About_us } from "../Screen/About_us/index"; 
import { FAQ } from "../Screen/Faq`s/index"; 
 import {Loginpage} from '../Screen/Loginpage'
import {ProductCheckout} from '../Screen/productDetail'
import { PrintedModels } from "../Screen/Product/printedModels";
export default function AdminRouter() {
 



  const token = localStorage.getItem('login');
 

  return (
    <BrowserRouter basename="/pete-dental-site">
       <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:slug"  element={<PrintedModels />}/>

      {/* <Route path="/3D-products-listing" element={<Printed_Models />} />
      <Route path="/sports-product-listing" element={<Printed_Models />} />
      <Route path="/night-product-listing" element={<Printed_Models />} />
  */}
      <Route path="/aboutuspage" element={<About_us />} />
      <Route path="/faqpage" element={<FAQ />} />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/productdetail" element={<ProductCheckout />} />
       
 
      </Routes>
    </BrowserRouter>
  );
}
