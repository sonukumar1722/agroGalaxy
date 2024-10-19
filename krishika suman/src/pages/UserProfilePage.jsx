import Navbar from '../features/navbar/Navbar';
import UserProfile from '../features/user/component/UserProfile';
function UserProfilePage() {
    return (
        <>
            <div>
                <Navbar />
                <h1 className="mx-auto text-center mt-5 font-semibold border-b border-black/50 pb-2 text-2xl">My Profile</h1>
                <UserProfile />
            </div>
        </>
    );
}

export default UserProfilePage;