import React from "react";
import { Link } from "react-router-dom";

// Sample Images (replace with your own)
import heroImg from "../assets/gallery/IMG_7710.jpg";
import img1 from "../assets/gallery/IMG_7716.jpg";
import img2 from "../assets/gallery/IMG_7712.jpg";
import img3 from "../assets/gallery/IMG_7714.jpg";
import img4 from "../assets/gallery/IMG_7711.jpg";
import img5 from "../assets/gallery/IMG_7718.jpg";
import img6 from "../assets/gallery/IMG_7713.jpg";
import img7 from "../assets/gallery/IMG_7715.jpg";
// import img8 from "../assets/gallery/IMG_7710.jpg";
// import img9 from "../assets/gallery/IMG_7710.jpg";
// import img10 from "../assets/gallery/IMG_7710.jpg";

import graduation from "../assets/images/gallery31.JPG";

const Partnership = () => {
    return (
        <div className="bg-slate-50">

            {/* HERO */}
            <section className="relative h-[90vh] overflow-hidden">

                <img
                    src={heroImg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-black/60" />

                <div className="relative z-10 flex h-full items-center">
                    <div className="mx-auto max-w-6xl px-6">

                        {/* <span className="rounded-full bg-yellow-400 px-5 py-2 font-bold uppercase tracking-widest text-black">
                            International Partnership
                        </span> */}

                        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                            Wisdom Schools Opens New
                            <br />
                            Pathway to Medicine
                            <br />
                            Through International Partnership.
                        </h1>

                        <p className="mt-8 text-sm text-yellow-400">
                            June 2026
                        </p>

                    </div>
                </div>

            </section>

            {/* ARTICLE */}

            <section className="py-5">

                <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl">

                    <p className="leading-relaxed leading-9 text-gray-700">
                        For many young people in Rwanda, becoming a doctor has always been a dream worth pursuing. Unfortunately, for some students, that dream seemed out of reach due to financial challenges, academic pathways, or subject combinations that appeared to limit their opportunities.
                    </p>

                    <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                        Today, that story is changing.
                    </p>

                    {/* IMAGE */}

                    <div className="my-5 overflow-hidden rounded-3xl">
                        <img
                            src={img1}
                            alt=""
                            className="h-[500px] w-full object-cover transition hover:scale-105 duration-700"
                        />
                    </div>

                    <p className="leading-relaxed leading-9 text-gray-700">
                        Wisdom Schools Rwanda is proud to announce a groundbreaking partnership between Gullas College of Medicine (GCM), Philippines and the Rwanda United Private Schools Association (RUPSA). This Memorandum of Understanding marks the beginning of a new chapter for aspiring healthcare professionals and creates exciting international opportunities for Rwandan students.
                    </p>

                    <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                        This partnership has been established with one clear purpose: to give more students the opportunity to pursue their dream careers in medicine and healthcare through affordable, internationally recognized education.
                    </p>

                    {/* TITLE */}

                    <div className="mt-10 mb-8 border-l-8 border-yellow-400 pl-6">

                        <h2 className="text-3xl font-black text-blue-800">
                            Where Others See Limits, We See Possibilities
                        </h2>

                    </div>

                    <div className="grid gap-10 lg:grid-cols-2 items-center">

                        <div>

                            <p className="leading-relaxed leading-9 text-gray-700">
                                For years, many students have believed that their secondary school combinations or previous academic choices had permanently closed the door to studying medicine. Others felt discouraged by the high costs associated with medical education.
                            </p>

                            <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                                Through this partnership, Wisdom Schools is helping rewrite that narrative.
                            </p>

                            <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                                Students who once thought their journey toward becoming doctors had ended now have renewed hope. New academic pathways are being created to help determined learners access internationally recognized medical programs and work toward achieving their professional goals.
                            </p>

                            <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                                What was once a distant dream is now becoming a practical and achievable reality.
                            </p>

                        </div>

                        <img
                            src={img2}
                            alt=""
                            className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
                        />

                    </div>

                    {/* BUILDING */}

                    <div className="mt-10 mb-8 border-l-8 border-blue-700 pl-6">

                        <h2 className="text-3xl font-black text-blue-800">
                            Building on a Proven Foundation
                        </h2>

                    </div>

                    <div className="my-12 grid gap-6 md:grid-cols-3">

                        <img
                            src={img7}
                            className="rounded-2xl h-72 object-cover shadow-lg"
                        />

                        <img
                            src={img3}
                            className="rounded-2xl h-72 object-cover shadow-lg"
                        />

                        <img
                            src={img4}
                            className="rounded-2xl h-72 object-cover shadow-lg"
                        />

                    </div>

                    <p className="leading-relaxed leading-9 text-gray-700">
                        This exciting development builds on the success of the Associate Nursing Program already being promoted through Wisdom Schools. The program has empowered students to begin meaningful careers in healthcare and has demonstrated that international educational partnerships can transform lives.
                    </p>

                    <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                        We are especially proud that our first cohort of Associate Nursing students is preparing to sit for their national examinations this coming July. Their progress stands as a testimony to what can happen when students are given the right opportunities, support, and guidance.
                    </p>

                    <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                        Their success gives confidence to the many young people who will benefit from this new medical education pathway.
                    </p>

                    {/* CAMPUS */}

                    <div className="relative my-10 overflow-hidden rounded-3xl">

                        <img
                            src={img6}
                            className="h-[500px] w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="absolute bottom-10 left-10 text-white">

                            <h2 className="text-3xl font-black">
                                A Gateway to Global Medical Education
                            </h2>

                        </div>

                    </div>

                    <p className="leading-relaxed leading-9 text-gray-700">
                        Through the partnership with Gullas College of Medicine, students will have access to affordable and internationally respected medical education opportunities, allowing them to pursue qualifications that prepare them for careers in healthcare both within Rwanda and internationally.
                    </p>

                    <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                        This initiative reflects Wisdom Schools' commitment to preparing students not only for examinations but also for meaningful futures. It is about creating opportunities, expanding horizons, and helping learners discover that their ambitions are still possible regardless of the obstacles they may have faced along the way.
                    </p>

                    {/* PROMISE */}

                    <div className="mt-10 mb-8 border-l-8 border-yellow-400 pl-6">

                        <h2 className="text-3xl font-black text-blue-800">
                            More Than a Partnership—A Promise
                        </h2>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <img
                            src={img5}
                            className="rounded-3xl h-[450px] object-cover w-full"
                        />

                        <div>

                            <p className="leading-relaxed leading-9 text-gray-700">
                                At Wisdom Schools, we believe that every student deserves a chance to pursue their God-given potential.
                            </p>

                            <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                                This partnership is more than a signed agreement. It is a promise to students who have dreamed of wearing a white coat one day. It is a message to parents that quality international opportunities can be made accessible. It is a reminder that the future belongs to those who dare to dream and are given the opportunity to act on those dreams.
                            </p>

                            <p className="mt-8 leading-relaxed leading-9 text-gray-700">
                                As we look ahead, we are excited about the lives that will be transformed, the doctors that will be trained, and the communities that will be served.
                            </p>

                        </div>

                    </div>

                    <p className="mt-10 leading-relaxed leading-9 text-gray-700">
                        For many students across Rwanda, the journey to becoming a doctor no longer begins with uncertainty.
                    </p>

                    {/* FINAL BANNER */}

                    <div className="relative mt-10 overflow-hidden rounded-3xl">

                        <img
                            src={graduation}
                            className="h-[550px] w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-blue-950/65" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">

                            <h2 className="text-6xl font-black text-white">
                                It begins with opportunity.
                            </h2>

                            <h2 className="mt-5 text-6xl leading-relaxed font-black text-yellow-300">
                                It begins with hope.
                            </h2>

                            <h2 className="mt-5 text-7xl leading-relaxed font-black text-white">
                                It begins with Wisdom Schools.
                            </h2>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Partnership;