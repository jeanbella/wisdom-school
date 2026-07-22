import React from "react";
import { FaUserTie } from "react-icons/fa";

import principalImage from "../assets/images/N.AIME.jpg";
import director from "../assets/images/principal.jpg";

const staff = [
    {
        name: "NDUWAYESU Elie",
        role: "Director",
        image: director,
    },
    {
        name: "NDUWAYESU Aime",
        role: "Principal",
        image: principalImage,
    },
    // {
    //     name: "John Doe",
    //     role: "Mathematics Teacher",
    //     image: "/images/staff/math.jpg",
    // },
    // {
    //     name: "Jane Doe",
    //     role: "English Teacher",
    //     image: "/images/staff/english.jpg",
    // },
    // {
    //     name: "Peter Habimana",
    //     role: "Discipline Master",
    //     image: "/images/staff/discipline.jpg",
    // },
    // {
    //     name: "Grace Mukamana",
    //     role: "School Secretary",
    //     image: "/images/staff/secretary.jpg",
    // },
];

export default function StaffPage() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* HERO */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">Our School Staff</h1>
                    <p className="text-blue-100 mt-3">
                        Dedicated professionals committed to academic excellence and student success.
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-2xl shadow">
                    <h2 className="text-2xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                        <FaUserTie /> Meet Our Team
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our staff members are highly qualified, passionate, and committed to
                        nurturing learners academically, spiritually, and socially. They work
                        together to ensure every student reaches their full potential.
                    </p>
                </div>
            </section>

            {/* STAFF GRID */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {staff.map((person, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                        >
                            {/* Image */}
                            <div className="w-full aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {person.name}
                                </h3>
                                <p className="text-blue-600 font-medium">
                                    {person.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER MESSAGE */}
            <section className="bg-white py-12 text-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">
                    Our Strength is Our People
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    At Wisdom Schools Rwanda, we believe great teachers build great futures.
                </p>
            </section>

        </div>
    );
}