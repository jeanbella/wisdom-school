import { useState } from "react";
import loginImg from "../assets/images/aboutImage.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!validate()) return;

    //     try {
    //         const API = import.meta.env.VITE_API_URL;

    //         const res = await fetch(`${API}/api/user/login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         const data = await res.json();

    //         if (!res.ok) {
    //             throw new Error(data.message || "Login failed");
    //         }

    //         // console.log("Login success:", data);

    //         // Save token
    //         localStorage.setItem("token", data.token);

    //         // Save user information if returned
    //         localStorage.setItem("user", JSON.stringify(data.user));

    //         // alert("Login successful!");

    //         // redirect after login
    //         // window.location.href = "/Dashboard";
    //         navigate("/dashboard");

    //     } catch (error) {
    //         console.log(error);

    //         setErrors({
    //             server: error.message,
    //         });
    //     }
    // };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
        const API = import.meta.env.VITE_API_URL;

        const res = await fetch(`${API}/api/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Invalid email or password");
        }
        if (!data.user) {
            throw new Error("User information not found");
        }

        // Save token
        localStorage.setItem("token", data.token);

        // Save user information
        localStorage.setItem("user", JSON.stringify(data.user));


        // Redirect based on role
        if (data.user.role === "Admin") {
            navigate("/admin/dashboard", { replace: true });
        } 
        // else if (data.user.role === "Teacher") {
        //     navigate("/teacher/dashboard");
        // } 
        else if (data.user.role === "Student") {
            navigate("/application/dashboard", { replace: true });
        } 
        else {
            navigate("/");
        }


    } catch (error) {
        console.log(error);
        setErrors({
            server: error.message,
        });
    }
};
    return (
        <div className="h-screen w-full flex">

            {/* LEFT IMAGE */}
            <div className="hidden md:block md:w-1/2 h-full relative">
                <img
                    src={loginImg}
                    alt="Login"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold text-center px-6">
                        Welcome Back
                    </h1>
                </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 p-8">

                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                    <h2 className="text-3xl font-bold text-gray-800">
                        Login
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Access your student account
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* ------------ */}

                        {/* <a
                            href="/dashboard"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Dashboard
                        </a> */}

                        {/* ---------- */}

                        {/* EMAIL */}
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email
                                ? "border-red-500 focus:ring-red-400"
                                : "focus:ring-blue-500"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}

                        {/* PASSWORD */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 pr-12 ${errors.password
                                    ? "border-red-500 focus:ring-red-400"
                                    : "focus:ring-blue-500"
                                    }`}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                        <div className="flex items-center justify-between">

                            {/* Remember Me */}
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={form.rememberMe}
                                    onChange={handleChange}
                                    className="accent-blue-600 w-4 h-4"
                                />
                                Remember me
                            </label>

                            {/* Forgot Password */}
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot password?
                            </a>

                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 shadow-md"
                        >
                            Login
                        </button>

                        {errors.server && (
                            <p className="text-red-500 text-sm mt-3 text-center">
                                {errors.server}
                            </p>
                        )}

                        {/* REGISTER LINK */}
                        <p className="text-center text-gray-600 text-sm mt-4">
                            Don’t have an account?{" "}
                            <a
                                href="/register"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Register
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}