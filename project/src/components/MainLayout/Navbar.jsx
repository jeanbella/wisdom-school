import { Bell, UserCircle, Search, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear login information
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.clear();

        // Redirect to login
        navigate("/login");
    };

    return (
        <header className="h-16 bg-white border-b shadow-sm px-8 flex items-center justify-between">

            {/* Left */}

            <div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Wisdom School
                </h1>

                <p className="text-sm text-gray-500">
                    Management Dashboard
                </p>
            </div>

            {/* Right */}

            <div className="flex items-center gap-6">

                {/* Search */}

                {/* <div className="relative hidden md:block">

                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 pl-10 pr-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div> */}

                {/* Notification */}

                <button className="relative p-2 rounded-full hover:bg-gray-100 transition">

                    <Bell size={22} className="text-slate-700" />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

                </button>

                {/* User */}

                <div className="flex items-center gap-3 border-l pl-6">

                    <UserCircle size={42} className="text-blue-600" />

                    <div>
                        <p className="font-semibold text-slate-800">
                            Admin
                        </p>

                        <p className="text-xs text-gray-500">
                            Head Office
                        </p>
                    </div>

                </div>

                {/* Logout */}

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-all"
                >
                    <LogOut size={18} />
                    Logout
                </button>

            </div>

        </header>
    );
};

export default Navbar;