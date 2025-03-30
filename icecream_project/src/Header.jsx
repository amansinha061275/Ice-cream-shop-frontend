import "./Allfile.css";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";


export default function Header()
{
    

    return(
     <>
    <header >
        <div className="logo">
        <a href="#home"><img src="image/freeze.jpg" alt="" width="200"/></a>
        </div>
        <nav className="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#shop">shop</a></li>
                <li><a href="#menu">menu</a></li>
         </ul>
        </nav>
        <div className="icon">
            <i class='bx bxl-facebook'><BiLogoFacebook/></i>
            <i class='bx bxl-instagram-alt' ><BiLogoInstagram/></i>
            <i class='bx bxl-whatsapp' ><BiLogoWhatsapp/></i>
        </div>
        <div className="bx bx-menu"></div>
    </header>
   
    
     
     </>
    );
}