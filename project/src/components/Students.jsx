import { Plus, Search } from "lucide-react";
import { useState } from "react";

const students = [
    {
        id: "001",
        name: "John Doe",
        gender: "Male",
        branch: "Musanze",
        class: "P6 A",
        status: "Active",
    },
    {
        id: "002",
        name: "Alice Uwase",
        gender: "Female",
        branch: "Rubavu",
        class: "P5 B",
        status: "Active",
    },
    {
        id: "003",
        name: "Kevin Mugisha",
        gender: "Male",
        branch: "Nyabihu",
        class: "S2 A",
        status: "Inactive",
    },
    {
        id: "004",
        name: "Diane Mukamana",
        gender: "Female",
        branch: "Muyumbu",
        class: "S4 MPC",
        status: "Active",
    },
];

const Students = () => {
    const [search, setSearch] = useState("");
    const [branch, setBranch] = useState("All");

    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.id.includes(search);

        const matchesBranch =
            branch === "All" || student.branch === branch;

        return matchesSearch && matchesBranch;
    });

    return (
        <div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Students
                    </h1>

                    <p className="text-gray-500">
                        Manage students across all Wisdom School branches.
                    </p>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                    <Plus size={18} />
                    Add Student
                </button>

            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow p-5">

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mb-5">

                    <div className="relative md:w-96">

                        <Search
                            size={18}
                            className="absolute left-3 top-3 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search by name or ID..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border rounded-lg py-2 pl-10 pr-4"
                        />

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

                {/* Students Table */}
                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100 ">

                            <tr>
                                <th className="p-3 text-left">ID</th>
                                <th className="p-3 text-left">Student Name</th>
                                <th className="p-3 text-left">Gender</th>
                                <th className="p-3 text-left">Branch</th>
                                <th className="p-3 text-left">Class</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredStudents.map((student) => (

                                <tr
                                    key={student.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-3">{student.id}</td>

                                    <td className="p-3 font-medium">
                                        {student.name}
                                    </td>

                                    <td className="p-3">{student.gender}</td>

                                    <td className="p-3">
                                        {student.branch}
                                    </td>

                                    <td className="p-3">
                                        {student.class}
                                    </td>

                                    <td className="p-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${student.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>

                                    <td className="p-3 text-center space-x-3">

                                        <button className="text-blue-600 hover:underline">
                                            View
                                        </button>

                                        <button className="text-yellow-600 hover:underline">
                                            Edit
                                        </button>

                                        <button className="text-red-600 hover:underline">
                                            Delete
                                        </button>

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

export default Students;