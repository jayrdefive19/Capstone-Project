
import './navigation.css';
import Vetdoc from '../../image/doctors_cover.jpg'
import Team from '../../image/vetdoc.webp'

const Info = () => {
    return (
        <div>
        <div className="homecover" style={{ backgroundImage: `url(${Vetdoc})` }}>
                <br/><br/><br/>
                <div className="title container text-white">
                <h1 className="text-white">About Us</h1>
                </div>
            </div>
            <div className="container">
            
            <div className="row content mt-5 gx-5">
                <div className="col servicespic pe-5" style={{ backgroundImage: `url(${Team})` }}>
                </div>
                <div className="col mt-5 ps-5 pt-5">
                    <h3>PH Dogtors</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className="btn btn-primary">
                        Consult Now
                    </button>
                </div>
            </div>
            </div>
            </div>
    )
    
}

export default Info;