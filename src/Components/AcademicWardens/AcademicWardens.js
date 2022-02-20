import img1 from "./../../images/image036.jpg";
import img2 from "./../../images/image038.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import DropDown from './../DropDown/DropDown'
import {
    Des,
    Sec,
    Slider,
    SubSec,
    Img,
    Sec1,
    ContactInfo,
    H4,
    H1,
    IconContainer,
    ContactContainer,
    ContactTitle,
    Icon
} from "./AcademicWardensStyle"
const AcademicWardens = () => {
    return (
        
        <Des>
        
            <Sec>
                <H1>Academic Wardens</H1>
            </Sec>

            <Sec>
                <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    <SubSec>
                        <Sec1>
                            <ContactTitle>
                                <H4>Dr. K. A. Sunanda. Kodikara-Arachchi</H4>
                                
                            </ContactTitle>
                            <ContactInfo>
                                <IconContainer><Icon><HiOutlinePhone color={ "#339BFF"}/></Icon></IconContainer>
                                <ContactContainer>+94777116347</ContactContainer>
                            </ContactInfo>
                            <ContactInfo>
                            <IconContainer><Icon><HiOutlineMail color={ "#339BFF"}/></Icon></IconContainer>
                                <ContactContainer>sunanda@gmail.com</ContactContainer>
                            </ContactInfo>
                        </Sec1>
                    </SubSec>
                </Slider>
                <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img2} alt="" />
                    </div>
                    
                    <SubSec>
                    <Sec1>
                            <ContactTitle>
                                <H4>Dr. W. S. Hemalika</H4>
                                
                            </ContactTitle>
                            <ContactInfo>
                                <IconContainer><Icon><HiOutlinePhone color={ "#339BFF"}/></Icon></IconContainer>
                                <ContactContainer>+94777116347</ContactContainer>
                            </ContactInfo>
                            <ContactInfo>
                            <IconContainer><Icon><HiOutlineMail color={ "#339BFF"}/></Icon></IconContainer>
                                <ContactContainer>hemalika@gmail.com</ContactContainer>
                            </ContactInfo>
                        </Sec1>
                    </SubSec>
                </Slider>
            </Sec>
        </Des>
    );
}
 
export default AcademicWardens;