import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://rpclimo.com/assets/img/hero.jpg')", // Replace with a relevant image URL
                    }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Travel in Style with RPC Limo
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                        Experience luxury and comfort like never before with our premium limo services.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold">
                            Book Now
                        </button>
                        <button className="bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 px-6 py-3 rounded-lg font-semibold">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="absolute bottom-10 w-full px-6 md:px-16">
                    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <input
                            type="text"
                            placeholder="Enter pickup location"
                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="Enter drop-off location"
                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
