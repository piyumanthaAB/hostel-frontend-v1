import styled from "styled-components"
export const EventContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 0 5rem;
`
export const Event = styled.div`
    width: 60%;
    height: 200px;
    margin: 3%;
    background-color: #fff;
    box-shadow: 0px 10px 20px 3px #339BFF5d;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewX(-20deg);
`
export const Head = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageSection = styled.div`
    flex-basis: 30%;
    width: 100px;
    height: 100px;
    transform: skewX(20deg);
`
export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
`
export const Description = styled.div`
    flex-basis: 70%;
    margin: 10% 10% 10% 0;
    transform: skewX(20deg);
`
export const P = styled.div`
   font-family: "Lato", sans-serif;
   color: #777;
   line-height: 1.5rem;
`
export const Header = styled.h1`
    letter-spacing:8px;
    text-align: center;
    font-size: 2rem;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`