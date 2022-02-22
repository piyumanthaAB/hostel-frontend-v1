import React from "react";
import {
          Container,
          Row,
          Header,
          Image
} from "./GalleryElements";

import img1 from "./../../images/image015.png";
import img2 from "./../../images/image008.jpg";
import img3 from "./../../images/image006.jpg";
import img5 from "./../../images/image010.jpg";
import img6 from "./../../images/image012.jpg";
import img7 from "./../../images/image014.jpg";

const Gallery = () => {
  return (
    <Container>
      <Header data-aos="fade-up">Gallery</Header>
        <Row>
          <Image src = {img1} data-aos="zoom-in"/>
          <Image src = {img2} data-aos="zoom-in"/>
          <Image src = {img3} data-aos="zoom-in"/>
          <Image src = {img5} data-aos="zoom-in"/>
          <Image src = {img7} data-aos="zoom-in"/>
          <Image src = {img6} data-aos="zoom-in"/>
          <Image src = {img6} data-aos="zoom-in"/>
          <Image src = {img5} data-aos="zoom-in"/>
          <Image src = {img7} data-aos="zoom-in"/>
      </Row>
    </Container> 
   );
}
 
export default Gallery;