import CountUp from 'react-countup';
import { useState,useEffect } from "react";
import {
    Div,
    H1,
    MainSubSec,
    Sec,
    SubSec,
    H2,
    P,
    P1,
    HR1,
    Count
}from "./FacilitiesStyles";
const Facilities = () => {
    
    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset >= 400){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, []);
    return ( 
        <Div>
            <Sec>
                <H1  data-aos = "fade-up">Hostel Facilities</H1>
            </Sec>
            <Sec>
                <P1>The University hostels provide enormous facilities aiming at creating a good learning environment for residential students. Internal hostels are equipped with high standard bed rooms, meeting area, common area, playing area (carom) and canteen. For each room (depending on number of students), two studying tables/chairs and towel racks are provided.  In addition, good number of dustbins are placed for proper waste disposal. </P1>
            </Sec>
            <Sec>
                <MainSubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={10} duration={1}/></Count> }</H2>
                    <P>Faculties</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={6547} duration={1}/> </Count>}</H2>
                    <P>Students</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={15} duration={1}/></Count> }</H2>
                    <P>Sub-wardens</P>
                </SubSec>
                </MainSubSec>
            </Sec>
            {/* <HR1 />  */}
        </Div>
     );
}
 
export default Facilities;