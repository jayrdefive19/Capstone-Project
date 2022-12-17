
import Intro from "../components/homepage/intro";
import Navigation from "../components/navigation/navigation";
import Vetdoc from '../image/vetdoc.webp'
import Vet from '../image/vet.jpg'

const Services = () => {
    return (
        <div className="container-fluid gx-0">
            
            <Navigation/>

            <div className="homecover" style={{ backgroundImage: `url(${Vet})` }}>
                <br/><br/><br/>
                <div className="title container text-white">
                <h1 className="text-white">Services</h1>
                </div>
            </div>
            <div className="container">
            
            <div className="row content mt-5">
                <div className="col servicespic" style={{ backgroundImage: `url(${Vetdoc})` }}>
                </div>
                <div className="col mt-5 pt-5">
                    <h3>ONLINE CONSULTING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className="btn btn-primary">
                        Consult Now
                    </button>
                </div>
            </div>
            <div className="row content">
                
                <div className="col mt-5 pt-5">
                    <h3>SCHEDULING APPOINTMENT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className="btn btn-primary">
                        Learn How
                    </button>
                </div>
                <div className="col servicespic" style={{ backgroundImage: `url(${Vetdoc})` }}>
                </div>
            </div>
            <div className="row content">
                <div className="col servicespic" style={{ backgroundImage: `url(${Vetdoc})` }}>
                </div>
                <div className="col mt-5 pt-5">
                    <h3>MANAGE YOUR PET PROFILE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className="btn btn-primary">
                        Sign up now
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services;