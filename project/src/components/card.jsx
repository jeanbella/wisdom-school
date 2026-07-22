import { useState, useRef } from "react";

const BRANCHES = [
  "Kimihurura Nursery",
  "Kacyiru Nursery",
  "Remera Nursery",
  "Gisozi Nursery",
  "Nyamirambo Nursery",
];

const DEFAULT = {
  firstName: "Amina",
  lastName: "Uwase",
  className: "Nursery 2",
  branch: "Nyamirambo Nursery",
  dob: "2021-06-04",
  parentName: "Claudine Uwase",
  parentPhone: "+250 788 000 088",
  bloodGroup: "A+",
  idNumber: "NRS-2025-0088",
  validUntil: "July 2026",
  photo: null,
};

function initials(first, last) {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase();
}

function formatDOB(val) {
  if (!val) return "—";
  const d = new Date(val);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

// ── Print styles injected once ────────────────────────────────────────────────
const PRINT_CSS = `
@media print {
  body * { visibility: hidden !important; }
  #nursery-card-print, #nursery-card-print * { visibility: visible !important; }
  #nursery-card-print {
    position: fixed !important;
    top: 50% !important; left: 50% !important;
    transform: translate(-50%, -50%) !important;
    box-shadow: none !important;
  }
  .no-print { display: none !important; }
}
`;

// ── Dot pattern SVG background ────────────────────────────────────────────────
const DOT_BG = `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='rgba(255,255,255,0.18)'/%3E%3C/svg%3E")`;

// ── The actual card (pure display) ───────────────────────────────────────────
function IDCard({ data }) {
  const { firstName, lastName, className: cls, branch, dob, parentName,
          parentPhone, bloodGroup, idNumber, validUntil, photo } = data;
  const ini = initials(firstName, lastName);

  return (
    <div
      id="nursery-card-print"
      style={{
        width: 340,
        borderRadius: 20,
        overflow: "hidden",
        border: "2px solid #FF6B9D",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        background: "#fff",
        flexShrink: 0,
      }}
    >
      {/* ── Header ── */}
      <div style={{
        background: "#FF6B9D",
        backgroundImage: DOT_BG,
        padding: "16px 18px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logo */}
          <div style={{
            width: 40, height: 40, background: "#fff",
            borderRadius: 10, display: "flex", alignItems: "center",
            justifyContent: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>
              Sunrise Academy
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, marginTop: 2, letterSpacing: "0.06em" }}>
              Nursery School
            </div>
          </div>
        </div>
        {/* Decorative dots */}
        <div style={{ display: "flex", gap: 5 }}>
          {[0.5, 0.7, 1].map((o, i) => (
            <div key={i} style={{
              width: 9, height: 9, borderRadius: "50%",
              background: `rgba(255,255,255,${o})`,
            }} />
          ))}
        </div>
      </div>

      {/* ── Pink accent stripe ── */}
      <div style={{ height: 4, background: "#FFD6E9" }} />

      {/* ── Body ── */}
      <div style={{ padding: "18px 18px 14px" }}>

        {/* Photo + name block */}
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
          {/* Photo */}
          <div style={{
            width: 78, height: 92, borderRadius: 12,
            background: "#FFF0F6", border: "3px solid #FF6B9D",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            flexShrink: 0, overflow: "hidden", position: "relative",
          }}>
            {photo ? (
              <img src={photo} alt="Student" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "#FFD6E9", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 700, color: "#FF6B9D",
                }}>
                  {ini}
                </div>
                <div style={{ fontSize: 9, color: "#FFADD0", marginTop: 5, letterSpacing: "0.05em" }}>
                  PHOTO
                </div>
              </>
            )}
          </div>

          {/* Name + class */}
          <div style={{ flex: 1, paddingTop: 3 }}>
            <div style={{
              display: "inline-block", fontSize: 9, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#fff", background: "#FF6B9D",
              padding: "3px 10px", borderRadius: 20, marginBottom: 8,
            }}>
              {cls}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0F1E3C", lineHeight: 1.25, marginBottom: 3 }}>
              {firstName} {lastName}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              fontSize: 10, color: "#FF6B9D", fontWeight: 600,
            }}>
              <svg viewBox="0 0 16 16" width="11" height="11" fill="none"
                stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round">
                <path d="M8 1.5A4.5 4.5 0 1 0 8 10.5A4.5 4.5 0 0 0 8 1.5z"/>
                <path d="M5.5 14.5a6 6 0 0 1 5 0"/>
              </svg>
              Nursery Pupil
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#FFE4EF", margin: "0 0 13px" }} />

        {/* Info grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 14px" }}>
          {[
            { label: "Date of birth",  value: formatDOB(dob) },
            { label: "Branch",         value: branch },
            { label: "Parent / Guardian", value: parentName },
            { label: "Parent contact", value: parentPhone },
            { label: "Blood group",    value: bloodGroup },
            { label: "Student ID",     value: idNumber },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#FFADD0", marginBottom: 2 }}>
                {label}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0F1E3C", lineHeight: 1.3 }}>
                {value || "—"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        background: "#FFF0F6", borderTop: "1.5px solid #FFD6E9",
        padding: "10px 18px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 9, color: "#FFADD0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Student number
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6B9D", letterSpacing: "0.06em", marginTop: 1 }}>
            {idNumber}
          </div>
        </div>

        {/* Barcode */}
        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {[2,3,1,4,2,3,1,2,4,3,1,2,3].map((w, i) => (
            <div key={i} style={{ width: w, height: 26, background: "#FF6B9D", borderRadius: 1 }} />
          ))}
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 9, color: "#FFADD0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Valid until
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6B9D", marginTop: 1 }}>
            {validUntil}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Editor form ───────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: "#64748b",
        letterSpacing: "0.05em", textTransform: "uppercase" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px",
  fontSize: 13, color: "#0f172a", background: "#fff", outline: "none", width: "100%",
};

