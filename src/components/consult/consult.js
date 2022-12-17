
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './consult.css';

const Consult = (props) => {
    const [hide, setHide] = useState({display: 'none'});

    return (
      <div className="modal container-fluid" style={props.display} >
    <div id="myModal" class="modal container-fluid" >

    <div class="modal-content row">
    <div class="row mb-4 ">
        <div class="col">

        <span class="close" onClick={()=>setHide(hide={display:'none'})}>&times;</span>
        
        <p class="fw-bold">DIAGNOSIS AND PRESCRIPTION</p>
        <h3 class="text-start ">Ask a Veterinary Now</h3>
        </div>
    </div>
    <div class="row">
    
    <div class="col-6 m-6">
    
    <form>
        <div class="form-group">
        <label for="putName">Your Pet</label>
        <div class="row">
            <div class="col">
            <input type="email" class="form-control" id="putName" aria-describedby="emailHelp" placeholder="Name" />
            </div>
            <div class="col">
            <input type="email" class="form-control" id="putName" aria-describedby="emailHelp" placeholder="Species (eg. Cat, Dog, etc)" />
            </div>
        </div>
        
        </div><br />

        <div class="form-group">
        <label for="businessName">Owner's Name</label>
        <input type="email" class="form-control" id="businessName" aria-describedby="emailHelp" placeholder="" />
        </div><br />

        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="businessName" aria-describedby="emailHelp" placeholder="Enter email" />
        
        </div><br />

        <div class="form-group">
        <label for="phone">Phone</label>
        <input type="number" class="form-control" id="phone" aria-describedby="numberHelp" placeholder="Enter your number" />
        </div><br />

        <div class="form-group">
        <label for="req">Describe your Concern</label>
        <textarea type="text" cols="30" rows="5" class="form-control" id="request" aria-describedby="textHelp" placeholder="Your Message here" />
        </div><br />
        
    </form>
    </div>
    <div class="col-6 ps-5">
    <form>
        <div class="form-group">
        <label for="putName">Choose Your Veterinary</label>
        <div class="row">
            <div class="col">
            <select class="form-select" aria-label="Default select example">
            <option selected>Open this menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            </div>
        
        </div>
        
        </div><br />

        {/* <div class="form-group">
        <label for="businessName">Choose a Date</label>
        <input class="dropdown-item input-group" type="date" id="date" />
        </div><br />

        <div class="form-group">
        <label for="exampleInputEmail1">Time</label><br/>
        <input type="time" class="dropdown-item input-group" />
        
        </div><br /> */}


        <div class="form-group">
        <label for="phone">Upload a Picture (Optional)</label><br/>
        <div class="input-group">
        
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

</div>
        </div><br />
        
        <div class="d-grid gap-2">
        <button id="submit" type="submit" class="btn btn-lg btn-dark w-5" >Submit</button>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}




export default Consult;
