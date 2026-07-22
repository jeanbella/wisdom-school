import React, { useState } from "react";
import nur1 from "../assets/images/ceremony.png";
import nur2 from "../assets/branches/nyamasheke.jpeg";
import nur3 from "../assets/branches/ngororero.jpeg";
import nur4 from "../assets/branches/airportVisit.jpeg";

// ── Data ──────────────────────────────────────────────────────────────────────
// const CATEGORIES = ["All", "Achievements", "Events", "Community", "Academic"];
const CATEGORIES = ["All"];

const BRANCH_COLORS = {
  "Musanze Campus":   { bg: "bg-blue-700",   light: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-700"   },
  "Nyamasheke Campus":  { bg: "bg-blue-700", light: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-600" },
  "Ngororero Campus":     { bg: "bg-blue-700",  light: "bg-blue-50", text: "text-blue-700",  dot: "bg-blue-600" },
  // "Rubavu Campus":   { bg: "bg-amber-600",   light: "bg-amber-50",  text: "text-amber-700",   dot: "bg-amber-500"  },
  // "Nyagatare Campus":{ bg: "bg-rose-700",    light: "bg-rose-50",   text: "text-rose-700",    dot: "bg-rose-600"   },
};

const stories = [
  {
    id: 1,
    branch: "Musanze Campus",
    category: "Events",
    title: "Musanze students Graduation Ceremony",
    excerpt: "The Musanze branch held a memorable graduation ceremony honoring students for their academic achievements, discipline, and leadership as they prepare for the next stage of their education.",
    image: nur1,
    date: "28 June 2026",
    // readTime: "4 min read",
    author: "Ms. Claire Ineza",
    authorRole: "STEM Coordinator",
    featured: true,
  },
  {
    id: 2,
    branch: "Nyamasheke Campus",
    category: "Events",
    title: "Students visit the Kigali Convention Centre for a learning experience",
    excerpt: "During the guided tour, students explored the convention centre’s modern facilities, learned how large international events are organized, and discovered career opportunities in hospitality, tourism, and event management.",
    image: nur2,
    date: "18 Jul 2026",
    // readTime: "3 min read",
    author: "Mr. Patrick Nkusi",
    authorRole: "Head Teacher",
    featured: false,
  },
  {
    id: 3,
    branch: "Ngororero Campus",
    category: "Events",
    title: "Students celebrate a memorable graduation ceremony",
    excerpt: "Students showcased traditional dance, poetry, drama, and music in a memorable evening celebration attended by over 500 guests.",
    image: nur3,
    date: "10 Jul 2026",
    // readTime: "5 min read",
    author: "Ms. Josephine Uwimana",
    authorRole: "Arts Teacher",
    featured: false,
  },
  {
    id: 4,
    branch: "Musanze Campus",
    category: "Academic",
    title: "Rubavu students visit Kigali International Airport for aviation learning experience",
    excerpt: "Students from the Rubavu branch toured Kigali International Airport, where they learned about airport operations, aviation safety, air traffic coordination, and career opportunities in the aviation industry through guided sessions with airport professionals.",
    image: nur4,
    date: "05 Jul 2026",
    // readTime: "4 min read",
    author: "Dr. Eric Habimana",
    authorRole: "Academic Director",
    featured: false,
  },
  // {
  //   id: 5,
  //   branch: "Nyagatare Campus",
  //   category: "Community",
  //   title: "New science lab opens doors to hands-on learning",
  //   excerpt: "A fully equipped laboratory donated by the Parent-Teacher Association is now open, offering students access to modern equipment for the first time.",
  //   image: nur1,
  //   date: "01 Jul 2026",
  //   readTime: "3 min read",
  //   author: "Mr. Joel Ntwari",
  //   authorRole: "Science Head",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   branch: "Kigali Campus",
  //   category: "Achievements",
  //   title: "Primary six students sweep regional mathematics olympiad",
  //   excerpt: "Five Kigali Campus students placed in the top ten at the Eastern Province Mathematics Olympiad, with two taking gold and silver.",
  //   image: nur2,
  //   date: "28 Jun 2026",
  //   readTime: "3 min read",
  //   author: "Ms. Sandrine Mukamana",
  //   authorRole: "Mathematics Lead",
  //   featured: false,
  // },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
function BranchPill({ branch, size = "sm" }) {
  const c = BRANCH_COLORS[branch] ?? { light: "bg-gray-100", text: "text-gray-600", dot: "bg-gray-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full ${c.light} ${c.text}
      ${size === "sm" ? "text-xs px-3 py-1" : "text-sm px-4 py-1.5"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {branch}
    </span>
  );
}

function CategoryBadge({ category }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
      {category}
    </span>
  );
}

function AuthorRow({ author, authorRole, date, readTime }) {
  const ini = author.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center
        text-xs font-bold text-slate-600 flex-shrink-0">
        {ini}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-700 truncate">{author}</p>
        <p className="text-xs text-slate-400 truncate">{authorRole}</p>
      </div>
      <div className="ml-auto flex-shrink-0 text-right">
        <p className="text-xs text-slate-500">{date}</p>
        <p className="text-xs text-slate-400">{readTime}</p>
      </div>
    </div>
  );
}

// ── Featured hero story ────────────────────────────────────────────────────────
function FeaturedStory({ story }) {
  const c = BRANCH_COLORS[story.branch] ?? {};
  return (
    <div className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
      {/* Image */}
      <div className="lg:col-span-7 relative overflow-hidden h-72 lg:h-auto">
        <img src={story.image} alt={story.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${c.bg ?? "bg-blue-700"}`}>
            ★ Featured
          </span>
          <CategoryBadge category={story.category} />
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <BranchPill branch={story.branch} size="md" />
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mt-4 mb-4">
            {story.title}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">{story.excerpt}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 space-y-5">
          <AuthorRow {...story} />
          <button className={`w-full py-3 rounded-xl font-semibold text-white transition shadow-lg hover:shadow-xl hover:opacity-90 ${c.bg ?? "bg-blue-700"}`}>
            Read Full Story →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Story card ─────────────────────────────────────────────────────────────────
function StoryCard({ story }) {
  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden
      hover:border-slate-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="overflow-hidden h-52 relative flex-shrink-0">
        <img src={story.image} alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={story.category} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <BranchPill branch={story.branch} />
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3
          group-hover:text-blue-700 transition-colors duration-200 flex-1">
          {story.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {story.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
          <AuthorRow {...story} />
          <button className="w-full py-2.5 rounded-xl text-sm font-semibold
            border border-slate-200 text-slate-700 hover:bg-slate-50
            hover:border-slate-300 transition-all flex items-center justify-center gap-2">
            Continue reading
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

// ── Branch filter pills ────────────────────────────────────────────────────────
function FilterBar({ active, onChange }) {
  const branches = ["All", ...Object.keys(BRANCH_COLORS)];
  return (
    <div className="flex flex-wrap gap-2">
      {branches.map(b => {
        const isAll = b === "All";
        const c = BRANCH_COLORS[b];
        const selected = active === b;
        return (
          <button key={b} onClick={() => onChange(b)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all
              ${selected
                ? isAll
                  ? "bg-slate-900 text-white border-slate-900"
                  : `${c.bg} text-white border-transparent`
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}>
            {b}
          </button>
        );
      })}
    </div>
  );
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { label: "Branches publishing", value: "12" },
    { label: "Stories this term",   value: "48" },
    { label: "Readers this month",  value: "2.4k" },
    { label: "Achievements shared", value: "31" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 rounded-2xl px-6 py-5 mb-10">
      {stats.map(({ label, value }) => (
        <div key={label} className="text-center">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-xs text-slate-400 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function BranchStories() {
  const [activeBranch, setActiveBranch] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = stories.find(s => s.featured);
  const rest = stories.filter(s => !s.featured);

  const filtered = rest.filter(s => {
    const branchOk   = activeBranch   === "All" || s.branch   === activeBranch;
    const categoryOk = activeCategory === "All" || s.category === activeCategory;
    return branchOk && categoryOk;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Header ── */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-0.5">
              Wisdom School Network
            </p>
            <h1 className="text-xl font-bold text-slate-900 leading-none">
              Branch Newsroom
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            {CATEGORIES.slice(1).map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                className={`hover:text-blue-700 transition-colors pb-0.5
                  ${activeCategory === c ? "text-blue-700 border-b-2 border-blue-700" : ""}`}>
                {c}
              </button>
            ))}
          </nav>

          <button className="hidden md:flex items-center gap-2 text-sm font-semibold
            text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-xl transition">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 1v14M1 8h14"/>
            </svg>
            Submit Story
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        {/* <StatsBar /> */}

        {/* Featured */}
        {featured && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-700 rounded-full" />
              <h2 className="text-lg font-bold text-slate-900">Featured Story</h2>
            </div>
            <FeaturedStory story={featured} />
          </section>
        )}

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Branch filter */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2.5">
                  Filter by campus
                </p>
                <FilterBar active={activeBranch} onChange={b => {
                  setActiveBranch(b);
                }} />
              </div>
            </div>

            {/* <div className="border-t border-slate-100 pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2.5">
                Filter by category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setActiveCategory(c)}
                    className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all
                      ${activeCategory === c
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                      }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* Section title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-700 rounded-full" />
            <h2 className="text-lg font-bold text-slate-900">
              Latest from Our Campuses
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
          </p>
        </div>

        {/* Story grid */}
        {filtered.length > 0 ? (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filtered.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </section>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <svg viewBox="0 0 48 48" width="48" height="48" fill="none"
              stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 text-slate-300">
              <path d="M8 8h32v32H8zM16 20h16M16 28h10"/>
            </svg>
            <p className="text-lg font-semibold text-slate-500">No stories found</p>
            <p className="text-sm mt-1">Try a different campus or category filter.</p>
            <button onClick={() => { setActiveBranch("All"); setActiveCategory("All"); }}
              className="mt-4 text-sm font-semibold text-blue-700 hover:underline">
              Clear filters
            </button>
          </div>
        )}

        {/* CTA */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-bold mb-3">
                Editorial Office
              </p>
              <h3 className="text-3xl font-bold text-white mb-3">
                Share your branch story
              </h3>
              <p className="text-blue-200 max-w-xl leading-relaxed">
                Principals, teachers, and student leaders can submit achievements, event reports, and inspiring learner stories for publication across the Wisdom School network.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                  Submit a Story
                </button>
                <button className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                  Editorial Guidelines
                </button>
              </div>
            </div>

            {/* Mini branch list */}
            {/* <div className="bg-white/10 border border-white/15 rounded-2xl p-6 min-w-[200px]">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
                Active campuses
              </p>
              {Object.keys(BRANCH_COLORS).map(b => {
                const c = BRANCH_COLORS[b];
                const count = stories.filter(s => s.branch === b).length;
                return (
                  <div key={b} className="flex items-center gap-2.5 mb-3 last:mb-0">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                    <span className="text-sm text-white/80 flex-1">{b}</span>
                    <span className="text-xs text-white/50">{count} {count === 1 ? "story" : "stories"}</span>
                  </div>
                );
              })}
            </div> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-slate-200 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-700">Wisdom School Network</p>
            <p className="text-xs text-slate-400">© 2026 · Branch Newsroom · All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Media Kit</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
