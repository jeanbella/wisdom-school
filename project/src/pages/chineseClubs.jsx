import {
    Globe,
    Trophy,
    Users,
    BookOpen,
    ArrowLeft,
    ChevronRight,
} from "lucide-react";

import chinese1 from "../assets/images/chine1.jpeg";
import chinese2 from "../assets/images/chine2.jpeg";
import chinese3 from "../assets/images/chine5.jpeg";
import chinese4 from "../assets/images/chine3.jpeg";
import chinese5 from "../assets/images/chine4.jpeg";
import chinese6 from "../assets/images/chine7.jpeg";

export default function ChineseClubPage() {
    const gallery = [
        chinese1,
        chinese2,
        chinese3,
        chinese4,
        chinese5,
        chinese6,
    ];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ================= HERO ================= */}

            <section className="relative h-[70vh]">

                <img
                    src={chinese1}
                    alt="Chinese Club"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-6xl mx-auto px-6 text-white">

                        <a
                            href="/student-life/clubs"
                            className="inline-flex items-center gap-2 mb-6 text-gray-200 hover:text-blue-600"
                        >
                            <ArrowLeft size={18} />
                            Back to Clubs
                        </a>

                        <h1 className="text-5xl md:text-6xl font-extrabold max-w-3xl">
                            Wisdom School Chinese Club
                        </h1>

                        <p className="mt-6 text-xl max-w-3xl leading-9 text-gray-200">
                            Bridging cultures, inspiring excellence, and preparing learners
                            to become confident global citizens through Mandarin language and
                            cultural exchange.
                        </p>

                    </div>

                </div>

            </section>

            {/* ================= ABOUT ================= */}

            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                    <div>

                        <span className="text-blue-600 font-semibold uppercase tracking-widest">
                            About The Club
                        </span>

                        <h2 className="text-3xl font-bold mt-4 mb-6">
                            A Journey of Excellence and Discovery
                        </h2>

                        <p className="text-gray-600 leading-8 mb-6">
                            At Wisdom School, we believe language is more than communication.
                            It is a bridge connecting cultures, opportunities, innovation,
                            and lifelong friendships.
                        </p>

                        <p className="text-gray-600 leading-8">
                            Through Mandarin learning, cultural performances, speech
                            competitions, calligraphy, and international exchanges, our
                            learners develop confidence while embracing one of the world's
                            fastest-growing global languages.
                        </p>

                    </div>

                    <img
                        src={chinese2}
                        alt=""
                        className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
                    />

                </div>

            </section>

            {/* ================= HIGHLIGHTS ================= */}

            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl font-bold">
                            Club Highlights
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-gray-50 rounded-2xl p-8 shadow">

                            <Globe className="text-red-600 mb-5" size={40} />

                            <h3 className="font-bold text-xl mb-3">
                                Global Exposure
                            </h3>

                            <p className="text-gray-600">
                                Connect with Chinese culture and international opportunities.
                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 shadow">

                            <Trophy className="text-yellow-500 mb-5" size={40} />

                            <h3 className="font-bold text-xl mb-3">
                                Competitions
                            </h3>

                            <p className="text-gray-600">
                                National and international achievements in language contests.
                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 shadow">

                            <BookOpen className="text-blue-600 mb-5" size={40} />

                            <h3 className="font-bold text-xl mb-3">
                                Learning
                            </h3>

                            <p className="text-gray-600">
                                Mandarin classes, calligraphy, speeches, and storytelling.
                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 shadow">

                            <Users className="text-green-600 mb-5" size={40} />

                            <h3 className="font-bold text-xl mb-3">
                                Cultural Exchange
                            </h3>

                            <p className="text-gray-600">
                                Partnerships that build friendships across borders.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= ACHIEVEMENTS ================= */}

            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-12">
                        Major Achievements
                    </h2>

                    <div className="space-y-8 border-l-4 border-red-600 pl-8">

                        <div>

                            <h3 className="text-2xl font-bold">
                                National Recognition
                            </h3>

                            <p className="text-gray-600 mt-3 leading-8">
                                Wisdom School learners have consistently excelled in speech,
                                calligraphy, music, and Chinese cultural competitions.
                            </p>

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold">
                                International Representation
                            </h3>

                            <p className="text-gray-600 mt-3 leading-8">
                                Outstanding students proudly represented both Wisdom School and
                                Rwanda in international competitions held in China.
                            </p>

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold">
                                Strategic Partnership
                            </h3>

                            <p className="text-gray-600 mt-3 leading-8">
                                Collaboration with the Confucius Institute Rwanda strengthens
                                learning through mentorship and authentic cultural resources.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= GALLERY ================= */}

            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-14">
                        Gallery
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                        {gallery.map((img, index) => (

                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl shadow-lg"
                            >

                                <img
                                    src={img}
                                    alt=""
                                    className="w-full aspect-square object-cover hover:scale-110 transition duration-500"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= QUOTE ================= */}

            <section className="py-24 bg-blue-900 text-white">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold mb-8">
                        "When we learn a new language,
                        we open a new window to the world."
                    </h2>

                    <p className="text-xl text-red-100">
                        Wisdom School Chinese Club
                    </p>

                </div>

            </section>

            {/* ================= CTA ================= */}

            {/* <section className="py-24">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Join the Journey
                    </h2>

                    <p className="text-gray-600 text-lg leading-8 mb-10">
                        Discover new cultures, develop global communication skills, and
                        become part of a community that inspires excellence and lifelong
                        learning.
                    </p>

                    <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition">

                        Join the Club

                        <ChevronRight size={20} />

                    </button>

                </div>

            </section> */}

        </div>
    );
}