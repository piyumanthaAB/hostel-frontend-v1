import * as b from './LinkBtnElements';

const LinkBtn = (props) => {
    return ( 
        
        <b.container>
            <b.LinkButton>{ props.btnTxt}</b.LinkButton>
        </b.container>

     );
}
 
export default LinkBtn;