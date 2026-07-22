import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaClipboardList,
  FaBookOpen,
} from "react-icons/fa";

import heroImage from "../assets/images/galleryHome.JPG";
import graduation from "../assets/images/graduation.webp";

const EnrollPage = () => {
  return (
    <div className="bg-gray-50 pt-10">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Students"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-black/40" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
              Admissions Open
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">
              Enroll Today &
              <br />
              Shape Your Future
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Join Wisdom Schools and become part of a community dedicated to
              academic excellence, innovation, and character development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <Link
                to="/apply"
                className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-white hover:text-gray-400 border border-blue-400 transition"
              >
                Apply Now
              </Link> */}

              <Link
                to="/contact"
                className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:bg-white hover:text-gray-400 border border-blue-400 transitio"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-black text-gray-900">
              Why Enroll at Wisdom Schools?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              We provide an exceptional learning environment where every student
              is empowered to achieve academic excellence and personal growth.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
              <FaBookOpen className="text-5xl text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold">
                International Curriculum
              </h3>
              <p className="mt-3 text-gray-600">
                Cambridge education preparing students for global opportunities.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
              <FaUserGraduate className="text-5xl text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold">
                Qualified Teachers
              </h3>
              <p className="mt-3 text-gray-600">
                Experienced educators committed to student success.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
              <FaClipboardList className="text-5xl text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold">
                Holistic Development
              </h3>
              <p className="mt-3 text-gray-600">
                Academics, leadership, sports, and innovation in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
              <FaCheckCircle className="text-5xl text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold">
                Proven Excellence
              </h3>
              <p className="mt-3 text-gray-600">
                Outstanding academic results and successful graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Enrollment Process
            </h2>

            <p className="mt-4 text-gray-600">
              Follow these simple steps to join our community.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Submit Application",
                desc: "Complete the online admission form.",
              },
              {
                number: "02",
                title: "Document Review",
                desc: "Provide academic records and required documents.",
              },
              {
                number: "03",
                title: "Assessment",
                desc: "Attend placement tests or interviews if required.",
              },
              {
                number: "04",
                title: "Admission",
                desc: "Receive confirmation and begin your journey.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border bg-gray-50 p-8 text-center transition hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 text-white">
        {/* Background Image */}
        <img
          src={graduation}
          alt="Graduation"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        {/* Optional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-960/60 to-black/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* <span className="inline-block rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-300 backdrop-blur-sm">
            Admissions Open
          </span> */}

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Begin Your Educational
            <br />
            Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Applications are now open. Join a community dedicated to academic
            excellence, innovation, leadership, and preparing students for a
            successful future.
          </p>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 text-white hover:bg-white hover:text-gray-400 border border-blue-400 transition"
            >
              Start Application
            </Link> */}

          {/* <Link
              to="/contact"
              className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-900"
            >
              Speak to Admissions
            </Link> */}
          {/* </div> */}

          <div className="group relative inline-block mt-10 flex flex-wrap justify-center gap-4">
            <div className="pointer-events-none absolute -top-24 left-1/2 z-30 w-72 -translate-x-1/2 rounded-xl border border-yellow-400/30 bg-white p-4 text-center shadow-2xl opacity-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-100">
              <div className="text-2xl">🎓</div>

              <h3 className="mt-2 font-bold text-gray-900">
                Applications Opening Soon
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                We're preparing for the next admission cycle.
                Keep checking back—you'll be able to apply very soon!
              </p>
            </div>

            <Link
              to="/apply"
              className="rounded-lg border border-blue-400 bg-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollPage;
