import cover from '../../image/cover.webp'
import Slideshow from '../slideshow/slideshow';
import './profile.css'


const Petprofile = () => {
    return (
        <div className="col text-center ">
            <div className='cover' style={{ backgroundImage: `url(${cover})` }}></div>
            <div className='container'>
                <div className='row p-4'>
                    <div className='col pt-5'>
                    <table>
                    <thead>
                        <th colspan="3">PET'S INFORMATION</th>
                    </thead>
                    <tbody>
                        <tr><td >Breed</td><td>Askal</td></tr>
                        <tr><td >Sex</td><td>Male</td></tr>
                        <tr><td >Age</td><td>3 years</td></tr>
                        <tr><td >Birthplace</td><td>Naga City</td></tr>
                        <tr><td >Color / Markings</td><td>Shiny Black</td></tr>        
                    </tbody>
                    </table>
                    <table>
                    <thead>
                        <th colspan="3">ADDITIONAL INFORMATION</th>
                    </thead>
                    <tbody>
                        <tr><td >Exercise</td><td>Walking/Jogging</td></tr>
                        <tr><td >Hobbies</td><td>Playing with Siblings</td></tr>
                        <tr><td >Grooming</td><td>Love getting brushed</td></tr>
                        <tr><td >Weight</td><td>15kilo</td></tr>
                        <tr><td >Sociability</td><td>Introvert</td></tr>
                        <tr><td >Trainability</td><td>Excellent</td></tr>    
                    </tbody>
                    </table>
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petprofile;