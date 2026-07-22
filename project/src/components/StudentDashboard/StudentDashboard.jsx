import {
    GraduationCap,
    School,
    BookOpen,
    CalendarDays,
    Bell,
    User,
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
    const navigate = useNavigate();

    const levels = [
        {
            title: "Nursery",
            // description: "Learning activities and attendance",
            icon: <School size={45} />,
            color: "from-pink-500 to-pink-700",
            route: "/student/nursery",
        },
        {
            title: "Primary",
            // description: "Assignments, attendance & reports",
            icon: <BookOpen size={45} />,
            color: "from-blue-500 to-blue-700",
            route: "/student/primary",
        },
        {
            title: "High School",
            // description: "Exams, timetable & performance",
            icon: <GraduationCap size={45} />,
            color: "from-emerald-500 to-emerald-700",
            route: "/student/highschool",
        },
    ];

    return (
        <div className="bg-slate-100 min-h-screen p-8">

            {/* Welcome Banner */}

            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 text-white shadow-lg mb-8">

                <h1 className="text-4xl font-bold">
                    Welcome back
                </h1>

                <p className="mt-2 text-blue-100 text-lg">
                    Select your education level to continue.
                </p>

            </div>

            {/* Quick Stats */}

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"> */}

            {/* <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

                    <div className="bg-blue-100 p-3 rounded-xl">
                        <User className="text-blue-600" size={28} />
                    </div>

                    <div>
                        <p className="text-gray-500">
                            Student
                        </p>

                        <h2 className="text-xl font-bold">
                            JB
                        </h2>
                    </div>

                </div> */}

            {/* <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

                    <div className="bg-green-100 p-3 rounded-xl">
                        <CalendarDays className="text-green-600" size={28} />
                    </div>

                    <div>
                        <p className="text-gray-500">
                            Academic Year
                        </p>

                        <h2 className="text-xl font-bold">
                            2026 - 2027
                        </h2>
                    </div>

                </div> */}

            {/* <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

                    <div className="bg-yellow-100 p-3 rounded-xl">
                        <Bell className="text-yellow-600" size={28} />
                    </div>

                    <div>
                        <p className="text-gray-500">
                            Notifications
                        </p>

                        <h2 className="text-xl font-bold">
                            5 New
                        </h2>
                    </div>

                </div> */}

            {/* </div> */}

            {/* Levels */}

            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    Select Your Education Level
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {levels.map((level) => (
                        <div
                            key={level.title}
                            className="bg-white rounded-2xl shadow hover:shadow-xl transition-all overflow-hidden"
                        >

                            <div className={`bg-gradient-to-r ${level.color} h-40 flex items-center justify-center text-white`}>
                                {level.icon}
                            </div>

                            <div className="p-6">

                                <h3 className="text-2xl font-bold text-slate-800">
                                    {level.title}
                                </h3>

                                <p className="text-gray-500 mt-3 leading-7">
                                    {level.description}
                                </p>

                                <div className="relative group mt-6">

                                    <button
                                        className="w-full bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
                                    >
                                        Continue
                                        <ArrowRight size={18} />
                                    </button>

                                    {/* Tooltip */}
                                    <div
                                        className="
                                        absolute left-1/2 -translate-x-1/2
                                        -top-12
                                        opacity-0 group-hover:opacity-100
                                        transition-all duration-300
                                        bg-gray-900 text-white text-sm
                                        px-4 py-2 rounded-lg
                                        whitespace-nowrap
                                        pointer-events-none
                                        shadow-lg
                                    "
                                    >
                                        🚧 Student application is coming soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;