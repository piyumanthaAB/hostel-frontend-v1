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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore
          ad ipsam in fugiat odio reiciendis quod temporibus earum facere!
        </Rule>
        <Rule data-aos="fade-right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          molestiae magnam laboriosam aut officiis sed impedit excepturi
          voluptatum 
        </Rule>
        <Rule data-aos="fade-right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          molestiae magnam laboriosam aut officiis sed impedit excepturi
          voluptatum 
        </Rule>
        <Rule data-aos="fade-right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          molestiae magnam laboriosam aut officiis sed impedit excepturi
          voluptatum 
        </Rule>
      </RulesSection>
      <RulesSection>
        <Button onClick={ScrollToTop} data-aos="fade-right"><Link to = "/RulesandRegulation" className="lin">See More  </Link> <HiArrowNarrowRight color={"#333"} /> </Button>
      </RulesSection>
    </Container>
  );
};

export default Rules;
