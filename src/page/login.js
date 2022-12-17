import Signin from "../components/loginforms/signin";
import Signup from "../components/loginforms/signup";
import Bgpet from "../image/bgpet.jpg"

const Loginpg = () => {
    return (
        
        <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
            <div className="row loginform shadow ">
            <Signup />
            <Signin />
            </div>
        </div>
        
    )
}

export default Loginpg;