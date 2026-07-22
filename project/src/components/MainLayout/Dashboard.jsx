import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 flex-1 bg-gray-100 min-h-screen">
                <Navbar />
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;