import { useState } from "react";
import { Plus, Search } from "lucide-react";

const teachers = [
    {
        id: "T001",
        name: "Jane Smith",
        gender: "Female",
        department: "Mathematics",
        branch: "Musanze",
        email: "jane.smith@gmail.com",
        phone: "0788123456",
        status: "Active",
    },
    {
        id: "T002",
        name: "John Mugisha",
        gender: "Male",
        department: "Physics",
        branch: "Rubavu",
        email: "john@gmail.com",
        phone: "0788456789",
        status: "Active",
    },
    {
        id: "T003",
        name: "Alice Uwase",
        gender: "Female",
        department: "English",
        branch: "Nyabihu",
        email: "alice@gmail.com",
        phone: "0788001122",
        status: "Inactive",
    },
    {
        id: "T004",
        name: "Patrick Ndayisaba",
        gender: "Male",
        department: "ICT",
        branch: "Muyumbu",
        email: "patrick@gmail.com",
        phone: "0788778899",
        status: "Active",
    },
];

const Teachers = () => {
    const [search, setSearch] = useState("");
    const [branch, setBranch] = useState("All");

    const filteredTeachers = teachers.filter((teacher) => {
        const matchesSearch =
            teacher.name.toLowerCase().includes(search.toLowerCase()) ||
            teacher.id.toLowerCase().includes(search.toLowerCase());

        const matchesBranch =
            branch === "All" || teacher.branch === branch;

        return matchesSearch && matchesBranch;
    });

    return (
        <div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Teachers
                    </h1>

                    <p className="text-gray-500">
                        Manage teachers across all Wisdom School branches.
                    </p>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                    <Plus size={18} />
                    Add Teacher
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
                            placeholder="Search teacher..."
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

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="p-3 text-left">ID</th>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Gender</th>
                                <th className="p-3 text-left">Department</th>
                                <th className="p-3 text-left">Branch</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Phone</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredTeachers.map((teacher) => (

                                <tr
                                    key={teacher.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-3">{teacher.id}</td>

                                    <td className="p-3 font-medium">
                                        {teacher.name}
                                    </td>

                                    <td className="p-3">
                                        {teacher.gender}
                                    </td>

                                    <td className="p-3">
                                        {teacher.department}
                                    </td>

                                    <td className="p-3">
                                        {teacher.branch}
                                    </td>

                                    <td className="p-3">
                                        {teacher.email}
                                    </td>

                                    <td className="p-3">
                                        {teacher.phone}
                                    </td>

                                    <td className="p-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${teacher.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {teacher.status}
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

export default Teachers;