import styled from "styled-components";
import { Link } from "react-router-dom"

export const container = styled.div`
        display: flex;
        justify-content: justify;
        align-items:center;
        flex-direction:column;
        width:100%;
        flex-wrap-wrap;
        height:fit-content ;
        ${'' /* background-color:red ; */}
`

export const LinkButton = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        padding:2rem 4rem ;
        text-decoration: none;
        font-size: 18px;
        font-family: "Lato", sans-serif;
        font-weight: 700;
        background: linear-gradient(202deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
        color:#eee ;
        border-radius: 10px;
`
export const LinkIcon = styled.div`
        justify-content:center;
        font-size:200px;
        display:flex;
        color: #339BFF;
        padding:5rem;
`