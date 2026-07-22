import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function FooterDetails() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-600 to-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Wisdom Schools Rwanda
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Nurturing learners in knowledge, character, and faith through
              quality education and holistic development.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">

              <a
                href="https://www.instagram.com/wisdomschoolsrw/"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/wisdomschoolrwa?s=11&t=nNuS4yTbDD3MOlAfIbhzFw"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.facebook.com/share/1BRn4QfXzh/?mibextid=wwXIfr"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-blue-400">Home</Link></li>
              <li><Link className="hover:text-blue-400">About</Link></li>
              <li><Link className="hover:text-blue-400">Academics</Link></li>
              <li><Link className="hover:text-blue-400">Gallery</Link></li>
              <li><Link className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-2">
                <FaLocationDot className="text-blue-400 mt-1" />
                <p>Musanze, Rwanda</p>
              </div>

              <div className="flex gap-2">
                <FaPhone className="text-blue-400 mt-1" />
                <div>
                  <p>+250 788 478 469</p>
                  <p>+250 788 768 880</p>
                </div>
              </div>

              <div className="flex gap-2">
                <FaEnvelope className="text-blue-400 mt-1" />
                <p>wisdomschoolrwanda@gmail.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* MAP SECTION (FULL WIDTH) */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">
            Find Us
          </h3>

          <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-700 h-[420px]">

            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.042942843313!2d30.064436194641257!3d-1.4997419337160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbf589c307d69b%3A0x95780d5422c6455e!2sMusanze%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1695405742456!5m2!1sen!2srw"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">

          <p>© 2025 Wisdom Schools Rwanda</p>

          <p>All rights reserved</p>

        </div>
      </div>

    </footer>
  );
}