import { Link } from "react-router-dom";

const Signinn = () => {
    return (
        <div className="col-5 ryt">
            <div className="row mt-5">
                <div className="col align-self-center text-center text-light p-5">
                    <h1 className="text-light">Henlo, Hoomans!</h1>
                    <p>Already have account? Click here to sign in</p>
                    <Link to="/login">
                    <button className="btn btn-outline-light p-3 w-50">
                        LOG IN
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signinn;