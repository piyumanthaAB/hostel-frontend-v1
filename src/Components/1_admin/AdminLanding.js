import * as a from './AdminLandingComponents';
import  LinkBtn  from './../1_admin/buttons/LinkBtn';
import { faCog, faCogs, faUserCog } from '@fortawesome/free-solid-svg-icons';
const AdminLanding = () => {
    return ( 

        <a.container>
            
            <LinkBtn btnTxt={"Manage Users"} btnIcon={faUserCog}/>
            <LinkBtn btnTxt={ "Manage Hostels"} btnIcon={faCogs}/>
            
        </a.container>

     );
}
 
export default AdminLanding;