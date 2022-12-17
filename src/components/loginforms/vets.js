import { Link } from "react-router-dom";

const Vetslogg = () => {
    return (
                <div className="col login mt-5">
                    <div className="row">
                        <div className="col align-self-center text-center p-5">
                            <h1 className="text-dark">Login to your Dashboard</h1>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-dark">USERNAME</label>
                                    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label text-dark">Password</label>
                                    <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" />
                                </div>
                            </form>
                            <Link to="/vetsdash">
                            <button className="btn btn-outline-light signbtn p-3 w-50">
                                LOGIN
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Vetslogg;