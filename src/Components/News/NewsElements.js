import styled from "styled-components";


export const NewsContainer = styled.div`
    width: 100%;
    background:linear-gradient(#ffffff,#339BFF);
    height: 100%;
    padding: 8% 0;
`;
export const NewsHead = styled.div`
        letter-spacing:8px;
        text-align: center;
        font-size: 40px;
        color: #fff;
        font-variant: small-caps;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 100;
        position: relative;
        left: 0;
        top: 25%;
        display: inline;
`;
export const NewsBody = styled.div`
  margin-top: 3%;
  padding: 0 5%;
  position: relative;
  color:#ffffff;
  font-family: "Nunito", sans-serif;
  opacity: 0.8;
  top: 25%;
`;
export const News = styled.div`
  text-align:center;
  margin-bottom:40px;
`;

export const Divsec = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `