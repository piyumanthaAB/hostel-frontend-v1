
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as b from './LinkBtnElements';

const LinkBtn = (props) => {
    return ( 
        
        <b.container>
            <b.LinkIcon><FontAwesomeIcon icon={props.btnIcon}/></b.LinkIcon>
            <b.LinkButton>{ props.btnTxt}</b.LinkButton>
        </b.container>

     );
}
 
export default LinkBtn;