import Signin from "../components/loginforms/signin";
import Signup from "../components/loginforms/signup";
import Vetslogg from "../components/loginforms/vets";
import Bgpet from "../image/bgpet.jpg"

const Vetslog = () => {
    return (
        
        <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
            <div className="row loginform shadow ">
            <Vetslogg/>
            </div>
        </div>
        
    )
}

export default Vetslog;