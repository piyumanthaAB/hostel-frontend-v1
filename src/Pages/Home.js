import React from 'react';
import Cover from '../Components/Cover/Cover'; 
import Facilities from '../Components/Facilities/Facilities';
import Gallery from '../Components/Gallery/Gallery';
import News from '../Components/News/News';
import LoginButton from '../Components/Button/LoginButton';
import Rules from '../Components/Rules/Rules';
import Events from '../Components/Events/Events';


const Home = (props) => {
    return (
        <div className="container">
         <Cover Cover1text= {props.Covertext} CoverImage1 = {props.CoverImage}/>
         <LoginButton />
         <Facilities />
         <Gallery />
         <Rules/>
         {/* <News /> */}
         <Events/>
        </div>
    );
}
 
export default Home;