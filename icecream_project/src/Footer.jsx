import "./Allfile.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
export default function Footer()
{
    return(
    <>
     <footer>
        <div class="content">
            <div class="box">
                <img src="image/freeze.jpg"/>
                <p>We’re always in search for talented and motivated people. Don’t be shy introduce yourself! <br/>We’re always in search for talented and motivated people.</p>
                
                <a href="contact.php" class="btn">contact with us</a>
            </div>
            <div class="box">
                <h3>useful links</h3>
                <a href="">blinkit</a>
                <a href="">Dairy food</a>
                <a href="">Frozen desserts</a>
                
            </div>
            <div class="box">
                <h3>our company</h3>
                <a href="contact.php">contact us</a>
                <a href="">blog</a>
                <a href="">planing</a>
                <a href="">events</a>
            </div>
            <div class="box">
                <h3>get contact</h3>
                <p>Phone:123456789</p>
                <p>E-mail: Aman@gmail.com</p>
                <p>Location: pune maharashtra</p>
                <div class="icons">
                    <i class="bx bxl-facebook"><BiLogoFacebook/></i>
                    <i class="bx bxl-instagram"><BiLogoInstagram/></i>
                    <i class="bx bxl-linkedin"><BiLogoWhatsapp/></i>
                </div>
            </div>
        </div>
        <div class="bottom">
            
            <a href="admin/register.php">AMAN SINHA</a>
        </div>
    </footer>


    </>
    );
}