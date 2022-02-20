import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContaner = styled.div`
    width: 100%;
    height: 100vh;
    ${'' /* min-height: 100vh; */}
    display: flex;
    ${'' /* flex-direction: column; */}
    justify-content: center;
    align-items: center;
    ${'' /* padding: 20rem 0; */}
`
export const NotFoundImageContainer = styled.div`
    width: 40%;
    ${'' /* min-height: ; */}
`

export const NotFoundImg = styled.img`
    width: 60%;
    height: auto;
`

export const NotFoundHeaderContainer = styled.div`
    width: 50%;
    display: block;
    line-height: 1rem;
`

export const NotFoundHeader = styled.p`
display: inline;
font-size: 10rem;
letter-spacing: 1rem;
font-weight: 700;
    text-transform: uppercase;
        font-family: "Lato", sans-serif;
        ${'' /* font-weight: 500; */}
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
` 

export const NotFoundText = styled.p`
        font-family: "Lato", sans-serif;
    color: #333;
    font-size: 2rem;
    font-weight: 900;
`
export const NotFoundSubText = styled.p`
        font-family: "Lato", sans-serif;
    color: #777;
    font-size: 1rem;
    font-weight: 500;
`
export const GoBack = styled(Link)`
    width: 5rem;
    background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
    padding: 0.5rem 3rem;
    margin: 2rem auto;
    text-decoration: none;
    color: white;
    border-radius: 35px;
    display: block;

` 

