const Signupform = () => {
    return (
        
                <div className="col-7 login mt-5">
                    <div className="row">
                        <div className="col align-self-center text-center p-5">
                            <h1 className="text-dark">Create your account</h1>
                            <form>
                            <div className="mb-3 row">
                                    
                                    <label for="exampleInputEmail1" className="form-label text-dark">Full Name</label>
                                    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-dark">Email Address</label>
                                    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label text-dark">Password</label>
                                    <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" />
                                </div>
                            </form>
                            <button className="btn btn-outline-light signbtn p-3 w-50">
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
    )
}

export default Signupform;