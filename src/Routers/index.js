import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
 
import { Dashboard } from "../Screen/Dashboard";
 


export default function AdminRouter() {
 



  const token = localStorage.getItem('login');
 

  return (
    <BrowserRouter basename="/pete-dental-site">
         <h1>Hello</h1>
      <Routes>

      <Route path="/dashboard" element={Dashboard} />
       
      </Routes>
    </BrowserRouter>
  );
}
