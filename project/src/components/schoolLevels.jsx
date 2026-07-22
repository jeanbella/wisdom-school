// SchoolLevels.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling, FaBook, FaGraduationCap } from "react-icons/fa";

import nurseryImg from "../assets/images/gallery38.JPG";
import primaryImg from "../assets/images/primary.JPG";
import highImg from "../assets/images/galleryHome.JPG";

const schoolLevels = [
    {
        title: "Nursery School",
        // age: "Ages 2 – 5",
        image: nurseryImg,
        icon: <FaSeedling />,
        link: "/academics/nursery",
        description:
            "Play-based learning in a warm and nurturing environment where children develop confidence, creativity, and curiosity.",
        features: [
            "Child-centred play programmes",
            "Sensory and creative arts activities",
            "Small class sizes",
            "Dedicated early-years specialists",
        ],
    },
    {
        title: "Primary School",
        // age: "Ages 6 – 12",
        image: primaryImg,
        icon: <FaBook />,
        link: "/academics/primary",
        description:
            "A strong academic foundation that builds literacy, numeracy, creativity, and critical thinking through engaging learning experiences.",
        features: [
            "Broad national curriculum",
            "STEM and digital literacy",
            "Science laboratories",
            "Sports and arts programmes",
        ],
    },
    {
        title: "High School",
        // age: "Ages 13 – 18",
        image: highImg,
        icon: <FaGraduationCap />,
        link: "/academics/highSchool",
        description:
            "Rigorous academics combined with leadership opportunities and holistic development to prepare students for university and beyond.",
        features: [
            "Advanced academic pathways",
            "Leadership and clubs",
            "Career and university guidance",
            "Strong academic performance",
        ],
    },
];

const SchoolLevels = () => {
    return (
        <section className="bg-gray-50 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
                        Academic Journey
                    </span>

                    <h2 className="mt-4 text-4xl md:text-3xl font-bold text-gray-900">
                        The Right Environment at Every Stage
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        From early childhood through secondary education, each level is
                        carefully designed to nurture academic excellence, character, and
                        lifelong learning.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {schoolLevels.map((level, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={level.image}
                                    alt={level.title}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-2xl">
                                            {level.icon}
                                        </div>

                                        {/* <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {level.age}
                                        </span> */}
                                    </div>

                                    <h3 className="text-3xl font-bold">{level.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {level.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {level.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-gray-700"
                                        >
                                            <span className="text-blue-600 mr-3 mt-1">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Link
                                    to={level.link}
                                    className="inline-block mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-white hover:text-gray-600 border border-blue-400 transition"
                                >
                                    Explore {level.title}
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchoolLevels;