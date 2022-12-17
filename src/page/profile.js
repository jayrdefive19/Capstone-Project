import Petprofile from "../components/profile/petprofile";
import Sidebar from "../components/profile/sidebar";



const Profile = () => {
    return (
        <div className="container-fluid gx-0">
            <div className="row gx-0">
                <Sidebar />
                <Petprofile/>
            </div>
        </div>
        
    )
}

export default Profile;