import React, { useState } from 'react';
import bgimage from '../../image/bgimage.png'
import Consult from '../consult/consult'


const Intro = () => {
    let [change, setChange] = useState({display: 'none'});
    const sample = () =>{
        alert("Under development");       
    }
    

    return (
        <div>
        <div >
            <Consult display={change}/>
        </div>
        
        <div id="home" class="bg-primary container-fluid" style={{ backgroundImage: `url(${bgimage})` }}>
            <div class="intro container">
                <div class="col-6">
                    <h1>Digital Medicine for your Pet</h1>
                    <p class="">Bringing Digital Transformation For Filipino Pet owners </p>
                    <button onClick={sample} class="btn btn-light btn-outline-dark">SCHEDULE APPOINTMENTS</button>
                    <button onClick={()=>setChange(change={display: 'block'})} class="btn btn-dark ms-2 text-white"><strong>CONSULT ONLINE</strong></button>  
                </div>
            </div>
        </div>
        </div>
    )

}

export default Intro;