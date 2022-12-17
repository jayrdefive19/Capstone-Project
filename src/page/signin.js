import Signin from "../components/loginforms/signin";
import Signup from "../components/loginforms/signup";

const Loginpg = () => {
    return (
        
        <div className="container-fluid loginpg">
            <div className="row loginform shadow ">
            <Signin />
            <Signup />
            
            </div>
        </div>
        
    )
}

export default Loginpg;