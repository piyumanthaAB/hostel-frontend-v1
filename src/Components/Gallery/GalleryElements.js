import styled from "styled-components";


// export const GallaryContainer =styled.div`
//     width: 100%;
//     height: auto;
//     margin-bottom: 5% ;
    
// `

// export const GallaryHeader =styled.div`
//         letter-spacing:8px;
//         text-align: center;
//         font-size: 40px;
//         color: #339BFF;
//         font-variant: small-caps;
//         font-weight: bold;
//         position: relative;
//         left: 0;
//         margin-bottom: 40px;
//         border-bottom: 3px solid #49483E;
//         display: inline;
// `
// export const GallaryRows =styled.div`
//    display:flex;
//    flex-wrap:wrap;
//    justify-content:center;
//    background:#E5DFFF;
//    margin:0 55px;
//    padding: 5% 0;
//    border-radius:10px;
//    box-shadow: 0px 10px 20px 2px #0000005d;
//    margin-top: 3%;
// `
// export const GallaryFirstRow =styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom:10px;
// `
// export const GallatyImgContainer =styled.div`
//     width: 33%;
// `
// export const GallaryImg =styled.img`
//     &{  width: 350px;
//         height: 350px;
//         //padding: 10px;
//         margin: 10px 40px;
//         border-radius:40px;
//         transition: 0.3s;
//         position: relative;
//     }
//     &::before{
//             position: absolute;
//             height: 100%;
//             z-index:2;
//             content: '';
//             top: 0%;
//             right: 0%;
//             bottom: 0%;
//             left: 0%;
//             background-color: #339BFF;
//         }
//     &:hover{
//         transform: translateY(-10px);
//         cursor: pointer;
//     }

// `
export const Container = styled.div`
    padding: 0 5%;
    ${'' /* background-color: #fff; */}
    ${'' /* background-color: #339BFF; */}
    background: linear-gradient(202deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
    z-index: 1;
    ${'' /* margin: 2% 0 8% 0; */}
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    margin-top: -7%;
    padding: 10rem 0 ;


`
export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #49483E;
  letter-spacing:8px;
  font-weight: bold;
  position: relative;
  left: 0;
  display: inline;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
`
export const Row = styled.div` 
  padding: 0 4px;
  margin-top: 2%;
   -webkit-column-count:5; /* split it into 5 columns */
   -webkit-column-gap:20px; /* give it a 5px gap between columns */
   -moz-column-count:5;
   -moz-column-gap:20px;
   column-count:5;
   column-gap:20px;
`
// export const Column = styled.div`
//   -ms-flex: 25%; /* IE10 */
//   flex: 25%;
//   max-width: 50%;
//   padding: 0 4px;
// `
export const Image = styled.img`
  &{  margin: 8px;
      transition: 0.5s ease-out;
      width: 50% !important;
      height: 150px !important;
  }
  &:hover{
    cursor: pointer;
    transform: scaleX(0.95);
  }
`
