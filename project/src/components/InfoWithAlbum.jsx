import { useState } from "react";
import { Link } from "react-router-dom";


import academicsImg from "../assets/images/galleryHome.JPG";
import sportsImg from "../assets/images/gallery13.JPG";
import artsImg from "../assets/images/library.jpg";
import campusImg from "../assets/images/primary2.JPG";
import spo2 from "../assets/images/spo2.jpg";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";



// Animation Variants
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const tabs = [
    {
        id: "academics",
        title: "Academics",
        image: academicsImg,
        heading: "Excellence in Learning",
        description:
            "Our students learn in modern classrooms supported by innovative teaching methods and dedicated educators.",
    },
    {
        id: "sports",
        title: "Sports",
        image: spo2,
        heading: "Developing Champions",
        description:
            "Sports play an important role in building teamwork, discipline, leadership, and healthy lifestyles.",
    },
    {
        id: "arts",
        title: "Library",
        image: artsImg,
        heading: "A World of Knowledge",
        description:
            "A welcoming space where students explore books, develop research skills, and expand their imagination through reading and discovery.",
    },
    {
        id: "campus",
        title: "Campus Life",
        image: campusImg,
        heading: "A Vibrant Community",
        description:
            "Our welcoming environment encourages friendships, leadership, and lifelong memories.",
    },
];

const events = [
    {
        id: 1,
        date: "14 Jul",
        title: "Holidays — All Divisions",
        desc: "Parents and students are invited to explore our campus and meet teachers.",
        location: "Main Campus",
        tag: "All Schools",
    },
    {
        id: 2,
        date: "03 Jul",
        title: "Nursery End-of-Term Play",
        desc: "Young learners present songs, dance, and storytelling activities.",
        location: "School Hall",
        tag: "Nursery",
    },
    {
        id: 3,
        date: "03 Jul",
        title: "Primary Science Fair",
        desc: "Students showcase innovative science projects and experiments.",
        location: "Science Block",
        tag: "Primary",
    },
    {
        id: 4,
        date: "11 Jul",
        title: "High School Graduation Ceremony",
        desc: "Celebration of academic success and student achievement.",
        location: "Main Auditorium",
        tag: "High School",
    },
];

export default function CampusExperience() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [active, setActive] = useState(events[0]);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div>
            {/* ================= CAMPUS EXPERIENCE ================= */}
    
            <motion.section
                ref={sectionRef}
                style={{ y, opacity, scale }}
                className="bg-gradient-to-b from-gray-100 to-white py-10"
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center max-w-3xl mx-auto mb-10"
                    >
                        <span className="text-blue-600 uppercase tracking-[0.25em] font-semibold">
                            Student Experience
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                            Discover Life at Wisdom Schools
                        </h2>

                        <p className="mt-6 text-lg text-gray-600">
                            Every student enjoys a rich educational experience that goes far beyond the classroom.
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full font-semibold transition ${activeTab.id === tab.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </motion.div>

                    {/* Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden">

                        {/* Animated Image */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab.image}
                                src={activeTab.image}
                                alt={activeTab.title}
                                variants={fadeLeft}
                                initial="hidden"
                                animate="visible"
                                exit={{
                                    opacity: 0,
                                    x: -40,
                                    transition: { duration: 0.3 },
                                }}
                                className="w-full h-[500px] object-cover"
                            />
                        </AnimatePresence>

                        {/* Animated Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                variants={fadeRight}
                                initial="hidden"
                                animate="visible"
                                exit={{
                                    opacity: 0,
                                    x: 40,
                                    transition: { duration: 0.3 },
                                }}
                                className="p-10 lg:p-14"
                            >
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {activeTab.heading}
                                </h3>

                                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                    {activeTab.description}
                                </p>

                                <Link
                                    to="/gallery/photo"
                                    className="inline-block mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-white hover:text-gray-600 border border-blue-400 transition"
                                >
                                    Explore Gallery →
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </motion.section>

            {/* ================= EVENTS SECTION ================= */}
            <section className="bg-gradient-to-b from-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-12">
                        <span className="text-blue-600 uppercase tracking-widest font-semibold">
                            Upcoming Events
                        </span>

                        <h2 className="text-4xl font-bold text-gray-900 mt-3">
                            Don’t Miss What’s Happening
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* LEFT */}
                        <div className="space-y-4">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    onClick={() => setActive(event)}
                                    className={`p-4 rounded-xl cursor-pointer border transition hover:shadow-md ${active.id === event.id
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-gray-50 text-gray-800 border-gray-100"
                                        }`}
                                >
                                    <div className="flex justify-between">
                                        <span className="font-semibold">{event.date}</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-white/20">
                                            {event.tag}
                                        </span>
                                    </div>

                                    <h3 className="mt-2 font-semibold text-sm">
                                        {event.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-10 shadow-sm">

                            <h3 className="text-3xl font-bold text-gray-900">
                                {active.title}
                            </h3>

                            <p className="text-gray-600 mt-4">
                                {active.desc}
                            </p>

                            <div className="mt-6 text-sm text-gray-700 space-y-2">
                                <p>📅 {active.date}</p>
                                <p>📍 {active.location}</p>
                                <p>🏷️ {active.tag}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}