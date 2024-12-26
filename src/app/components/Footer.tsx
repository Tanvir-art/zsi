const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm">
                        We are dedicated to providing top-quality services to our clients,
                        ensuring a seamless and enjoyable experience.
                    </p>
                </div>
                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-orange-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-sm">
                        Email: info@example.com
                        <br />
                        Phone: +1 234 567 890
                    </p>
                </div>
            </div>
            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Brand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
