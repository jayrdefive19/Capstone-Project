import Navigation from "../navigation/navigation";
import bgimage from '../../image/vet.jpg'

const About = () => {
    return (
        <div >
            <Navigation />
            <div class="container-fluid pt-5 cover2" style={{ backgroundImage: `url(${bgimage})`}}>
            </div>
            <div class="container-fluid pt-5 ">
            </div>
       
        </div>
    )
}

export default About;