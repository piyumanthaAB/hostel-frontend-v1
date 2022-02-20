import { Divsec,Button } from "../Button/LoginButtonStyle"
const LoginButton = () => {
    return ( 
        <Divsec>
            {/* <LoginBtn to="/login" >Login</LoginBtn> */}
            <Button to="/login"  data-aos = "zoom-in">Login</Button>
        </Divsec>
     );
}
 
export default LoginButton;