import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//Context
import LoginConext from "./util/LoginContext"
//Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Buy from "./pages/Buy";
//Css
import './css/reset.css'
import './css/global.css'

export default function App() {
    const [login, setLogin] = useState({name:null,image:null,token:null});
    return(
        <BrowserRouter>
            <LoginConext.Provider value={{ login, setLogin }}>
                <Routes>
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:idProduct" element={<ProductPage />} />
                    <Route path="/buy/:idProduct" element={<Buy />} />
                </Routes>
            </LoginConext.Provider>
        </BrowserRouter>
    )
}