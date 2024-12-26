"use client"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions = [
        {
            question: 'What types of vehicles are available in your fleet?',
            answer: 'RPC Limo Service offers premium limo services for various occasions, ensuring luxury and comfort.',
        },
        {
            question: 'How can I book a limo?',
            answer: 'You can book a limo through our website or by contacting our customer support team.',
        },
        {
            question: 'What areas do you serve?',
            answer: 'We serve multiple areas across the city and surrounding regions. Please check our service map for details.',
        },
        {
            question: 'What are the payment options?',
            answer: 'We accept all major credit cards, debit cards, and online payment methods.',
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
    };

    return (
        <div className="w-full mx-auto px-14">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions for RPC Limo Service</h2>
            <div className="space-y-4">
                {questions.map((item, index) => (
                    <div key={index} className="rounded-lg transition-all duration-300">
                        <div
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-800'}`}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="flex gap-4 items-center">
                                <span className="text-xl">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                                <h3 className="text-lg font-semibold">{item.question}</h3>
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 bg-gray-100 text-gray-800 rounded-lg transition-all duration-300">
                                <p className="text-lg">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
