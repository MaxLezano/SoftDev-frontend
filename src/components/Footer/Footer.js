import React from "react";
import Input from "../Input/Input";
import "./Footer.css";
import logoBlack from "../../assets/images/logo-black.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="container-footer">
      <div className="container-elements">
        <img className="size-img" src={logoBlack} alt="Logo" />
        <div class="size-elements">
          <a class="color p-3" href="#">
            <WhatsAppIcon fontSize="large" />
          </a>
          <a class="color p-3" href="#">
            <FacebookRounded fontSize="large" />
          </a>
          <a class="color p-3" href="#">
            <InstagramIcon fontSize="large" />
          </a>
          <a class="color p-3" href="#">
            <EmailIcon fontSize="large" />
          </a>
        </div>
        <div class="data-fiscal">
          <small class="p-2">Data Fiscal</small>
          <small class="p-2">|</small>
          <small class="p-2">Derechos Reservados ® SoftDev</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
