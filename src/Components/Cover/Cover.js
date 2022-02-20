import React from 'react';
import styled from 'styled-components';
// import image2 from "./../../images/img2.jpg";
// import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
//import img3 from "./Images/oleg-illarionov-q9q8bi0Aw7o-unsplash.jpg";
//import img4 from "./Images/vitalii-tkachenko-lQ9lHXL73e8-unsplash.jpg";

import CoverContent from './CoverContent';
const Cover = (props) => {
    // const Slider=styled.div`
    //     width: 100%;
    //     height: 100vh;
    //     z-index: 2;
    // `
    const Before = styled.div`
        &{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100vh;
            top: 0%;
            margin-top: 0;
            z-index: 10000;
            position: absolute;
            clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        }
        &::before{
            position: absolute;
            height: 100%;
            z-index:2;
            content: '';
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            background: linear-gradient(202deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
            ${'' /* background:linear-gradient(#339BFF,#4242425d); */}
            opacity: 0.5;
            ${'' /* border-bottom-right-radius: 20%; */}
        }
            @media(max-width : 1110px){
                &{
                    height: 100vh;
                }&::before{
                    height: 100%;

                }
        }
        `
        const CoverImage = styled.img`
            width: 100%;
            height: 100%;
            ${'' /* border-bottom-right-radius: 20%; */}
        
        `
    return ( 
        <Before>
            <CoverImage src={props.CoverImage1.photo}/>
            <CoverContent text={props.Cover1text}/>
        </Before>
     );
}
 
export default Cover;