// ── Main export ───────────────────────────────────────────────────────────────
export default function EIDCard() {
  const [data, setData] = useState(DEFAULT);
  const [tab, setTab] = useState("preview"); // "preview" | "edit"
  const fileRef = useRef();

  // inject print css once
  if (typeof document !== "undefined" && !document.getElementById("nursery-print-css")) {
    const s = document.createElement("style");
    s.id = "nursery-print-css";
    s.textContent = PRINT_CSS;
    document.head.appendChild(s);
  }

  function set(key, val) {
    setData(d => ({ ...d, [key]: val }));
  }

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => set("photo", ev.target.result);
    reader.readAsDataURL(file);
  }

  function handlePrint() {
    window.print();
  }

  const tabBtn = (id, label) => (
    <button
      onClick={() => setTab(id)}
      style={{
        padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600,
        cursor: "pointer", border: "none",
        background: tab === id ? "#FF6B9D" : "#f1f5f9",
        color: tab === id ? "#fff" : "#64748b",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "2rem" }}>
      <style>{`input:focus, select:focus { outline: 2px solid #FF6B9D; outline-offset: 1px; }`}</style>

      {/* Page header */}
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#FFADD0", marginBottom: 4 }}>
              Sunrise Academy
            </p>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#0F1E3C", margin: 0 }}>
              Nursery ID Card
            </h1>
          </div>
          <div className="no-print" style={{ display: "flex", gap: 8 }}>
            {tabBtn("preview", "Preview")}
            {tabBtn("edit", "Edit details")}
            <button
              onClick={handlePrint}
              style={{
                padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                cursor: "pointer", border: "none",
                background: "#0F1E3C", color: "#fff",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none"
                stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="1" width="10" height="10" rx="1"/>
                <path d="M3 7H1v6h14V7h-2"/>
                <path d="M5 13v-3h6v3"/>
              </svg>
              Print card
            </button>
          </div>
        </div>

        {tab === "preview" ? (
          /* ── Preview ── */
          <div style={{
            display: "flex", justifyContent: "center", gap: 40,
            flexWrap: "wrap", alignItems: "flex-start",
          }}>
            <IDCard data={data} />

            {/* Info panel */}
            <div className="no-print" style={{
              background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0",
              padding: 24, maxWidth: 240, flex: "1 1 200px",
            }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#0F1E3C", marginBottom: 16 }}>
                Card summary
              </h2>
              {[
                ["Name",    `${data.firstName} ${data.lastName}`],
                ["Class",   data.className],
                ["Branch",  data.branch],
                ["ID",      data.idNumber],
                ["Valid",   data.validUntil],
              ].map(([k, v]) => (
                <div key={k} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#FFADD0",
                    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                    {k}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0F1E3C" }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.6 }}>
                  Switch to <b>Edit details</b> to change any field or upload a photo.
                  Use <b>Print card</b> to send to your printer.
                </div>
              </div>
            </div>
          </div>

        ) : (
          /* ── Edit form ── */
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 24, background: "#fff", borderRadius: 16,
            border: "1px solid #e2e8f0", padding: 28,
          }}>

            {/* Photo upload */}
            <div style={{ gridColumn: "1 / -1" }}>
              <Field label="Student photo">
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 64, height: 76, borderRadius: 10,
                    border: "2px solid #FF6B9D", background: "#FFF0F6",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", flexShrink: 0,
                  }}>
                    {data.photo
                      ? <img src={data.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <span style={{ fontSize: 22, color: "#FF6B9D" }}>
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                            stroke="#FF6B9D" strokeWidth="1.8" strokeLinecap="round">
                            <circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>
                          </svg>
                        </span>
                    }
                  </div>
                  <div>
                    <button
                      onClick={() => fileRef.current?.click()}
                      style={{
                        padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                        cursor: "pointer", border: "1.5px solid #FF6B9D",
                        background: "#FFF0F6", color: "#FF6B9D", display: "block", marginBottom: 6,
                      }}
                    >
                      Upload photo
                    </button>
                    {data.photo && (
                      <button
                        onClick={() => set("photo", null)}
                        style={{
                          padding: "6px 14px", borderRadius: 8, fontSize: 12,
                          cursor: "pointer", border: "1px solid #e2e8f0",
                          background: "#f8fafc", color: "#94a3b8",
                        }}
                      >
                        Remove
                      </button>
                    )}
                    <input ref={fileRef} type="file" accept="image/*"
                      style={{ display: "none" }} onChange={handlePhoto} />
                    <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6 }}>
                      JPG or PNG, max 5 MB
                    </div>
                  </div>
                </div>
              </Field>
            </div>

            <Field label="First name">
              <input style={inputStyle} value={data.firstName}
                onChange={e => set("firstName", e.target.value)} />
            </Field>

            <Field label="Last name">
              <input style={inputStyle} value={data.lastName}
                onChange={e => set("lastName", e.target.value)} />
            </Field>

            <Field label="Class / Level">
              <select style={inputStyle} value={data.className}
                onChange={e => set("className", e.target.value)}>
                {["Nursery 1", "Nursery 2", "Nursery 3", "Baby Class", "Reception"].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>

            <Field label="Branch">
              <select style={inputStyle} value={data.branch}
                onChange={e => set("branch", e.target.value)}>
                {BRANCHES.map(b => <option key={b}>{b}</option>)}
              </select>
            </Field>

            <Field label="Date of birth">
              <input style={inputStyle} type="date" value={data.dob}
                onChange={e => set("dob", e.target.value)} />
            </Field>

            <Field label="Blood group">
              <select style={inputStyle} value={data.bloodGroup}
                onChange={e => set("bloodGroup", e.target.value)}>
                {["A+","A−","B+","B−","AB+","AB−","O+","O−"].map(g => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>

            <Field label="Parent / Guardian name">
              <input style={inputStyle} value={data.parentName}
                onChange={e => set("parentName", e.target.value)} />
            </Field>

            <Field label="Parent contact">
              <input style={inputStyle} value={data.parentPhone}
                onChange={e => set("parentPhone", e.target.value)} />
            </Field>

            <Field label="Student ID number">
              <input style={inputStyle} value={data.idNumber}
                onChange={e => set("idNumber", e.target.value)} />
            </Field>

            <Field label="Valid until">
              <input style={inputStyle} value={data.validUntil}
                onChange={e => set("validUntil", e.target.value)}
                placeholder="e.g. July 2026" />
            </Field>

            <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 8 }}>
              <button
                onClick={() => setData(DEFAULT)}
                style={{
                  padding: "9px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                  cursor: "pointer", border: "1px solid #e2e8f0",
                  background: "#f8fafc", color: "#64748b",
                }}
              >
                Reset to default
              </button>
              <button
                onClick={() => setTab("preview")}
                style={{
                  padding: "9px 24px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                  cursor: "pointer", border: "none",
                  background: "#FF6B9D", color: "#fff",
                }}
              >
                Preview card →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
