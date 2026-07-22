import React, { useState, useEffect } from "react";
import img1 from "../assets/images/dir3.jpg";
import img2 from "../assets/images/dir2.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: img2,
    title: "Meeting with the Minister of Education",
    description:
      "Our Director and Operations Manager receiving an award for outstanding performance.",
  },
  {
    image: img1,
    title: "Strengthening Educational Partnerships",
    description:
      "Building strong collaborations to improve learning experiences and student success across Rwanda.",
  },
];
const testimonials = [
  {
    id: 1,
    name: "Mrs. Diane Uwase",
    role: "Parent",
    // image: img2,
    message:
      "Wisdom Schools has transformed my child's confidence and academic performance. I’m truly grateful for the dedicated teachers.",
  },
  {
    id: 2,
    name: "Mr. Jean Paul N.",
    role: "Parent",
    // image: img2,
    message:
      "The school environment is very safe and inspiring. My daughter loves going to school every day.",
  },
  {
    id: 3,
    name: "Mrs. Chantal M.",
    role: "Parent",
    // image: img2,
    message:
      "Excellent communication from teachers and strong academic support. I highly recommend Wisdom Schools.",
  },
];

export default function LeadershipSection() {
  const [current, setCurrent] = useState(0);
  const [index, setIndex] = useState(0);

  // auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  const cards = [testimonials[prev], testimonials[index], testimonials[next]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Leadership Spotlight
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Leading Education Through Vision & Partnership
          </h2>
        </div> */}

          {/* Main Layout */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[550px]">

                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}

                {/* Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">

                  <h3 className="text-3xl font-bold text-white">
                    {slides[current].title}
                  </h3>

                  <p className="mt-4 text-gray-200 leading-relaxed">
                    {slides[current].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-5">

              <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">

                <h3 className="text-3xl font-bold text-gray-900">
                  Building a Brighter Future
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  Wisdom Schools Rwanda remains committed to collaboration,
                  innovation, and academic excellence. Through partnerships
                  with educational stakeholders, we continuously enhance
                  learning opportunities for our students.
                </p>

                <div className="mt-10 space-y-6">

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900">
                      Educational Leadership
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Advancing quality education through strong leadership.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-bold text-gray-900">
                      Strategic Partnerships
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Collaborating with national institutions for growth.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-gray-900">
                      Student Success
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Ensuring every learner reaches their full potential.
                    </p>
                  </div>

                </div>

                {/* Navigation Dots */}
                <div className="flex gap-3 mt-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-3 rounded-full transition-all ${current === index
                        ? "w-10 bg-blue-600"
                        : "w-3 bg-gray-300"
                        }`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 leading-relaxed text-center">

          <h2 className="text-3xl leading-relaxed font-bold text-gray-900 mb-12">
            What Parents Say
          </h2>

          <div className="flex items-center justify-center gap-6">
            <AnimatePresence mode="wait">
              {cards.map((item, i) => {
                const isCenter = i === 1;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 80, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.5,
                      x: 0,
                      scale: isCenter ? 1 : 0.85,
                    }}
                    exit={{ opacity: 0, x: -80, scale: 0.7 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`w-[320px] p-6 rounded-2xl shadow-lg bg-white transition ${isCenter ? "z-10" : "opacity-70"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-500"
                    />

                    <p className="mt-6 text-gray-600 italic">
                      "{item.message}"
                    </p>

                    <h4 className="mt-6 font-bold text-gray-900">
                      {item.name}
                    </h4>

                    <span className="text-sm text-blue-600">
                      {item.role}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}