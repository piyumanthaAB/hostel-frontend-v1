import styled from "styled-components"

export const IconContainer = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0;
    color: red;
    
`
export const Icon = styled.p`
    ${'' /* background-color: red; */}
`

export const ContactContainer = styled.div`
    width: 100%;
    font-family: "Lato", sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    color: #555;
    
`

export const Des = styled.div`

        margin-top: 50%;
    `
export const Sec = styled.div`
        width: 100%;
        margin-bottom : 5%;
        display: flex;
        justify-content: center;

    `
export const Slider=styled.div`
        height: 300px;
        width: 300px;
        z-index:0;
        position: relative;
        padding: 1.5%;
        background-color: #fff;
        margin: 0 3%;
        box-shadow: 0px 5px 20px 3px #339BFF5d;
    `
export const Img = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 50%;
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
        color: #49483E;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
        ${'' /* background-image: linear-gradient(
        to right,
        #339BFF5d,
        #339BFF
        );
        transition: all 0.2s;
        -webkit-background-clip: text; */}
    `
export const H4 = styled.h4`
        font-size: 1rem;
        text-align: center;
        color: #333;
        font-family: "Lato", sans-serif;
        font-weight: 700;
    `
// export const P = styled.p`
//         font-size: 15px;
//         color:#484747;
//         font-family: "Nunito", sans-serif;
//         text-align: left;
//         margin-left: 5px;
//     `
export const Sec1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const ContactInfo = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    align-items: center;
    padding: 0.3rem 0;
`
export const ContactTitle = styled.div`
    width: 100%;
    text-align: center;
`

// export const Sec1 = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     `
// export const Icon = styled.div`
//         &{
//         font-size: 20px;
//         padding: 0 10px;
//         cursor: pointer;
//         }
//         &:active{
//             transform: scale(0.8);
//         }
//     `
export const SubSec = styled.div`
        margin: 5% 0;
    `