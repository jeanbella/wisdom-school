import {
  Trophy,
  BookOpen,
  Languages,
  Users,
  ArrowLeft,
  ChevronRight,
  Mic,
} from "lucide-react";

import spelling1 from "../assets/images/spell1.jpg";
import spelling2 from "../assets/images/spell2.jpg";
import spelling3 from "../assets/images/spell3.jpg";
import spelling4 from "../assets/images/spell4.jpg";
import spelling5 from "../assets/images/spell5.jpg";

export default function SpellingBeeClubPage() {
  const gallery = [
    spelling1,
    spelling2,
    spelling3,
    spelling4,
    spelling5,
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}

      <section className="relative h-[70vh]">

        <img
          src={spelling1}
          alt="Spelling Bee Club"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-6xl mx-auto px-6 text-white">

            <a
              href="/student-life/clubs"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-600 mb-6"
            >
              <ArrowLeft size={18} />
              Back to Clubs
            </a>

            <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl">
              Wisdom School Spelling Bee Club
            </h1>

            <p className="mt-6 text-xl max-w-3xl leading-9 text-gray-200">
              Building confident communicators through language mastery,
              vocabulary excellence, public speaking, and international
              competition.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="uppercase tracking-widest font-semibold text-blue-600">
              About The Club
            </span>

            <h2 className="text-3xl font-bold mt-4 mb-6">
              A Platform for Language Excellence
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              The Wisdom School Spelling Bee Club empowers learners to become
              excellent readers, confident speakers, and skilled communicators.
              Through spelling competitions and language enrichment programs,
              students sharpen their vocabulary and critical thinking abilities.
            </p>

            <p className="text-gray-600 leading-8">
              The club nurtures discipline, confidence, quick thinking, and a
              passion for lifelong learning while encouraging healthy academic
              competition among learners.
            </p>

          </div>

          <img
            src={spelling2}
            alt=""
            className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
          />

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold">
              Why Join the Club?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 shadow">

              <BookOpen
                size={42}
                className="text-blue-700 mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                Vocabulary
              </h3>

              <p className="text-gray-600">
                Expand vocabulary and improve reading comprehension.
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow">

              <Mic
                size={42}
                className="text-red-600 mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                Public Speaking
              </h3>

              <p className="text-gray-600">
                Build confidence when speaking before audiences.
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow">

              <Languages
                size={42}
                className="text-green-600 mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                Multiple Languages
              </h3>

              <p className="text-gray-600">
                Practice English, Kiswahili, French, and Mandarin.
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow">

              <Users
                size={42}
                className="text-yellow-500 mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                Teamwork
              </h3>

              <p className="text-gray-600">
                Learn through collaboration and healthy competition.
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

          <div className="space-y-10 border-l-4 border-yellow-500 pl-8">

            <div>

              <h3 className="text-2xl font-bold">
                International Competition – Dubai 2021
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Wisdom School proudly participated in the International
                Spelling Competition in Dubai alongside schools from around the
                world and achieved exceptional success.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Outstanding Performance
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Learners won trophies across junior and senior categories,
                demonstrating excellence in spelling, pronunciation, and
                communication skills.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Continuous Growth
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Weekly spelling challenges and language workshops continue to
                inspire students to reach new levels of achievement every year.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ACTIVITIES ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold">
              Club Activities
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Weekly Spelling Challenges",
              "Reading Workshops",
              "Public Speaking Sessions",
              "Vocabulary Games",
              "Inter-Class Competitions",
              "Language Appreciation Events",
            ].map((activity, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >

                <h3 className="font-semibold text-xl">
                  {activity}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
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

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold leading-relaxed">
            "Words are the wings of thought — and we teach our learners to soar."
          </h2>

          <p className="mt-8 text-red-100 text-xl">
            Wisdom School Spelling Bee Club
          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Become a Champion of Words
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-10">
            Join the Spelling Bee Club and unlock your potential through
            language mastery, confidence, leadership, and unforgettable
            competition experiences.
          </p>

          {/* <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition">

            Join the Club

            <ChevronRight size={20} />

          </button> */}

        </div>

      </section>

    </div>
  );
}