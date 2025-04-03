import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon style={{ fontSize: 40, color: "white" }} />
        <TwitterIcon style={{ fontSize: 40, color: "white" }} />
        <FacebookIcon style={{ fontSize: 40, color: "white" }} />
        <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
      </div>
      <p> &copy; {new Date().getFullYear()} G&P'pizza.com</p>
    </div>
  );
}

export default Footer;
