import { useState } from "react";

// ─── Branch data ───────────────────────────────────────────────────────────────
const BRANCHES = [
    // Nursery
    { id: "n1", name: "Kimihurura Nursery", type: "nursery", students: 148, teachers: 12, classes: 6, attendance: 97, feeRate: 94, lastActive: "Today, 8:42 AM" },
    { id: "n2", name: "Kacyiru Nursery", type: "nursery", students: 134, teachers: 11, classes: 5, attendance: 96, feeRate: 88, lastActive: "Today, 9:10 AM" },
    { id: "n3", name: "Remera Nursery", type: "nursery", students: 162, teachers: 13, classes: 7, attendance: 98, feeRate: 97, lastActive: "Today, 7:55 AM" },
    { id: "n4", name: "Gisozi Nursery", type: "nursery", students: 121, teachers: 10, classes: 5, attendance: 95, feeRate: 72, lastActive: "Yesterday, 3:20 PM" },
    { id: "n5", name: "Nyamirambo Nursery", type: "nursery", students: 139, teachers: 11, classes: 6, attendance: 97, feeRate: 85, lastActive: "Today, 8:30 AM" },
    // Primary
    { id: "p1", name: "Kimihurura Primary", type: "primary", students: 284, teachers: 18, classes: 12, attendance: 98, feeRate: 96, lastActive: "Today, 8:05 AM" },
    { id: "p2", name: "Kacyiru Primary", type: "primary", students: 261, teachers: 16, classes: 11, attendance: 97, feeRate: 91, lastActive: "Today, 8:50 AM" },
    { id: "p3", name: "Remera Primary", type: "primary", students: 310, teachers: 20, classes: 13, attendance: 99, feeRate: 98, lastActive: "Today, 7:48 AM" },
    { id: "p4", name: "Gikondo Primary", type: "primary", students: 238, teachers: 15, classes: 10, attendance: 96, feeRate: 68, lastActive: "2 days ago" },
    { id: "p5", name: "Kicukiro Primary", type: "primary", students: 275, teachers: 17, classes: 12, attendance: 98, feeRate: 93, lastActive: "Today, 9:00 AM" },
    // High School
    { id: "h1", name: "Main Campus High", type: "highschool", students: 420, teachers: 32, classes: 18, attendance: 99, feeRate: 99, lastActive: "Today, 7:30 AM" },
    { id: "h2", name: "Gasabo High School", type: "highschool", students: 358, teachers: 28, classes: 15, attendance: 98, feeRate: 95, lastActive: "Today, 8:15 AM" },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
const TYPE_META = {
    nursery: { label: "Nursery", color: "pink", pill: "bg-pink-50 text-pink-700 border-pink-200", icon_bg: "bg-pink-100 text-pink-600", bar: "bg-pink-400", ring: "ring-pink-300" },
    primary: { label: "Primary", color: "blue", pill: "bg-blue-50 text-blue-700 border-blue-200", icon_bg: "bg-blue-100 text-blue-600", bar: "bg-blue-500", ring: "ring-blue-300" },
    highschool: { label: "High School", color: "violet", pill: "bg-violet-50 text-violet-700 border-violet-200", icon_bg: "bg-violet-100 text-violet-600", bar: "bg-violet-500", ring: "ring-violet-300" },
};

const STAT_META = [
    {
        key: "students",
        label: "Students",
        accent: { icon: "bg-blue-50 text-blue-600", bar: "bg-blue-500", trend: "bg-emerald-50 text-emerald-700" },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        format: (v) => v.toLocaleString(),
        trend: "+3.2%",
        period: "vs last term",
    },
    {
        key: "teachers",
        label: "Teaching Staff",
        accent: { icon: "bg-violet-50 text-violet-600", bar: "bg-violet-500", trend: "bg-emerald-50 text-emerald-700" },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        format: (v) => v.toString(),
        trend: "+2",
        period: "new this term",
    },
    {
        key: "classes",
        label: "Active Classes",
        accent: { icon: "bg-amber-50 text-amber-600", bar: "bg-amber-400", trend: "bg-slate-100 text-slate-500" },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
        format: (v) => v.toString(),
        trend: "—",
        period: "unchanged",
    },
    {
        key: "attendance",
        label: "Attendance Rate",
        accent: { icon: "bg-emerald-50 text-emerald-600", bar: "bg-emerald-500", trend: "bg-emerald-50 text-emerald-700" },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        format: (v) => `${v}%`,
        trend: "+0.4%",
        period: "vs last week",
    },
];

function sum(branches, key) {
    return branches.reduce((a, b) => a + b[key], 0);
}
function avg(branches, key) {
    return Math.round(branches.reduce((a, b) => a + b[key], 0) / branches.length);
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
const IconChevron = ({ dir = "down" }) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        className={`w-3.5 h-3.5 transition-transform duration-200 ${dir === "up" ? "rotate-180" : ""}`}>
        <path d="M3 6l5 5 5-5" />
    </svg>
);
const IconClose = () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M3 3l10 10M13 3L3 13" />
    </svg>
);

