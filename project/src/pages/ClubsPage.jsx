import React, { useState, useEffect } from "react";

// ================= IMAGES =================
import chinese1 from "../assets/images/chine1.jpeg";
import chinese2 from "../assets/images/chine2.jpeg";
import chinese3 from "../assets/images/chine5.jpeg";
import chinese4 from "../assets/images/chine3.jpeg";
import chinese5 from "../assets/images/chine4.jpeg";
import chinese6 from "../assets/images/chine7.jpeg";
import chinese7 from "../assets/images/chine6.jpeg";

import spelling1 from "../assets/images/spell1.jpg";
import spelling2 from "../assets/images/spell2.jpg";
import spelling3 from "../assets/images/spell3.jpg";
import spelling4 from "../assets/images/spell4.jpg";
import spelling5 from "../assets/images/spell5.jpg";


export default function ClubsPage() {
  const [chineseIndex, setChineseIndex] = useState(0);
  const [spellingIndex, setSpellingIndex] = useState(0);

  const chineseImages = [
    chinese1,
    chinese2,
    chinese3,
    chinese4,
    chinese5,
    chinese6,
    chinese7,
  ];

  const spellingImages = [
    spelling1,
    spelling2,
    spelling3,
    spelling4,
    spelling5,
  ];

  const clubs = [
    {
      title: "Chinese Club",
      description:
        "Bridging cultures and building global minds through Mandarin language, cultural exchange, and international competitions.",
      image: chinese1,
      link: "#chinese-club",
    },
    {
      title: "Spelling Bee Club",
      description:
        "Developing confident communicators through spelling, public speaking, vocabulary, and multilingual competitions.",
      image: spelling1,
      link: "#spelling-club",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChineseIndex((prev) => (prev + 1) % chineseImages.length);
      setSpellingIndex((prev) => (prev + 1) % spellingImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">

      {/* ================================================= */}
      {/* CLUB OVERVIEW */}
      {/* ================================================= */}

      <section className="py-5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            {/* <h2 className="text-4xl font-bold text-gray-900">
              Explore Our Clubs
            </h2> */}

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
              Every club offers learners unique opportunities to grow
              academically, socially, and personally through engaging
              experiences and competitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {clubs.map((club, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                    {club.title}
                  </h3>

                </div>

                <div className="p-8">

                  <p className="text-gray-600 leading-8 mb-8">
                    {club.description}
                  </p>

                  <a
                    href={club.link}
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white text-white px-6 py-3 bg-blue-600 rounded-full hover:bg-white hover:text-gray-400 border border-blue-400 transition"
                  >
                    Explore More →
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* CHINESE CLUB */}
      {/* ================================================= */}

      <section
        id="chinese-club"
        className="scroll-mt-24 py-16 border-t bg-white"
      >

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Chinese Club
            </span>

            <h2 className="text-3xl font-bold mt-3 mb-6">
              Bridging Cultures, Building Global Minds
            </h2>

            <p className="text-gray-600 leading-8">
              At Wisdom School, we believe that language is a bridge that
              connects cultures and opportunities. Through Mandarin learning,
              competitions, cultural exchanges, and partnerships with the
              Confucius Institute Rwanda, learners gain experiences that prepare
              them for a global future.
            </p>

            <div className="mt-8">
              <a
                href="/chineseClub"
                className="inline-flex bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 hover:bg-white text-white px-6 py-3 bg-blue-600 rounded-full hover:bg-white hover:text-gray-400 border border-blue-400 transition"
              >
                Read Full Story
              </a>
            </div>

          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">

            {chineseImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  chineseIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* SPELLING CLUB */}
      {/* ================================================= */}

      <section
        id="spelling-club"
        className="scroll-mt-24 py-16 bg-gray-50"
      >

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">

            {spellingImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  spellingIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}

          </div>

          <div className="order-1 lg:order-2">

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Spelling Bee Club
            </span>

            <h2 className="text-3xl font-bold mt-3 mb-6">
              Building Confident Communicators
            </h2>

            <p className="text-gray-600 leading-8">
              The Spelling Bee Club empowers learners to master English,
              Kiswahili, French, and Mandarin through competitions, vocabulary
              challenges, public speaking, and reading activities that build
              confidence and excellence.
            </p>

            <div className="mt-8">
              <a
                href="/spelling-bee-Club"
                className="inline-flex bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 hover:bg-white text-white px-6 py-3 bg-blue-600 rounded-full hover:bg-white hover:text-gray-400 border border-blue-400 transition"
              >
                Read Full Story
              </a>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}