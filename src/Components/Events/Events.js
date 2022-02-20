import {eventImages} from "../../Data/Content";
import {
        EventContainer,
        Event,
        ImageSection,
        Description,
        P,
        Image,
        Header,
        Head
} from "./EventsStyle";
const Events = () => {
    return ( 
        <EventContainer>
            <Head data-aos="fade-up">
                <Header>
                    Events
                </Header>
            </Head>
            <Event>
                <ImageSection>
                    <Image src={eventImages[0].photo}/>
                </ImageSection>
                <Description>
                    <P>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque explicabo veritatis, laudantium eveniet quod maiores ut in alias tenetur. A modi enim quis voluptatibus repellat eius corrupti ad quam consequatur hic. Dolorum, quasi aliquid.</P>
                </Description>
            </Event>
            <Event>
                <ImageSection>
                    <Image src={eventImages[1].photo}/>
                </ImageSection>
                <Description>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque explicabo veritatis, laudantium eveniet quod maiores ut in alias tenetur. A modi enim quis voluptatibus repellat eius corrupti ad quam consequatur hic. Dolorum, quasi aliquid.</P>
                </Description>
            </Event>
            <Event>
                <ImageSection>
                    <Image src={eventImages[2].photo}/>
                </ImageSection>
                <Description>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque explicabo veritatis, laudantium eveniet quod maiores ut in alias tenetur. A modi enim quis voluptatibus repellat eius corrupti ad quam consequatur hic. Dolorum, quasi aliquid.</P>
                </Description>
            </Event>
        </EventContainer>
     );
}
 
export default Events;