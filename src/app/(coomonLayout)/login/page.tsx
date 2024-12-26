"use client";
import { useLoginMutation } from "@/app/redux/api/baseApi";
import Link from "next/link";
import { useDispatch } from "react-redux";  // Import useDispatch from Redux
// Import setCredentials action
import { useRouter } from "next/navigation";
import { setCredentials } from "@/app/redux/feature/authSlice";

const Login = () => {
    const [login, { isLoading, isError, error }] = useLoginMutation();
    const dispatch = useDispatch();  // Create a dispatch hook
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await login({ email, password }).unwrap();
            console.log("Login successful:", result);

            // Dispatch the setCredentials action to store token, email, and role in the Redux store
            dispatch(setCredentials({
                token: result?.data?.token,
            }));

            // Redirect to the homepage or dashboard
            router.push("/");

        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Side (Login Information) */}
            <div className="bg-[#152733] text-white p-4 flex-[3] flex justify-center items-center">
                <div className="text-center max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
                    <p className="text-sm">
                        Login to access your account and continue exploring amazing business
                        tips. We missed you!
                    </p>
                </div>
            </div>

            {/* Right Side (Login Form) */}
            <div className="bg-[#ffffff] text-gray-600 p-4 flex-[5] flex justify-center items-center">
                <div className="w-full max-w-2xl">
                    <form
                        onSubmit={handleLogin}
                        className="p-6 bg-white shadow-lg rounded-md"
                    >
                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-gray-100 transition ease-in-out duration-150"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-gray-100 transition ease-in-out duration-150"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Error Message */}
                        {isError && (
                            <div className="text-red-500 text-sm mb-4">
                                {"Login failed. Please try again."}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition ease-in-out duration-150"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Logging in..." : "Login"}
                            </button>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="mt-4 text-center">
                            <a href="#" className="text-sm text-yellow-500 hover:underline">
                                Forgot your password?
                            </a>
                        </div>

                        {/* Signup Link */}
                        <div className="mt-2 text-center">
                            <span className="text-sm">Don’t have an account? </span>
                            <span className="text-sm text-yellow-500 hover:underline">
                                <Link href="/signup">Sign up here</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
