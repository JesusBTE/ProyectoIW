import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import PrivacyPolicyModal from "./Privacy"
import TermsAndConditionsModal from "./TermsAndConditions"
import { IoLogoInstagram } from "react-icons/io5";



const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <FaFacebookF />
          <IoLogoInstagram />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="https://www.tepic.tecnm.mx/">ITTepic</a>
          <a href="#about">Misión</a>
          <a href="#contacto">Contactános</a>
        </div>
        <div className="footer-section-columns">
          <TermsAndConditionsModal />
          <PrivacyPolicyModal />
          </div>
      </div>
    </div>
  );
};

export default Footer;
