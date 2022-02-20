import styled from "styled-components";

export const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-top: 35%;
        padding: 15rem 0 10rem ;
        background-color: #fff;
        position: relative;
        z-index: 2;
        ${'' /* clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%); */}

    `
export const H1 = styled.h1`
        text-align: center;
        font-size: 2rem;
        color: #49483E;
        letter-spacing:8px;
        font-weight: bold;
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
export const MainSubSec = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `
export const Sec = styled.div`
        flex-basis: 100%;
        margin:10px;
        width: 100%;
    `
export const SubSec = styled.div`
        margin: 15px;
    `
    
export const H2 = styled.h2`
        margin: 0px 10px 20px 10px;
        font-size:50px;
        font-weight:400;
    `
export const P = styled.p`
        font-size:1rem;
        text-align: center;
        letter-spacing:6px;
        font-family: "Lato", sans-serif;
        text-transform: uppercase;
        color: #999;
`
export const P1 = styled.p`
        font-size: 17px;
        text-align: center;
        width: 80%;
        position: relative;
        left:10%;
        font-family: "Lato", sans-serif;
        opacity: 1;
        color: #999;
        line-height: 1.5rem;
    `
export const HR1 = styled.hr`
        width:80%;
        height:3px;
        background: #49483E;
        position:relative;
        
        ${'' /* //margin-left:44% */}
        top: -5%;
    `
export const Count = styled.div`
        font-family: "Lato", sans-serif;
        color: #49483E;
    `