import { Link } from 'react-router-dom';
import Profpic from '../../image/dog.webp'
import Logo from '../../logo.png';


const Sidebar = () => {
    return (
        <div className="sidebar col-2 p-3 text-center">
            <Link to='/' style={{textDecoration:'none' }} className="text-warning">
            <img className='sidepad' src={Logo} alt="logo" />
            </Link>

            <div className='text-center'>
            
            <div className="profilepic" style={{ backgroundImage: `url(${Profpic})` }}>
            </div>
            <p style={{marginBottom: '-2px'}}>Welcome,</p>
            <span className='name text-warning'> Jayr</span>

            <div className='proflink mt-3'>PET'S PROFILE</div>
            <div className='proflink'>MESSAGES</div>
            <div className='proflink'>HEALTH RECORD</div>
            <div className='proflink'>SCHEDULES</div>
            <div className='proflink'>DOCUMENTS</div>
            </div>
        </div>
    )
}

export default Sidebar;