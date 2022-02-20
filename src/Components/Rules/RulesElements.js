import styled from "styled-components";



export const Container = styled.div`
  display: block;
  ${'' /* background:linear-gradient(#ffffff,#339BFF); */}
  height:100%;
  /* position: relative;
  top: -300px; */
  z-index: -5;
  padding: 5%;
`;
export const Header = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: #333;
    letter-spacing:8px;
    display: inline;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

`;
export const RulesSection = styled.div`
  width: 80%;
  height: auto;
  font-size: 30px;
  font-weight: 600;
  padding-top: 3%;
  position: relative;
  left: 10%;
  /* color:#484747;
  font-family: "Nunito", sans-serif;
  opacity: 0.5; */
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const RulesDescription = styled.div`
  background:none;
  text-align:left;
  height: auto;
  font-size: 15px;
  font-weight: bold;
  line-height: 25px;
  margin: 0 20px ;
  font-style: italic;
  font-family: "Lato", sans-serif;
  color: #777;
`;
export const Rule = styled.div`
  background:none;
  width: 90%;
  height: auto;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align:left;
  margin: 20px;
  font-family: "Lato", sans-serif;
  color: #777;
  opacity: 0.8;
`;
// export const Divsec = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     `
export const Button = styled.button`
        &{
            ${'' /* width: 150px; */}
            height: 50px;
            cursor: pointer;
            background-color: #fff;
            font-weight:bold;
            text-decoration: none;
            z-index:1;
            border: none;
            border-radius: 50px;
            position: relative;
            font-size: 18px;
            top: 80%;
            font-family: "Nunito", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 4rem;
        } 
        & .lin{
          text-decoration: none;
          color: #49483E;
        }
        &:active{
            transform: scale(0.95);
        } 
    `