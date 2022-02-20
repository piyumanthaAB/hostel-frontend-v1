
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineMail,HiOutlinePhone } from "react-icons/hi";
import img1 from "./../../images/warden1.jpg";
import img2 from "./../../images/warden2.jpg";
import img3 from "./../../images/warden3.jpg"
import img4 from "./../../images/warden4.jpg"
import img5 from "./../../images/warden5.jpg"
import img6 from "./../../images/warden6.jpg"
import img7 from "./../../images/warden7.jpg"
import img8 from "./../../images/warden8.png"
import img9 from "./../../images/warden9.jpg"
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
    Row,
    P,
    P1,
    SubWardensContainer,
    SbwarednCard,
    ContactImgContainer,
    ContactImg,
    ContactName,
    ContactHostelName,
    ContactDetailRow,
    ConactIconContainer,
    ContactDetailItem

} from "./SubWardensStyle";



const SubWardens = () => {

    const subWardens = [
        {
            img:`${img1}`,
            name: "Mrs. M.H.C. Priyadarshani",
            hostel: "Wellamadama 01 Girls’ Hostel",
            mobile:"+94718560738",
            email:"priyadarshani@gmail.com"
        },
        {
            img:`${img2}`,
            name: "Mrs. Shamini Karunarathne",
            hostel: "Wellamadama 02 Girls’ Hostel",
            mobile:"+94716721961",
            email:"shamini@gmail.com"
        },
        {
            img:`${img3}`,
            name: "Mrs. Chamila Jayalal",
            hostel: "Wellamadama 03 Girls’ Hostel",
            mobile:"+94719364151",
            email:"chamila@gmail.com"
        },
        {
            img:`${img4}`,
            name: "Ms. A. P. Hemanthi",
            hostel: "Eliyakanda New Girls’ Hostel",
            mobile:"+94714469525",
            email:"hemanthi@gmail.com"
        },
        {
            img:`${img5}`,
            name: "Mrs. P Kumarasingha",
            hostel: "Eliyakanda Old Girls’ Hostel",
            mobile:"+94702519055",
            email:"shamini@gmail.com"
        },
        {
            img:`${img6}`,
            name: "Mrs. Nirmala Wijerathna",
            hostel: "Pamburana 02 Girls’ Hostel",
            mobile:"+94714994092",
            email:"nirmala@gmail.com"
        },
        {
            img:`${img7}`,
            name: "Mr. Srinath Dissanayake",
            hostel: "Eliyakanda New Boys’ Hostel",
            mobile:"+94718153801",
            email:"srinath@gmail.com"
        },
        {
            img:`${img7}`,
            name: "Mr. Srinath Dissanayake",
            hostel: "Eliyakanda Old Boys’ Hostel",
            mobile:"+94718153801",
            email:"srinath@gmail.com"
        },
        {
            img:`${img8}`,
            name: "Mr. Chandana Samarawickrama",
            hostel: "Meddawatta Boys’ Hostel",
            mobile:"+94715549398",
            email:"chandana@gmail.com"
        },
        {
            img:`${img9}`,
            name: "Mr. Kularathna",
            hostel: "Walauwatta Bikkhu Hostel",
            mobile:"+94710396105",
            email:"nirmala@gmail.com"
        }
    ]

    return (
        <Des>
            <Sec>
                <H1>Sub-Wardens</H1>
            </Sec>
            <Sec>
                <SubWardensContainer >
                    {
                        subWardens.map(warden => {
                            console.log("warden")
                            return (
                                
                                <SbwarednCard data-aos="zoom-in">
                                <ContactImg src={ warden.img}/>
                                    <ContactName> {warden.name} </ContactName>
                                    <ContactHostelName> {warden.hostel} </ContactHostelName>
                                    <ContactDetailRow>
                                        <ConactIconContainer> <HiOutlinePhone color={ "#339BFF"}/> </ConactIconContainer>
                                        <ContactDetailItem>{ warden.mobile}</ContactDetailItem>
                                    </ContactDetailRow>
                                    <ContactDetailRow>
                                        <ConactIconContainer> <HiOutlineMail color={ "#339BFF"}/> </ConactIconContainer>
                                        <ContactDetailItem>{ warden.email}</ContactDetailItem>
                                    </ContactDetailRow>
                                </SbwarednCard>
                               
                            )
                        })
                    }
                </SubWardensContainer>
                    
                
                
                
            </Sec>
        </Des>
    );
}


{/* <Slider data-aos="zoom-in">
                                    <div>
                                        <Img src={img1} alt="" />
                                    </div>
                                    <SubSec>
                                        <Sec1>
                                            <ContactTitle>
                                                <H4>Mrs. M. H. C. Priyadarshani</H4>

                                            </ContactTitle>

                                            <Text><P1>Wellamadama 01 Girls’ Hostel</P1></Text>
                                            <ContactInfo>
                                                <IconContainer><Icon><HiOutlinePhone color={"#339BFF"} /></Icon></IconContainer>
                                                <ContactContainer>+94716721961</ContactContainer>
                                            </ContactInfo>
                                            <ContactInfo>
                                                <IconContainer><Icon><HiOutlineMail color={"#339BFF"} /></Icon></IconContainer>
                                                <ContactContainer>priyadarshani@gmail.com</ContactContainer>
                                            </ContactInfo>



                                        </Sec1>
                                    </SubSec>
                                </Slider> */}

 
export default SubWardens;