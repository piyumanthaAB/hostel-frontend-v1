import styled from 'styled-components';

const CoverContent = (props) => {
        const Sec = styled.div`
        position: absolute;
        top: 20%;
        z-index: 2;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 5%;
    `
    const Divsec = styled.div`
        flex-basis: 100%;
        
    `
    const H1 = styled.h1`
        font-size: 60px;
        color: #FFF;
        text-align: center;
        width: 100%;
        letter-spacing:10px;
        font-family: "Lato", sans-serif;
        font-weight: 400;
    `
    // const HR = styled.hr`
    //     width: 20%;
    //     height: 3px;
    //     background: #FFF;
    //     border: none;
    //     margin-bottom: 10px;
    //     margin-left:0%;
    // `
    const P = styled.p`
        text-align:center;
        color: #FFF;
        ${'' /* width:80%; */}
        
        margin-top: 0;
        margin-bottom: 5%;
        font-family: "Lato", sans-serif;
        opacity: 1;
        line-height: 150%;
        margin: 0 5% auto;
    `
    return ( 
            <Sec data-aos="fade-right">
                <Divsec>   
                    <H1>{props.text.header}</H1>
                    {/* <HR /> */}
                </Divsec>
                <Divsec>
                    <P>{props.text.desc}</P>
                </Divsec>
            </Sec>
     );
}
 
export default CoverContent;