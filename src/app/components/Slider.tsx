"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const SatisfiedClients = () => {
    const testimonials = [
        {
            text: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding.",
            name: "Peter Rose",
            image: "https://rpclimo.com/wp-content/uploads/2023/10/team3-150x150.jpg",
            rating: 5,
        },
        {
            text: "The service was top-notch! Our experience with RPC Limo was smooth, luxurious, and worth every penny. Highly recommend!",
            name: "Sarah Johnson",
            image: "https://rpclimo.com/wp-content/uploads/2023/10/team1-150x150.jpg",
            rating: 5,
        },
        {
            text: "The limo was impeccable, and the driver was courteous. RPC Limo made our event unforgettable!",
            name: "James Smith",
            image: "https://rpclimo.com/wp-content/uploads/2023/10/team3-150x150.jpg",
            rating: 5,
        },
    ];

    return (
        <div className="w-full mx-auto px-10 py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Our Satisfied Clients</h2>
            <p className="text-center text-gray-600 mb-10">
                At RPC Limo, our success is measured by the satisfaction of our clients. Here's what some of our satisfied clients have to say about their experiences.
            </p>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prev-button',
                        nextEl: '.next-button',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-500 text-black p-6 rounded-lg relative">
                                    <p className="text-lg">{testimonial.text}</p>
                                    {/* Triangle design */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-yellow-500"></div>

                                </div>

                                <div className="mt-10">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={100} // width of the image
                                        height={100} // height of the image
                                        className="rounded-full border-4 border-white"
                                    />
                                </div>

                                <div className=" text-center">
                                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                                    <div className="flex justify-center mt-2">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <span key={i} className="text-yellow-500">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-between items-center  ">


                    <button className="prev-button bg-white px-8 py-4   shadow hover:bg-yellow-600">
                        <FaArrowLeft className="text-gray-600" />
                    </button>
                    <button className="next-button bg-white px-8 py-4  shadow hover:bg-yellow-600">
                        <FaArrowRight className="text-gray-600" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SatisfiedClients;
