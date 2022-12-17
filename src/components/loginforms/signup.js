import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="col-5 ryt">
            <div className="row mt-5">
                <div className="col align-self-center text-center text-light p-5">
                    <h1 className="text-light">Henlo, Hoomans!</h1>
                    <p>New here? Enter your personal details and create your account</p>
                    <Link to="/signup">
                    <button className="btn btn-outline-light p-3 w-50">
                        SIGN UP
                    </button>
                    </Link><br/><br/><br/>
                    <h4 className="text-light">Veterinary Account</h4>
                    <p>Login to your Dashboard</p>
                    <Link to="/vetslog">
                    <button className="btn btn-outline-light p-3 w-50">
                        LOGIN
                    </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Signup;