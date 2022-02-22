import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  Container,
  Header,
  Button,
  RulesSection,
  RulesDescription,
  Rule,
} from "./RulesElements";


const Rules = () => {
  const ScrollToTop = ()=>{
    if(window.pageYOffset > 200){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
  return (
    <Container>
      <RulesSection>
        <Header data-aos="fade-up" >
          Rules & Regulations
        </Header>
      </RulesSection>
      <RulesSection>
        <RulesDescription data-aos="fade-up" >
          The University of Ruhuna operates under the provisions of the
          Universities Act No. 16 of 1978 and the Universities (Amendment) Act
          No. 7 of 1985. Accordingly, the university has a Chancellor, a Vice
          Chancellor, Officers and Authorities to draw plans, make decisions,
          and monitor the implementation of such decisions in the overall
          management
        </RulesDescription>
        <Rule data-aos="fade-right">
        Prior to occupying the room, each student should check the goods in the room and its (working) condition and sign the register. All students occupying the rooms are jointly responsible for the contents of rooms. Any goods given should not be removed from the hostel. Any other goods, though permitted within university premises, should not be admitted to rooms

        </Rule>
        <Rule data-aos="fade-right">
        Resident students should occupy the rooms assigned to them and should not change rooms without the permission of the authority .
        </Rule>
        <Rule data-aos="fade-right">
        Furniture, equipment, lamps, wires, walls doors and windows in the rooms should not be damaged or defaced. Any such damages will be charged from relevant students. 
        </Rule>
        <Rule data-aos="fade-right">
        In any case/emergency, keys of the rooms and other goods are to be personally handed over to the sub-wardens. All personal belongings should be handled according to the instructions given by sub-wardens. </Rule>
        
      </RulesSection>
      <RulesSection>
        <Button onClick={ScrollToTop} data-aos="fade-right"><Link to = "/RulesandRegulation" className="lin">See More  </Link> <HiArrowNarrowRight color={"#333"} /> </Button>
      </RulesSection>
    </Container>
  );
};

export default Rules;
