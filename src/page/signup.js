
import Bgpet from "../image/bgpet.jpg"
import Signupform from "../components/loginforms/signin2";
import Signinn from "../components/loginforms/signup2";

const Signpg = () => {
    return (
        
        <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
            <div className="row loginform shadow ">
            <Signupform />
            <Signinn />
            </div>
        </div>
        
    )
}

export default Signpg;