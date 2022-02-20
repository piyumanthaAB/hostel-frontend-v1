import styled from "styled-components";


export const ContactUsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lato", sans-serif;
    padding: 5rem 0 0;

`
export const ContactUsHeadingContainer = styled.div`
    width: 80%;
`;

export const ContactUsPrimaryHeading = styled.p`
    text-transform: uppercase;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2rem;
`;

export const ContactUsSecondaryHeading = styled.p`
    font-weight: 300;
    color: #777;
    font-size: 1rem;
`; 

export const MapContainer_ = styled.div`
    width: 80%;
    background-color: #eee;
    min-height: 50vh;
    overflow: hidden;
    position: relative;
`;

export const ContactDetailRow = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`;

export const ContactCard = styled.div`
    width: 30%;
    padding: 1rem 1rem;
    ${'' /* background-color: #333; */}
    margin: 1rem 0;
    display: flex;
`;

export const ContactCardLeft = styled.div`
    flex: 0 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: #555; */}
`;

export const ContactCardRight = styled.div`
    flex: 0 1 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    color: #333;
    ${'' /* background-color: #777; */}
`;

export const ContactIcon = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`;