// ─── Sub-components ────────────────────────────────────────────────────────────
const TrendBadge = ({ value }) => {
    const neutral = value === "—";
    return (
        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${neutral ? "bg-slate-100 text-slate-500" : "bg-emerald-50 text-emerald-700"}`}>
            {!neutral && (
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M2 9L6 3l4 6" />
                </svg>
            )}
            {value}
        </span>
    );
};

const StatCard = ({ meta, value, barPct = 70 }) => (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-center justify-between">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${meta.accent.icon}`}>{meta.icon}</div>
            <TrendBadge value={meta.trend} />
        </div>
        <div>
            <p className="text-3xl font-bold text-slate-800 tracking-tight leading-none mb-1">{meta.format(value)}</p>
            <p className="text-sm text-slate-500 font-medium">{meta.label}</p>
        </div>
        <div className="flex items-center gap-2 pt-1 border-t border-slate-50">
            <div className="h-1 flex-1 rounded-full bg-slate-100">
                <div className={`h-1 rounded-full ${meta.accent.bar}`} style={{ width: `${barPct}%` }} />
            </div>
            <span className="text-xs text-slate-400 whitespace-nowrap">{meta.period}</span>
        </div>
    </div>
);

// ─── Branch selector dropdown ──────────────────────────────────────────────────
const BranchSelector = ({ selected, onChange }) => {
    const [open, setOpen] = useState(false);

    const groups = [
        { type: "nursery", branches: BRANCHES.filter(b => b.type === "nursery") },
        { type: "primary", branches: BRANCHES.filter(b => b.type === "primary") },
        { type: "highschool", branches: BRANCHES.filter(b => b.type === "highschool") },
    ];

    const label = selected ? selected.name : "All Branches (Network-wide)";
    const meta = selected ? TYPE_META[selected.type] : null;

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all duration-150 min-w-[240px]"
            >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selected ? TYPE_META[selected.type].bar : "bg-slate-300"}`} />
                <span className="flex-1 text-left truncate">{label}</span>
                {selected && (
                    <span
                        onClick={(e) => { e.stopPropagation(); onChange(null); }}
                        className="text-slate-300 hover:text-slate-500 transition-colors ml-1"
                    >
                        <IconClose />
                    </span>
                )}
                <IconChevron dir={open ? "up" : "down"} />
            </button>

            {open && (
                <div className="absolute top-full mt-2 left-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 w-72 overflow-hidden">
                    {/* All option */}
                    <button
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 transition-colors border-b border-slate-100 ${!selected ? "text-slate-800 font-semibold" : "text-slate-600"}`}
                        onClick={() => { onChange(null); setOpen(false); }}
                    >
                        <span className="w-2 h-2 rounded-full bg-slate-300 flex-shrink-0" />
                        All Branches
                        {!selected && <span className="ml-auto text-xs text-slate-400">Selected</span>}
                    </button>

                    {groups.map(({ type, branches }) => {
                        const m = TYPE_META[type];
                        return (
                            <div key={type}>
                                <p className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest ${type === "nursery" ? "text-pink-500" : type === "primary" ? "text-blue-500" : "text-violet-500"
                                    } bg-slate-50 border-b border-slate-100`}>
                                    {m.label}
                                </p>
                                {branches.map(b => (
                                    <button
                                        key={b.id}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${selected?.id === b.id ? "bg-slate-50 font-semibold text-slate-800" : "text-slate-600"}`}
                                        onClick={() => { onChange(b); setOpen(false); }}
                                    >
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${m.bar}`} />
                                        {b.name}
                                        {selected?.id === b.id && <span className="ml-auto text-xs text-slate-400">Selected</span>}
                                    </button>
                                ))}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};



// ─── Single branch detail view ─────────────────────────────────────────────────
const BranchDetail = ({ branch }) => {
    const m = TYPE_META[branch.type];

    const mockStudents = [
        { name: "Amina Uwase", grade: branch.type === "nursery" ? "Nursery 2" : branch.type === "primary" ? "P.3" : "S.4", status: "present" },
        { name: "Kevin Mugisha", grade: branch.type === "nursery" ? "Nursery 1" : branch.type === "primary" ? "P.5" : "S.6", status: "present" },
        { name: "Claire Ineza", grade: branch.type === "nursery" ? "Nursery 3" : branch.type === "primary" ? "P.1" : "S.1", status: "absent" },
        { name: "David Nkusi", grade: branch.type === "nursery" ? "Nursery 2" : branch.type === "primary" ? "P.4" : "S.3", status: "present" },
        { name: "Sandrine Uwi", grade: branch.type === "nursery" ? "Nursery 1" : branch.type === "primary" ? "P.6" : "S.2", status: "present" },
    ];

    const mockTeachers = [
        { name: "Ms. Josephine K.", subject: branch.type === "highschool" ? "Mathematics" : "Class Teacher", classes: 4 },
        { name: "Mr. Patrick N.", subject: branch.type === "highschool" ? "Biology" : "Class Teacher", classes: 3 },
        { name: "Ms. Grace U.", subject: branch.type === "highschool" ? "English Lit" : "P.E. & Arts", classes: 5 },
    ];

    return (
        <div className="space-y-5">
            {/* Branch header card */}
            <div className={`bg-white rounded-2xl border p-5 flex items-center gap-4 ${branch.type === "nursery" ? "border-pink-100" : branch.type === "primary" ? "border-blue-100" : "border-violet-100"
                }`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${m.icon_bg}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="text-lg font-bold text-slate-800 leading-tight">{branch.name}</p>
                    <span className={`inline-block text-xs font-semibold border rounded-full px-2.5 py-0.5 mt-1 ${m.pill}`}>{m.label}</span>
                </div>
                <div className="text-right">
                    <p className={`text-2xl font-bold ${branch.type === "nursery" ? "text-pink-500" : branch.type === "primary" ? "text-blue-500" : "text-violet-600"}`}>
                        {branch.attendance}%
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Today's attendance</p>
                </div>
            </div>

            {/* Stat cards for this branch */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STAT_META.map(meta => {
                    const raw = meta.key === "attendance" ? branch.attendance : branch[meta.key];
                    return <StatCard key={meta.key} meta={meta} value={raw} barPct={meta.key === "attendance" ? branch.attendance : 70} />;
                })}
            </div>

            {/* Students + Teachers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Students sample */}
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-700">Students</h3>
                        <span className="text-xs text-slate-400">{branch.students} enrolled</span>
                    </div>
                    <ul className="divide-y divide-slate-50">
                        {mockStudents.map((s, i) => (
                            <li key={i} className="flex items-center gap-3 px-5 py-3">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white ${m.bar}`}>
                                    {s.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 truncate">{s.name}</p>
                                    <p className="text-xs text-slate-400">{s.grade}</p>
                                </div>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.status === "present" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                                    {s.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="px-5 py-3 border-t border-slate-50 bg-slate-50/50">
                        <button className="text-xs text-blue-600 font-medium hover:underline">View all {branch.students} students →</button>
                    </div>
                </div>

                {/* Teachers sample */}
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-700">Teaching Staff</h3>
                        <span className="text-xs text-slate-400">{branch.teachers} staff</span>
                    </div>
                    <ul className="divide-y divide-slate-50">
                        {mockTeachers.map((t, i) => (
                            <li key={i} className="flex items-center gap-3 px-5 py-3.5">
                                <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                    {t.name.split(" ").slice(1).map(n => n[0]).join("")}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 truncate">{t.name}</p>
                                    <p className="text-xs text-slate-400">{t.subject}</p>
                                </div>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">{t.classes} classes</span>
                            </li>
                        ))}
                    </ul>
                    <div className="px-5 py-3 border-t border-slate-50 bg-slate-50/50">
                        <button className="text-xs text-blue-600 font-medium hover:underline">View all {branch.teachers} staff →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Recent Activities panel ───────────────────────────────────────────────────
const ACTIVITIES = [
    { type: "fee", icon: "💳", label: "Fee payment received", detail: "Kevin Mugisha · Remera Primary", time: "2 min ago", color: "bg-emerald-50 text-emerald-600" },
    { type: "attendance", icon: "✅", label: "Attendance marked", detail: "P.4 Blue · Kacyiru Primary", time: "14 min ago", color: "bg-blue-50 text-blue-600" },
    { type: "student", icon: "🎓", label: "New student enrolled", detail: "Sandrine Uwimana · Nursery 2", time: "31 min ago", color: "bg-pink-50 text-pink-600" },
    { type: "teacher", icon: "👤", label: "Staff record updated", detail: "Mr. Patrick N. · Main Campus High", time: "1 hr ago", color: "bg-violet-50 text-violet-600" },
    { type: "fee", icon: "💳", label: "Fee payment received", detail: "Amina Uwase · Kimihurura Nursery", time: "1 hr ago", color: "bg-emerald-50 text-emerald-600" },
    { type: "alert", icon: "⚠️", label: "Low fee collection flagged", detail: "Gikondo Primary · 68% collected", time: "2 hr ago", color: "bg-amber-50 text-amber-600" },
    { type: "attendance", icon: "✅", label: "Attendance marked", detail: "S.3 · Gasabo High School", time: "3 hr ago", color: "bg-blue-50 text-blue-600" },
    { type: "student", icon: "🎓", label: "Student transferred", detail: "David Nkusi · Gisozi → Remera Nursery", time: "Yesterday", color: "bg-pink-50 text-pink-600" },
];

const RecentActivities = () => (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div>
                <h2 className="text-sm font-semibold text-slate-700">Recent Activities</h2>
                <p className="text-xs text-slate-400 mt-0.5">All branches · Today</p>
            </div>
            <button className="text-xs text-blue-600 font-medium hover:underline">View all</button>
        </div>
        <ul className="divide-y divide-slate-50">
            {ACTIVITIES.map((a, i) => (
                <li key={i} className="flex items-center gap-3 px-6 py-3 hover:bg-slate-50/60 transition-colors">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm ${a.color}`}>
                        {a.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-700 truncate">{a.label}</p>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">{a.detail}</p>
                    </div>
                    <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0">{a.time}</span>
                </li>
            ))}
        </ul>
    </div>
);

// ─── New Students panel ────────────────────────────────────────────────────────
const NEW_STUDENTS = [
    { name: "Sandrine Uwimana", branch: "Nyamirambo Nursery", grade: "Nursery 2", date: "Today", avatar: "SU", color: "bg-pink-400" },
    { name: "Eric Habimana", branch: "Remera Primary", grade: "P.1", date: "Today", avatar: "EH", color: "bg-blue-500" },
    { name: "Chloe Mukamana", branch: "Main Campus High", grade: "S.1", date: "Today", avatar: "CM", color: "bg-violet-500" },
    { name: "Joel Ntwari", branch: "Kicukiro Primary", grade: "P.3", date: "Yesterday", avatar: "JN", color: "bg-blue-500" },
    { name: "Ines Umurerwa", branch: "Kacyiru Nursery", grade: "Nursery 1", date: "Yesterday", avatar: "IU", color: "bg-pink-400" },
    { name: "Olivier Ishimwe", branch: "Gasabo High School", grade: "S.2", date: "2 days ago", avatar: "OI", color: "bg-violet-500" },
];

const NewStudentsPanel = () => (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div>
                <h2 className="text-sm font-semibold text-slate-700">New Students Registered</h2>
                <p className="text-xs text-slate-400 mt-0.5">{NEW_STUDENTS.filter(s => s.date === "Today").length} registered today</p>
            </div>
            <button className="text-xs text-blue-600 font-medium hover:underline">View all</button>
        </div>
        <ul className="divide-y divide-slate-50">
            {NEW_STUDENTS.map((s, i) => (
                <li key={i} className="flex items-center gap-3 px-6 py-3 hover:bg-slate-50/60 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${s.color}`}>
                        {s.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-700 truncate">{s.name}</p>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">{s.branch} · {s.grade}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${s.date === "Today" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                        }`}>
                        {s.date}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

// ─── Quick Actions panel ───────────────────────────────────────────────────────
const QUICK_ACTIONS = [
    {
        label: "Enroll Student",
        desc: "Register a new student to any branch",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 17a8 8 0 0 1 12.458-6.641M15 13h4m-2-2v4" />
            </svg>
        ),
        color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
    {
        label: "Mark Attendance",
        desc: "Log today's attendance for a class",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 10l4 4 8-8" /><rect x="1" y="1" width="18" height="18" rx="3" />
            </svg>
        ),
        color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
    },
    {
        label: "Record Fee Payment",
        desc: "Log a fee payment against a student",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="1" y="4" width="18" height="13" rx="2" /><path d="M1 8h18" />
            </svg>
        ),
        color: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    },
    {
        label: "Add Teacher",
        desc: "Register a new staff member",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M13 17v-1a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1" /><circle cx="7" cy="7" r="4" /><path d="M16 11v6m-3-3h6" />
            </svg>
        ),
        color: "bg-violet-50 text-violet-600 hover:bg-violet-100",
    },
    {
        label: "Create Class",
        desc: "Add a new class to a branch",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="7" height="7" rx="1" /><rect x="11" y="2" width="7" height="7" rx="1" />
                <rect x="2" y="11" width="7" height="7" rx="1" /><path d="M14.5 11v7M11 14.5h7" />
            </svg>
        ),
        color: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    },
    {
        label: "Generate Report",
        desc: "Export attendance or fee summary",
        icon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 2h8l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M8 2v4h4M6 11h8M6 14h5" />
            </svg>
        ),
        color: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    },
];

const QuickActionsPanel = () => (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-700">Quick Actions</h2>
            <p className="text-xs text-slate-400 mt-0.5">Common admin tasks</p>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-3">
            {QUICK_ACTIONS.map((a, i) => (
                <button
                    key={i}
                    className={`flex flex-col items-start gap-2.5 p-4 rounded-xl border border-transparent transition-all duration-150 text-left group ${a.color}`}
                >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/70 shadow-sm">
                        {a.icon}
                    </div>
                    <div>
                        <p className="text-sm font-semibold leading-tight">{a.label}</p>
                        <p className="text-xs mt-0.5 opacity-70 leading-snug">{a.desc}</p>
                    </div>
                </button>
            ))}
        </div>
    </div>
);

// ─── Network-wide overview (default view) ──────────────────────────────────────
const NetworkOverview = ({ onSelectBranch }) => {
    const totals = {
        students: sum(BRANCHES, "students"),
        teachers: sum(BRANCHES, "teachers"),
        classes: sum(BRANCHES, "classes"),
        attendance: avg(BRANCHES, "attendance"),
    };

    const groups = [
        { type: "nursery", branches: BRANCHES.filter(b => b.type === "nursery") },
        { type: "primary", branches: BRANCHES.filter(b => b.type === "primary") },
        { type: "highschool", branches: BRANCHES.filter(b => b.type === "highschool") },
    ];

    return (
        <div className="space-y-5">
            {/* Network totals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STAT_META.map(meta => (
                    <StatCard key={meta.key} meta={meta} value={totals[meta.key]} barPct={meta.key === "attendance" ? totals.attendance : 72} />
                ))}
            </div>

            {/* Per-type summaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {groups.map(({ type, branches }) => {
                    const m = TYPE_META[type];
                    const gs = sum(branches, "students");
                    const gt = sum(branches, "teachers");
                    const ga = avg(branches, "attendance");
                    return (
                        <div key={type} className="bg-white rounded-2xl border border-slate-100 p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`w-2.5 h-2.5 rounded-full ${m.bar}`} />
                                <h3 className="text-sm font-semibold text-slate-700">{m.label}</h3>
                                <span className="ml-auto text-xs text-slate-400">{branches.length} branches</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {[
                                    { label: "Students", val: gs.toLocaleString() },
                                    { label: "Teachers", val: gt },
                                    { label: "Attend.", val: `${ga}%` },
                                ].map(s => (
                                    <div key={s.label} className="bg-slate-50 rounded-xl p-2.5 text-center">
                                        <p className="text-base font-bold text-slate-800">{s.val}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-1.5">
                                {branches.map(b => (
                                    <button
                                        key={b.id}
                                        onClick={() => onSelectBranch(b)}
                                        className="w-full flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg px-2 py-1.5 transition-colors text-left group"
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.bar}`} />
                                        <span className="flex-1 truncate">{b.name}</span>
                                        <span className="text-slate-400 group-hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom three panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Recent Activities — spans 1 col */}
                <RecentActivities />

                {/* New Students — spans 1 col */}
                <NewStudentsPanel />

                {/* Quick Actions — spans 1 col */}
                <QuickActionsPanel />
            </div>
        </div>
    );
};

// ─── Main component ────────────────────────────────────────────────────────────
const DashboardHome = () => {
    const [selectedBranch, setSelectedBranch] = useState(null);

    const pageTitle = selectedBranch ? selectedBranch.name : "All Branches";
    const pageSubtitle = selectedBranch
        ? `${TYPE_META[selectedBranch.type].label} · Branch Detail`
        : "Network-wide overview";

    return (
        <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
                        {pageSubtitle}
                    </p>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">{pageTitle}</h1>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <span className="font-semibold text-slate-700">{new Date().toDateString()}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        <span className="text-emerald-600 font-semibold">Live</span>
                    </div>
                    <BranchSelector selected={selectedBranch} onChange={setSelectedBranch} />
                </div>
            </div>

            {/* Content */}
            {selectedBranch
                ? <BranchDetail branch={selectedBranch} />
                : <NetworkOverview onSelectBranch={setSelectedBranch} />
            }
        </div>
    );
};

export default DashboardHome;
