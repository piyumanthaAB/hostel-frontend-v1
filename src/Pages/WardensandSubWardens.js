import AcademicWardens from "../Components/AcademicWardens/AcademicWardens";
import Cover from "../Components/Cover/Cover";
import DropDown from "../Components/DropDown/DropDown";
import SubWardens from "../Components/SubWardnes/SubWardens";
const WardensandSubWardens = (props) => {
    return ( 
        <div>
            <Cover Cover1text={props.Covertext} CoverImage1={props.CoverImage} />
            <AcademicWardens/>
            <SubWardens/>
        </div>
     );
}
 
export default WardensandSubWardens;