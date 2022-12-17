import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loginpg from './page/login';

import Homepg from './page/homepg';
import Profile from './page/profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signpg from './page/signup';
import Aboutpg from './page/about';
import Services from './page/services';
import Contact from './page/contact'
import Vetslog from './page/vetslogin';
import Vetsdash from './page/vetsdash';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepg/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/login' element={<Loginpg/>} />
          <Route path='/signup' element={<Signpg/>} />
          <Route path='/about' element={<Aboutpg/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/vetslog' element={<Vetslog/>}/>
          <Route path='/vetsdash' element={<Vetsdash/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
