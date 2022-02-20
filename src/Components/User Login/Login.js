import { HiOutlineFingerPrint,HiOutlineMail,HiOutlineEyeOff } from "react-icons/hi";
import img from './../../images/login/login_cover.jpg';
import * as L from './LoginElements';

const Login = () => {
    return (
        <L.LoginContainer>
            <L.LoginTitleContainer>

                <L.LoginMainTitle>Login</L.LoginMainTitle>
                <L.LoginSecondaryTitle>Hello! Welcome to the Login.</L.LoginSecondaryTitle>
            </L.LoginTitleContainer>
            <L.Login>
                <L.LoginForm>
                    <L.LoginFormGroup>
                        <L.LoginFormLabel>Email</L.LoginFormLabel>
                        <L.LoginFormInput type="email" placeholder="Enter Email" />
                        <L.FormIcon> <HiOutlineMail color={"#555"}/> </L.FormIcon>
                    </L.LoginFormGroup>
                    <L.LoginFormGroup>
                        <L.LoginFormLabel>Password</L.LoginFormLabel>
                        <L.LoginFormInput type="password" placeholder="Enter Password" />
                        <L.FormIcon> <HiOutlineEyeOff color={"#555"}/> </L.FormIcon>
                    </L.LoginFormGroup>
                    <L.LoginFormGroup>
                        <L.FormSubmitBtn>Login</L.FormSubmitBtn>
                        <L.FormPasswordReset to="/password-reset">Forgot Password ?</L.FormPasswordReset>
                    </L.LoginFormGroup>
                </L.LoginForm>
            </L.Login>
        </L.LoginContainer>
    )
}
 
export default Login;