import * as c from './ContactUsElements' 
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Map from './Map';


const ContactUs = () => {
    return (
        <c.ContactUsContainer>
            
            <c.ContactUsHeadingContainer>
                <c.ContactUsPrimaryHeading>Contact &nbsp; Us</c.ContactUsPrimaryHeading>
                <c.ContactUsSecondaryHeading>
                    If you have any problems regarding our services please do not hesitate to contact us.
                </c.ContactUsSecondaryHeading>
            </c.ContactUsHeadingContainer>

            <c.MapContainer_>
                <Map/>
            </c.MapContainer_>

            <c.ContactDetailRow>
                <c.ContactCard>
                    <c.ContactCardLeft> <c.ContactIcon> <HiOutlineLocationMarker color={"1E6EFF"} /> </c.ContactIcon> </c.ContactCardLeft>
                    <c.ContactCardRight>
                        Student Affairs Branch <br />
                        University of Ruhuna <br />
                        Matara – 81000. SRI LANKA.</c.ContactCardRight>
                </c.ContactCard>
                <c.ContactCard>
                    <c.ContactCardLeft> <c.ContactIcon> <HiOutlineMail color={"1E6EFF"} /> </c.ContactIcon> </c.ContactCardLeft>
                    <c.ContactCardRight>
                        hms@admin.ruh.ac.lk
                    </c.ContactCardRight>
                </c.ContactCard>
                <c.ContactCard>
                    <c.ContactCardLeft> <c.ContactIcon> <HiOutlinePhone color={"1E6EFF"} /> </c.ContactIcon> </c.ContactCardLeft>
                    <c.ContactCardRight>
                        041 2 222681
                    </c.ContactCardRight>
                </c.ContactCard>
            </c.ContactDetailRow>

        </c.ContactUsContainer>
    );
}
 
export default ContactUs;