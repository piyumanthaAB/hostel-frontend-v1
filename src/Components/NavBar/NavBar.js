import img from "./../../images/unilogo.png";
import { Link } from "react-router-dom";
import img1 from "../../images/menu.png";
import img2 from "../../images/close.png";
import { useState } from "react";
import { HiOutlineMenuAlt2 ,HiOutlineHome,HiOutlineClipboardCheck} from "react-icons/hi";
import { AnimatePresence } from 'framer-motion';

import { 
            NavBar,
            Nav,
            Links,
            Ul,
            Li,
            Logo,
            Span,
            Menu,
            Menubtn } from "./NavBarStyle";
// import { useState,useEffect } from "react";
const Navbar = () => {
    const scrollToTop = ()=>{
        if(window.pageYOffset > 200){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
    const [visiblity,setVisible] = useState(false);
    const Visible = ()=>{
        setVisible(true);
    }
    const Invisible = () =>{
        setVisible(false);
    }
    return (
        <AnimatePresence>
            <NavBar>
                <Links>
                    <Logo src={img} alt="" />
                    {/* <HiOutlineMenuAlt2 color={"#333"} /> */}
                    {/* <LinksH1>University Of Ruhuna<br />Hostel Management System</LinksH1> */}
                </Links>
                {visiblity ?
                
                    <Nav
                        initial="hidden"
                        animate="visible"
                        exit={{
                            y: '-100vh',
                            opacity: 0
                        }}
                    >
                        <Ul>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/">  Home<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/under-construction">  Facilities<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/RulesandRegulation">Rules & Regulations<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/under-construction">Maintenance<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible() }}><Link to="/WardensandSubWardens">Wardens & SubWardens<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible() }}><Link to="/contact-us">Contact Us<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { scrollToTop(); Invisible() }}><Link to="/login">Login<Span className="Ho"></Span></Link></Li>
                        </Ul>
                    </Nav>
                
                    : false
                }
                <Menubtn onClick={visiblity ? Invisible : Visible}><Menu src={visiblity ? img2 : img1} alt="" /></Menubtn>
            </NavBar>
        </AnimatePresence>
    );
}
 
export default Navbar;