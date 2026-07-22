import { useState } from "react";
import registerImg from "../assets/images/aboutImage.jpg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Register() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        school: "",
        email: "",
        password: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!form.firstName) newErrors.firstName = "First name is required";
        if (!form.lastName) newErrors.lastName = "Last name is required";
        if (!form.username) newErrors.userName = "Username is required";
        if (!form.school) newErrors.school = "Please select a school";
        if (!form.phone) newErrors.school = "Please Enter your phone number";
        if (!form.email) {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!form.password) newErrors.password = "Password is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const API = import.meta.env.VITE_API_URL;

            const res = await fetch(`${API}/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            alert("Registration successful!");
            window.location.reload();

            // setForm({
            //     firstName: "",
            //     lastName: "",
            //     userName: "",
            //     school: "",
            //     phone: "",
            //     email: "",
            //     password: "",
            // });

            // setErrors({});

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="h-screen w-full flex">

            {/* LEFT IMAGE */}
            <div className="hidden md:block md:w-1/2 h-full relative">
                <img
                    src={registerImg}
                    alt="Register"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold text-center px-6">
                        Join Wisdom School Today
                    </h1>
                </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 p-8">

                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                    {/* HEADER */}
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Register to access student portal
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* NAME */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">{errors.firstName}</p>
                            )}

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">{errors.lastName}</p>
                            )}
                        </div>

                        {/* USERNAME */}
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.userName && (
                            <p className="text-red-500 text-sm">{errors.username}</p>
                        )}
                        <PhoneInput
                            international
                            defaultCountry="RW"
                            value={form.phone}
                            onChange={(value) =>
                                setForm({
                                    ...form,
                                    phone: value || "",
                                })
                            }
                            placeholder="Enter phone number"
                            className="w-full"
                        />

                        {errors.phone && (
                            <p className="text-red-500 text-sm">
                                {errors.phone}
                            </p>
                        )}
                        {/* SCHOOL */}
                        <select
                            name="school"
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                            <option value="">Select School</option>
                            <option value="Musanze-HighSchool">Musanze HighSchool</option>
                            <option value="Musanze-Primary">Musanze Primary</option>
                            <option value="Musanze-Nursury">Musanze Nursury</option>
                            <option value="Rubavu">Rubavu</option>
                            <option value="Nyabihu">Nyabihu</option>
                            <option value="Muyumbu">Muyumbu</option>
                            <option value="Fumbwe">Fumbwe</option>
                            <option value="Kabarore">Kabarore</option>
                            <option value="Kiramuruzi">Kiramuruzi</option>
                            <option value="Nyamasheke">Nyamasheke</option>
                            <option value="Susa">Susa</option>
                            <option value="Burera">Burera</option>
                            <option value="Kayonza">Kayonza</option>
                            <option value="Runda">Runda</option>
                            <option value="Kanzenze">Kanzenze</option>
                            <option value="Ngororero">Ngororero</option>
                            <option value="Rubengera">Rubengera</option>
                        </select>
                        {errors.school && (
                            <p className="text-red-500 text-sm">{errors.school}</p>
                        )}

                        {/* EMAIL */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}

                        {/* PASSWORD WITH SHOW/HIDE */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password}</p>
                            )}

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 shadow-md"
                        >
                            Register
                        </button>

                        {/* LOGIN LINK */}
                        <p className="text-center text-gray-600 text-sm mt-4">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Login
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}