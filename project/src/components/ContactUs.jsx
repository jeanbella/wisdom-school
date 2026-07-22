// ContactUs.jsx
import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const API = import.meta.env.VITE_API_URL;
            
            const res = await fetch(`${API}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const text = await res.text();
            console.log("RAW RESPONSE:", text);

            let result = {};
            try {
                result = text ? JSON.parse(text) : {};
            } catch (err) {
                console.log("JSON parse error:", err);
            }

            if (!res.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            console.log("SUCCESS CONFIRMED:", result);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setToast({
                message: "Message sent successfully!",
                type: "success",
            });

        } catch (err) {
            console.log("ERROR:", err);

            setToast({
                message: err.message || "Something went wrong",
                type: "error",
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-gray-300 flex items-center justify-center p-8">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8 flex flex-col md:flex-row gap-8">

                    {/* LEFT: FORM */}
                    <div className="w-full md:w-1/2">
                        <form onSubmit={onSubmit} className="space-y-5">

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Toast */}
                        {toast && (
                            <p
                                className={`mt-4 ${toast.type === "success"
                                    ? "text-green-600"
                                    : "text-red-600"
                                    }`}
                            >
                                {toast.message}
                            </p>
                        )}
                    </div>

                    {/* RIGHT: DETAILS */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                            CONTACT DETAILS
                        </h3>

                        <ul className="text-gray-700 space-y-4">
                            <li>
                                <strong>Address:</strong><br />
                                Musanze, Rwanda
                            </li>

                            <li>
                                <strong>Phone:</strong><br />
                                <a href="tel:+250788478469">
                                    +250-788-478469<br />
                                    +250-788-76880<br />
                                    +250-782-406217
                                </a>
                            </li>

                            <li>
                                <strong>Email:</strong><br />
                                <a
                                    href="mailto:wisdomschoolrwanda@gmail.com"
                                    className="text-blue-600"
                                >
                                    wisdomschoolrwanda@gmail.com
                                </a>
                            </li>

                            <li>
                                <strong>Schedule:</strong><br />
                                Mon - Fri: 9am - 6pm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;