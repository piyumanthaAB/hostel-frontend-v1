import React from "react";
import img from "../../images/unilogo.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FooterSection,
  FooterRightColumn,
  FooterLeftColumn,
  Logo,
  Link1,
  Links,
  HR,
  Text,
  Name,
  H1,
  Image,
  SubSection,
  Span,
  Copyright
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>
          <Image src={img}/>
        </Logo>
        <Name>
          {/* <H1>University of Ruhuna <br/> Hostel Management System</H1> */}
          <H1> Hostel Management System</H1>
        </Name>
      </FooterSection>
      <SubSection>
        <FooterSection>
          <FooterLeftColumn>
            <HR/>
            <Links>
              <Link1 className="FooterLink">
                <Link to = "">
                  Privacy
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "/not-found">
                  Services
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "">
                  About Us
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "/contact-us">
                  Contact Us
                <Span className="Ho"></Span>
                </Link>
              </Link1>
            </Links>
          </FooterLeftColumn>
          <FooterRightColumn>
            <HR/>
            <Text>
            The University provides good quality accommodation facilities by its own in-campus large hostel complexes and the others, located in the immediate neighborhood of the main premises.  Student accommodation is administered by the Student Affairs Branch in accordance with the rules and regulations articulated by the University.</Text>
          </FooterRightColumn>
        </FooterSection>
      </SubSection>
      <FooterSection>
        <Copyright>
        <p>©{new Date().getFullYear()} Department of Computer Science. | All Rights Reserved. </p>
        </Copyright>
        
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
