import { Link } from "react-router-dom";

const Signin = () => {
    return (
        
                <div className="col-7 login mt-5">
                    <div className="row">
                        <div className="col align-self-center text-center p-5">
                            <h1 className="text-dark">Login to your Account</h1>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-dark">Email address</label>
                                    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label text-dark">Password</label>
                                    <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" />
                                </div>
                            </form>
                            <Link to="/profile">
                            <button className="btn btn-outline-light signbtn p-3 w-50">
                                LOGIN
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Signin;