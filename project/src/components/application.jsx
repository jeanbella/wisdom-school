import React from "react";
import { Link } from "react-router-dom";
import {
    FaFileAlt,
    FaClipboardCheck,
    FaUserFriends,
    FaCheckCircle,
} from "react-icons/fa";

export default function Application() {
    const steps = [
        {
            icon: <FaFileAlt />,
            title: "Submit Application",
            desc: "Complete the online application form and provide the required documents.",
        },
        {
            icon: <FaClipboardCheck />,
            title: "Application Review",
            desc: "Our admissions team carefully reviews each application.",
        },
        {
            icon: <FaUserFriends />,
            title: "Interview & Assessment",
            desc: "Families may be invited for a meeting or student assessment.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Enrollment",
            desc: "Successful applicants receive an admission offer and enrollment details.",
        },
    ];

    return (
        <section className="bg-slate-100 py-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
                        Admissions 2025–2026
                    </span>

                    <h2 className="mt-6 text-3xl md:text-3xl font-bold text-gray-900">
                        Begin Your Journey With Us
                    </h2>

                    <p className="mt-6 text-md text-gray-600 leading-relaxed">
                        We are accepting applications for the 2025–2026 academic year.
                        Join a caring community dedicated to academic excellence,
                        character development, and student success.
                    </p>
                </div>

                {/* Process Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
                        >
                            {/* Number */}
                            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="text-4xl text-blue-600 mt-6">
                                {step.icon}
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-gray-900">
                                {step.title}
                            </h3>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-20 bg-gradient-to-br from-slate-400 via-slate-600 rounded-3xl p-10 md:p-14 text-center text-white">

                    <h3 className="text-3xl font-bold">
                        Applications Are Now Open
                    </h3>

                    <p className="mt-4 max-w-2xl mx-auto text-blue-100">
                        We encourage families to apply early, as places are limited.
                        Our admissions team is available to guide you throughout the process.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            to="/enrollPage"
                            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
                        >
                            Apply Now
                        </Link>

                        <Link
                            to="/contact"
                            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
                        >
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}