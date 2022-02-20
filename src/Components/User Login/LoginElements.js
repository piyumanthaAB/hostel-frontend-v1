import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    ${'' /* background-color: #fff; */}

    background: linear-gradient(60deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
`
export const LoginTitleContainer = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    ${'' /* justify-content: flex-start; */}
`

export const LoginMainTitle = styled.div`
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    color: #fff;
    letter-spacing: 0.1rem;
    margin: 0.5rem 0 ;

`
export const LoginSecondaryTitle = styled.div`
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.1rem;
`

export const Login = styled.div`
    width: 30%;
    min-height: 50vh;
    background-color: #fff;
    ${'' /* background: linear-gradient(60deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%); */}
    margin: 1rem 0;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoginCover = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
`

export const LoginCoverImg = styled.img`
    width: 50%;
    height: auto;
`
export const LoginForm = styled.form`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* background-color: green; */}
`

export const LoginFormGroup = styled.div`
    width: 80%;
    ${'' /* min-height: 1rem; */}
    ${'' /* background-color: #eee; */}
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 0.5rem 0;
    position: relative;
`
export const LoginFormLabel = styled.label`
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: #444;
    ${'' /* letter-spacing: 0.1rem; */}
    margin-left: 1rem;
`

export const LoginFormInput = styled.input`
   width: 80%;
   padding: 0.5rem 0.95rem;
   font-size: 0.8rem;

   border: solid 3px #777;
  border-radius: 35px;
    transition: all 0.2s;
   margin: 0.5rem 0;
   font-family: "Lato", sans-serif;

   &::placeholder{
   font-family: "Lato", sans-serif;
   font-weight: 700;
   color: #bbb;

   }


   &:focus{
       outline: none;
        transition: all 0.2s;

       border: solid 3px transparent;
       background-image: linear-gradient(white,white), linear-gradient(60deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);;
        background-clip: padding-box, border-box;
        background-origin: border-box;
   }
`

export const FormIcon = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 40%;
    right: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3  rem;
`
export const FormSubmitBtn = styled.button`
    width: 50%;
    padding: 0.5rem 0.75rem;
    background: linear-gradient(270deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
    outline: none;
    border: none;
    border-radius: 35px;
    margin: 0 auto;
   font-family: "Lato", sans-serif;
   color: #fff;
   font-weight: 400;
   font-size: 1rem;
   margin: 0 auto 1rem ;

   &:hover{
       cursor: pointer;
   }
`

export const FormPasswordReset = styled(Link)`
        font-family: "Lato", sans-serif;
        font-weight: 500;
        background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 0.8rem;
   text-decoration: none;
   margin: 0 auto;
`

