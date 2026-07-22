import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/gallery/IMG_7717.jpg";
import img2 from "../assets/images/gallery48.JPG";
import img3 from "../assets/images/gallery25.JPG";
import img4 from "../assets/images/airportVisit.jpeg";

const slides = [
    {
        title: "A Dream Come True:",
        description:
            " Wisdom Schools Opens New Pathway to Medicine Through International Partnership",
        image: img1,
        buttons: [
            {
                text: "Read more",
                link: "/partnership",
                primary: true,
            },
            // {
            //     text: "Medicine Pathway",
            //     link: "/medicine-pathway",
            //     primary: false,
            // },
        ],
    },
    {
        title: "Empowering Future Leaders.",
        description:
            "We prepare students with knowledge, confidence, and creativity to succeed in a rapidly changing world.",
        image: img2,
        buttons: [
            {
                text: "Enroll Now",
                link: "/enrollPage",
                primary: true,
            },
            {
                text: "Learn More",
                link: "/",
                primary: false,
            },
        ],
    },
    {
        title: "Shaping Tomorrow's Innovators.",
        description:
            "Through world-class education and personalized learning, every student is inspired to achieve their full potential.",
        image: img3,
        buttons: [
            {
                text: "Explore",
                link: "/",
                primary: true,
            },
            {
                text: "Admissions",
                link: "/",
                primary: false,
                tooltip: "Applications for 2026 - 2027 are now open!",
            },
        ],
    },
    {
        title: "Learning Beyond Limits.",
        description:
            "We inspire curiosity, confidence, and academic excellence through a supportive learning environment that encourages exploration beyond the classroom.",
        image: img4,
        buttons: [
            {
                text: "Visit Our Blog",
                link: "/branchesBlog",
                primary: true,
            }
        ],
    },
];

function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(false);

            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);

                setTimeout(() => {
                    setShowText(true);
                }, 500);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background */}
            <img
                src={slides[current].image}
                className="absolute inset-0 h-full w-full object-cover scale-110 animate-[zoom_6s_linear_forwards]"
                alt=""
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="max-w-3xl px-8 lg:px-20">
                    <span className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white">
                        Excellence in Education
                    </span>

                    <h1 className="mt-6 text-4xl font-black text-white">
                        {slides[current].title}
                    </h1>

                    <h2 className="mt-3 text-2xl font-semibold text-yellow-300">
                        {slides[current].subtitle}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg text-gray-200">
                        {slides[current].description}
                    </p>

                    {/* <div className="mt-8 flex flex-wrap gap-4">
                        {slides[current].buttons.map((button, index) => (
                            <Link
                                key={index}
                                to={button.link}
                                className={
                                    button.primary
                                        ? "rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:scale-105 hover:bg-white hover:text-gray-400 border border-blue-400 transition"
                                        : "rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black hover:bg-white hover:text-gray-400 border border-blue-400 transition"
                                }
                            >
                                {button.text}
                            </Link>
                        ))}
                    </div> */}

                    <div className="mt-8 flex flex-wrap gap-4">
                        {slides[current].buttons.map((button, index) => (
                            <div key={index} className="group relative">
                                {/* Only show tooltip if it exists */}
                                {button.tooltip && (
                                    <div
                                        className="
            pointer-events-none absolute -top-14 left-1/2 z-20
            -translate-x-1/2 whitespace-nowrap
            rounded-lg bg-black/90 px-4 py-2 text-sm text-white
            opacity-0 transition-all duration-300
            group-hover:-translate-y-2 group-hover:opacity-100
          "
                                    >
                                        {button.tooltip}

                                        <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 rotate-45 bg-black/90"></div>
                                    </div>
                                )}

                                <Link
                                    to={button.link}
                                    className={`rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-400 border border-blue-400 transition ${button.primary
                                        ? "bg-blue-600 text-white hover:bg-blue-600"
                                        : "border border-white text-white hover:bg-white hover:text-black hover:bg-blue-600"
                                        }`}
                                >
                                    {button.text}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex gap-10 text-white">
                        <div>
                            <h3 className="text-4xl font-bold">15</h3>
                            <p>Branches</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">5000+</h3>
                            <p>Students</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold">200+</h3>
                            <p>Teachers</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold">95%</h3>
                            <p>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setShowText(false);
                            setTimeout(() => {
                                setCurrent(index);
                                setShowText(true);
                            }, 300);
                        }}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${current === index
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeroSlider;
