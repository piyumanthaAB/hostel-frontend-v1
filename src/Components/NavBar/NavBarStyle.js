import styled from "styled-components";
import { motion }  from 'framer-motion';

export const NavBar=styled(motion.div)`
        margin: 0; 
        padding: 0 2rem;
        font-family: "Lato", sans-serif;
    `
export const Nav=styled(motion.nav)`
        width: 25%;
        height: 100vh;
        position: fixed;
        right: 0px;
        top: 0;
        /* background: #339BFF; */
        background: linear-gradient(202deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
        transition: 0.5s;
        z-index: 2000000000;
        /* width: 200px;
        height: 100vh;
        position: fixed;
        right: -250px;
        top: 0;
        background: #339BFF;
        transition: 0.5s;
        z-index: 2; */
    `
export const Links = styled.div`
        ${'' /* margin: 0px 5px; */}
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-family: "Lato", sans-serif;
    `
export const Ul=styled.ul`
        /* list-style-type: none;
        text-align: right;
        width: 250px;
        height: 100vh;
        border-radius: 5px;
        background:#339BFF;
        text-align: center;
        position: fixed;
        right: 0px;
        top: 50px;
        cursor: pointer;
        z-index: 3; */
        position: relative;
        /* right: 15%; */
        padding: 0 3rem 0;
        margin-top: 40%;
        font-family: "Lato", sans-serif;
        font-weight: 100;
    `
// export const LinksH1=styled.h1`
//         margin-left:100px;
//         color:#FFF;
//         text-align:left;
//         letter-spacing:2px;
//         z-index: 2;
//     `
export const Li=styled.li`
    &{
        list-style: none;
        margin: 40px 10px;
        text-align: right;
        font-family: "Lato", sans-serif;
        letter-spacing: 0.1rem;
        font-weight: 300;
    }
    &:hover .Ho{
        width: 100%;
    }
    `
export const Logo = styled.img`
        width: 80px;
        height: 110px;
        position: absolute;
        top: 5%;
        ${'' /* margin-left:3rem; */}
        z-index: 20000000000;
        
    `
export const Span = styled.span`
        width: 0%;
        height: 2px;
        top: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        ${'' /* background: #FFF; */}
        background: #FFF;
        z-index: -1;
        transition: 0.5s;
    `
export const Menu = styled.img`
        width: 20px;
        margin-top: 15px;
    `
export const Menubtn = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background:#339BFF;
        ${'' /* background:#333; */}
        text-align: center;
        position: fixed;
        right: 30px;
        top: 5%;
        cursor: pointer;
        z-index: 300000000000;
    `
    