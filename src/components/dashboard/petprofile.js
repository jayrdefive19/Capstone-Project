import cover from '../../image/coverdog.jpg'
import Slideshow from '../slideshow/slideshow';
import './profile.css'

const Petprofile = () => {
    return (
        <div className="col text-left">
            <div className='cover' style={{ backgroundImage: `url(${cover})` }}></div>
            <div className='container'>
                <div className='row p-4'>
                    <div className='col p-2'>
                    <Slideshow/>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petprofile;