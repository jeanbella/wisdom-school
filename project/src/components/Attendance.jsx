import { useState } from "react";

const attendanceData = {
    All: {
        total: 1250,
        present: 1200,
        absent: 50,
        rate: "96%",
    },
    Musanze: {
        total: 420,
        present: 405,
        absent: 15,
        rate: "96%",
    },
    Rubavu: {
        total: 280,
        present: 270,
        absent: 10,
        rate: "96%",
    },
    Nyabihu: {
        total: 220,
        present: 210,
        absent: 10,
        rate: "95%",
    },
    Muyumbu: {
        total: 180,
        present: 172,
        absent: 8,
        rate: "96%",
    },
    Fumbwe: {
        total: 150,
        present: 143,
        absent: 7,
        rate: "95%",
    },
};

const classes = [
    {
        class: "P1 A",
        teacher: "Jane Smith",
        present: 39,
        absent: 1,
        total: 40,
    },
    {
        class: "P2 A",
        teacher: "John Doe",
        present: 37,
        absent: 3,
        total: 40,
    },
    {
        class: "P3 A",
        teacher: "Patrick",
        present: 40,
        absent: 0,
        total: 40,
    },
];

const Attendance = () => {
    const [branch, setBranch] = useState("All");

    const stats = attendanceData[branch];

    return (
        <div>

            <div className="flex justify-between items-center mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Attendance
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Monitor student attendance across all Wisdom School branches.
                    </p>
                </div>

                <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="border rounded-lg px-4 py-2"
                >
                    <option>All</option>
                    <option>Musanze</option>
                    <option>Rubavu</option>
                    <option>Nyabihu</option>
                    <option>Muyumbu</option>
                    <option>Fumbwe</option>
                </select>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Total Students</p>
                    <h2 className="text-4xl font-bold mt-2">{stats.total}</h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Present</p>
                    <h2 className="text-4xl font-bold text-green-600 mt-2">
                        {stats.present}
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Absent</p>
                    <h2 className="text-4xl font-bold text-red-600 mt-2">
                        {stats.absent}
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Attendance Rate</p>
                    <h2 className="text-4xl font-bold text-blue-600 mt-2">
                        {stats.rate}
                    </h2>
                </div>

            </div>

            {/* Attendance Table */}

            <div className="bg-white rounded-xl shadow">

                <div className="p-5 border-b">
                    <h2 className="text-xl font-semibold">
                        {branch} Branch Attendance
                    </h2>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="p-3 text-left">Class</th>
                                <th className="p-3 text-left">Class Teacher</th>
                                <th className="p-3 text-left">Present</th>
                                <th className="p-3 text-left">Absent</th>
                                <th className="p-3 text-left">Total</th>
                                <th className="p-3 text-left">Rate</th>
                            </tr>

                        </thead>

                        <tbody>

                            {classes.map((item) => (

                                <tr key={item.class} className="border-b hover:bg-gray-50">

                                    <td className="p-3 font-medium">{item.class}</td>
                                    <td className="p-3">{item.teacher}</td>
                                    <td className="p-3 text-green-600">{item.present}</td>
                                    <td className="p-3 text-red-600">{item.absent}</td>
                                    <td className="p-3">{item.total}</td>

                                    <td className="p-3">
                                        {Math.round((item.present / item.total) * 100)}%
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Attendance;