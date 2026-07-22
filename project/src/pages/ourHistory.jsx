import React from "react";
import photo from "../assets/gallery/gallery9.JPG";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(end / 100); // controls speed

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <h3 className="text-4xl font-bold">{count}+</h3>;
};

export default function OurHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the journey of our school, from its humble beginnings to
            becoming a center of academic excellence and character development.
          </p>
        </div>
      </section> */}

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            A Legacy of Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in <span className="font-semibold">[2008]</span>, our
            school began with a vision to provide quality education and nurture
            future leaders. Over the years, we have grown from a small learning
            institution into a respected educational community known for
            academic achievement, innovation, and holistic student development.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Journey Through the Years
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-6">
          {[
            {
              year: "2008",
              title: "School Founded",
              description:
                "The school opened its doors to its first group of students with a commitment to quality education.",
            },
            {
              year: "2010",
              title: "Campus Expansion",
              description:
                "New classrooms, science laboratories, and a library were added to support growing enrollment.",
            },
            {
              year: "2015",
              title: "Academic Recognition",
              description:
                "The school received regional recognition for outstanding academic performance.",
            },
            {
              year: "2020",
              title: "Digital Learning Initiative",
              description:
                "Technology-enhanced learning was introduced to improve student engagement and accessibility.",
            },
            {
              year: "Today",
              title: "Continuing Excellence",
              description:
                "We continue to inspire, educate, and prepare students for success in a changing world.",
            },
          ].map((event, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[12px]" />
              <span className="text-blue-600 font-bold text-lg">
                {event.year}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Through History */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Building the Future
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Throughout our history, we have remained committed to fostering
                academic excellence, personal growth, leadership, and community
                service. Every generation of students contributes to the legacy
                of our institution, helping shape a brighter future for society.
              </p>
            </div>

            <div>
              <img
                src={photo}
                alt="School History"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Counter end={17} />
              <p>Years of Excellence</p>
            </div>

            <div>
              <Counter end={5000} />
              <p>Graduates</p>
            </div>

            <div>
              <Counter end={200} />
              <p>Dedicated Staff</p>
            </div>

            <div>
              <Counter end={20} />
              <p>Awards & Recognitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      {/* <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Story Continues
        </h2>
        <p className="text-gray-600 text-lg">
          As we look to the future, we remain dedicated to empowering students
          with knowledge, skills, and values that will help them thrive and make
          a positive impact on the world.
        </p>
      </section> */}
      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Story
          </span>

          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
            Who We Are
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Wisdom Schools Rwanda is a family-centered education community
              dedicated to nurturing learners who grow in knowledge, character,
              and faith. We believe education is a shared journey between the
              school, parents, and community, united in shaping responsible and
              compassionate citizens prepared for the challenges of the modern
              world.
            </p>

            <p>
              Founded in <strong>2008</strong> with just <strong>five students</strong>,
              Wisdom Schools Rwanda began as a humble seed of faith and vision to
              transform lives through Kingdom of God–centered education. Through
              God's blessings and the continued trust of our community, that small
              beginning has grown into a chain of thriving schools across the
              nation, each committed to excellence in academics, character
              formation, and innovation.
            </p>

            <p>
              Today, as of <strong>2025</strong>, Wisdom Schools stands as a
              testimony of God's grace and dedication to quality education—a
              network producing top achievers and responsible citizens who make a
              positive impact in Rwanda and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Excellence Through The Years
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              A Legacy of Excellence
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Since our humble beginnings, Wisdom Schools Rwanda has
                consistently produced the best of the best—students who excel
                academically while embodying strong moral and spiritual values.
                Over the years, our learners have achieved outstanding results at
                both national and regional levels, positioning Wisdom Schools
                among Rwanda's top-performing institutions.
              </p>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  2019 National Achievement
                </h3>
                <p className="mt-2">
                  In 2019, our student <strong>HUMURA ELVIN</strong> made us proud
                  by becoming the first-ranked student in Rwanda, a milestone that
                  strengthened our commitment to academic excellence and inspired
                  future generations of learners.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6 py-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  2024–2025 National Achievement
                </h3>
                <p className="mt-2">
                  Once again, Wisdom Schools celebrated a remarkable achievement
                  when <strong>ARAKAZA LEO VICTOR</strong> from
                  <strong> Wisdom School Musanze</strong> emerged as the
                  first-ranked student in Rwanda with an impressive average score
                  of <strong>99.4%</strong> in the Primary Leaving Examination
                  (PLE).
                </p>
              </div>

              <p>
                These achievements are more than academic triumphs; they are a
                testimony to our unwavering commitment to quality education,
                disciplined learning, character formation, and God-centered
                success. As we continue to grow, we remain dedicated to nurturing
                future leaders who will positively transform their communities and
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}