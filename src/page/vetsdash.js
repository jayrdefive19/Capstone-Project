import Petprofile from "../components/dashboard/petprofile";
import Sidebar from "../components/dashboard/sidebar";



const Vetsdash = () => {
    return (
        <div className="container-fluid gx-0">
            <div className="row gx-0">
                <Sidebar />
                <Petprofile/>
            </div>
        </div>
        
    )
}

export default Vetsdash;