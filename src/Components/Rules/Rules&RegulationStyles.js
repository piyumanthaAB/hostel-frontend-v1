import styled from "styled-components"
export const RulesContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 30%;
  padding: 20% 0 10% 0;

`
export const Head = styled.div`
        letter-spacing:8px;
        text-align: left;
        font-size:2rem;
        color: #49483E;
        font-variant: small-caps;
        font-weight: 100;
        position: relative;
        left: 0;
        display: inline;
        text-transform: uppercase;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
export const RulesBody = styled.div`
  margin-top: 1%;
  padding: 1% 5%;
`
export const Rules = styled.div`
  text-align:left;
  padding-bottom: 3%;
  font-family: "Lato", sans-serif;
  color: #777;
  font-size: 1rem;
  line-height: 1.5rem;
`
export const Desc = styled.h4`
  text-align: center;
  padding-bottom: 3%;
  font-size: 1rem;
  ${'' /* font-style: italic; */}
  font-family: "Lato", sans-serif;
  color: #333;
`