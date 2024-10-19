import Navbar from '../features/navbar/Navbar';
import UserOrders from '../features/user/component/UserOrders';
function UserOrdersPage() {
    return (
        <>
            <div>
                <Navbar />
                <h1 className="mx-auto text-center mt-5 font-semibold border-b border-black/50 pb-2 text-2xl">My Orders</h1>
                <UserOrders />
            </div>
        </>
    );
}

export default UserOrdersPage;