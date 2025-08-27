import React from 'react';
import CountUp from 'react-countup';

export default function Detail() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 pb-10 md:-mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-[#E64E37] rounded-2xl py-3">
                
                {/* Clients */}
                <div>
                    <h2 className="text-white text-3xl font-bold">
                        <CountUp end={23000} suffix="" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-white mt-1">We Have Worked With Clients</p>
                </div>

                {/* Visa Process Rate */}
                <div>
                    <h2 className="text-white text-3xl font-bold">
                        <CountUp end={99} suffix="%" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-white mt-1">Successful Visa Process Rate</p>
                </div>

                {/* Approval Time */}
                <div>
                    <h2 className="text-white text-3xl font-bold">
                        <CountUp end={42} suffix="hrs" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-white mt-1">Application Approval Time</p>
                </div>

                {/* Countries */}
                <div>
                    <h2 className="text-white text-3xl font-bold">
                        <CountUp end={50} suffix="+" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-white mt-1">Countries Operations</p>
                </div>

            </div>
        </div>
    );
}
