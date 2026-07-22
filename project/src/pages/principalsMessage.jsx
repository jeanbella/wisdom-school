import React from "react";
import principalImage from "../assets/images/N.AIME.jpg";

export default function PrincipalsMessage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold mb-4">Principal's Message</h1>
                    <p className="text-relaxed text-blue-100">
                        A message of faith, excellence, and commitment to every learner.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-0">

                        {/* Principal Profile */}
                        <div className="bg-blue-600 text-white p-10 flex flex-col items-center justify-center">
                            <img
                                src={principalImage}
                                alt="Principal NDUWAYESU Aime"
                                className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg"
                            />

                            <h2 className="mt-6 text-2xl font-bold">
                                NDUWAYESU Aime
                            </h2>

                            <p className="text-blue-100 text-center mt-2">
                                Principal
                                <br />
                                Wisdom Schools Rwanda
                            </p>

                            <div className="w-20 h-1 bg-white rounded-full mt-6"></div>
                        </div>

                        {/* Message */}
                        <div className="lg:col-span-2 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-blue-700 mb-8">
                                Message from the Principal
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>May God bless you Visitors,</p>

                                <p>
                                    Welcome to <strong>Wisdom Schools Rwanda</strong>,
                                    where education goes beyond classrooms — it is a journey
                                    of discovery, discipline, and purpose.
                                </p>

                                <p>
                                    As Principal, I am honored to lead a community that
                                    believes in heroism, commitment, and accountability as
                                    the foundation of learning. At Wisdom Schools, every
                                    child matters. We motivate the weak, support the
                                    average, and challenge the gifted — ensuring that each
                                    learner reaches their full potential.
                                </p>

                                <p>
                                    Our hybrid curriculum blends Rwanda’s national
                                    framework with international best practices, preparing
                                    our students to succeed both locally and globally. From
                                    Musanze, our head office, to all our branches across
                                    Rwanda, we remain dedicated to providing a holistic
                                    education rooted in Christian values and academic
                                    excellence.
                                </p>

                                <p>
                                    Our legacy is seen in generations of learners who have
                                    excelled — including top national performers such as
                                    <strong> Humura Elvin (2019)</strong> and
                                    <strong> Arakaza Leo Victor (2024–2025)</strong>.
                                    These achievements reflect not only hard work but also
                                    the spirit of faith that defines our schools.
                                </p>

                                <p>
                                    As we look to the future, our mission remains clear —
                                    to raise God-fearing, innovative, and responsible
                                    citizens who will impact the world with wisdom and
                                    integrity.
                                </p>

                                <p>
                                    Thank you for visiting our website and for being part
                                    of the <strong>Wisdom Schools Rwanda</strong> family.
                                </p>

                                <div className="pt-8 border-t">
                                    <p className="italic text-blue-600 text-xl">
                                        "May God bless you."
                                    </p>

                                    <div className="mt-6">
                                        <p className="font-semibold text-lg text-gray-800">
                                            NDUWAYESU Aime
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Principal, Wisdom Schools Rwanda
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}