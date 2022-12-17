

import Navigation from "../components/navigation/navigation";
import Vetdoc from '../image/vetdoc.webp'
import Vet from '../image/vet.jpg'

const Contact = () => {
    return (
        <div className="container-fluid gx-0">
            
            <Navigation/>

            <div className="homecover" style={{ backgroundImage: `url(${Vet})` }}>
                <br/><br/><br/>
                <div className="title container text-white">
                <h1 className="text-white">Contact</h1>
                </div>
            </div>
            <div className="container">
            Under development
   
            </div>
        </div>
    )
}

export default Contact;