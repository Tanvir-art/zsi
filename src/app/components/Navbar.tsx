"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCredentials } from "../redux/feature/authSlice";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    // Get the authentication state from Redux store
    const { token } = useSelector((state: any) => state.auth);

    const handleLogout = () => {
        // Dispatch the action to clear credentials
        dispatch(clearCredentials());
        // Redirect to the login page after logging out
        router.push("/login");
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <Link href="/">
                    <div className="text-2xl font-bold">RPC Limo</div>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-yellow-500">
                        Home
                    </Link>
                    <Link href="/" className="hover:text-yellow-500">
                        About
                    </Link>
                    {/* Conditionally render Login or Logout */}
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="hover:text-yellow-500"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login" className="hover:text-yellow-500">
                            Login
                        </Link>
                    )}
                </div>
                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-600">
                        Home
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-600">
                        About
                    </Link>
                    {/* Conditionally render Login or Logout */}
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="block px-4 py-2 hover:bg-gray-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login" className="block px-4 py-2 hover:bg-gray-600">
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
