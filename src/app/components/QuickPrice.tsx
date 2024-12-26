import { FaClock } from 'react-icons/fa';
import { GiAirplaneDeparture } from "react-icons/gi";

const QuickPriceCheck = () => {
    const items = [
        { title: 'Hourly Rate', subtitle: 'Start from $60', icon: <FaClock size={50} /> },
        { title: 'LGA AIRPORT', subtitle: 'Start from $80.00', icon: <GiAirplaneDeparture size={50} /> },
        { title: 'JFK AIRPORT', subtitle: 'Start from $90.00', icon: <GiAirplaneDeparture size={50} /> },
        { title: 'EWR AIRPORT', subtitle: 'Start from $100.00', icon: <GiAirplaneDeparture size={50} /> },
    ];

    return (
        <>
            <div className='py-10'>
                <h2 className='text-2xl font-bold text-center pt-10'>Quick Price Check</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10 lg:mx-20 py-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#DA9100] text-white h-auto sm:h-32 w-full rounded-lg p-4 transition duration-300 hover:bg-black"
                        >
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuickPriceCheck;
