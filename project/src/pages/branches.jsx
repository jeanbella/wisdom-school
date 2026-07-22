import React from "react";
import { FaSchool, FaMapMarkerAlt } from "react-icons/fa";

import musanze from "../assets/images/wisdom.jpg"; 
import rubavu from "../assets/images/galleryHome.JPG";

const branches = [
    { name: "Musanze (Head Office)", image: musanze },
    { name: "Rubavu", image: "/images/galleryHome.JPG" },
    { name: "Nyabihu", image: "/images/galleryHome.JPG"},
    { name: "Muyumbu", image: "/images/branches/muyumbu.jpg" },
    { name: "Fumbwe", image: "/images/branches/fumbwe.jpg" },
    { name: "Kabarore", image: "/images/branches/kabarore.jpg" },
    { name: "Kiramuruzi", image: "/images/branches/kiramuruzi.jpg" },
    { name: "Nyamasheke", image: "/images/branches/nyamasheke.jpg" },
    { name: "Susa", image: "/images/branches/susa.jpg" },
    { name: "Burera", image: "/images/branches/burera.jpg" },
    { name: "Kayonza", image: "/images/branches/kayonza.jpg" },
    { name: "Runda", image: "/images/branches/runda.jpg" },
    { name: "Kanzenze", image: "/images/branches/kanzenze.jpg" },
    { name: "Ngororero", image: "/images/ngororero.jpeg" },
    { name: "Rubengera", image: "/images/branches/rubengera.jpg" },
];

export default function BranchesPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Our Branches
                    </h1>

                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Bringing quality, faith-based education closer to families
                        across Rwanda through our growing network of schools.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">
                        A Nationwide Presence
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Wisdom Schools Rwanda has grown from a humble beginning of
                        five students in 2008 into a network of thriving schools
                        serving communities throughout Rwanda. Each branch shares
                        the same commitment to academic excellence, Christian values,
                        character development, and innovation.
                    </p>

                    <p className="text-gray-600 leading-relaxed mt-4">
                        Through our campuses, we continue to provide learners with
                        opportunities to grow in knowledge, faith, leadership, and
                        responsibility while remaining connected to the vision and
                        mission of Wisdom Schools Rwanda.
                    </p>
                </div>
            </section>

            {/* Statistics */}
            <section className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-600 text-white p-8 rounded-2xl text-center shadow-lg">
                        <h3 className="text-4xl font-bold">15</h3>
                        <p className="mt-2">Branches Nationwide</p>
                    </div>

                    <div className="bg-green-600 text-white p-8 rounded-2xl text-center shadow-lg">
                        <h3 className="text-4xl font-bold">2008</h3>
                        <p className="mt-2">Founded</p>
                    </div>

                    <div className="bg-yellow-600 text-white p-8 rounded-2xl text-center shadow-lg">
                        <h3 className="text-4xl font-bold">1</h3>
                        <p className="mt-2">Shared Vision</p>
                    </div>
                </div>
            </section>

            {/* Branches Grid */}
            {/* <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <FaSchool className="text-blue-700 text-3xl" />
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Campuses
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                <FaMapMarkerAlt className="text-blue-700 text-2xl" />
                            </div>

                            <h3 className="font-semibold text-lg text-gray-800">
                                {branch}
                            </h3>

                            {branch.includes("Head Office") && (
                                <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                    Head Office
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section> */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <FaSchool className="text-blue-700 text-3xl" />
                    <h2 className="text-3xl font-bold">Our Campuses</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Default view */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white group-hover:opacity-0 transition duration-300">
                                <FaMapMarkerAlt className="text-4xl text-blue-600 mb-2" />
                                <h3 className="font-semibold text-gray-800 text-center px-2">
                                    {branch.name}
                                </h3>
                            </div>

                            {/* Image on hover */}
                            <img
                                src={branch.image}
                                alt={branch.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                            {/* Hover text */}
                            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                                {branch.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Growing Together Across Rwanda
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Every Wisdom Schools branch is united by a common purpose:
                        to provide quality education that nurtures academic
                        excellence, strong character, and faith. Together, our
                        campuses continue to shape future leaders who will make a
                        positive impact in Rwanda and beyond.
                    </p>
                </div>
            </section>
        </div>
    );
}