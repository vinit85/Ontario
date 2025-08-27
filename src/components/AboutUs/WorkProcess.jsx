import React from 'react'
import aeroplane from '../../assets/images/aeroplane.svg'
import one from '../../assets/images/one.svg'
import two from '../../assets/images/two.svg'



export default function WorkProcess() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-10">

                {/* Heading */}
                <div className="flex flex-col justify-center items-center text-center mb-5 md:mb-10 ">
                    <h5 className="flex justify-center items-center gap-2 text-[#E64E37] text-sm font-medium">
                        <img src={aeroplane} alt="" className="w-4 h-4" />
                        Work Process
                    </h5>
                    <h2 className="text-[#002768] font-bold text-[32px] md:text-[40px] mt-1 md:w-[60%] leading-none">
                        How we do our visa & Immigration processing
                    </h2>
                </div>
                <div className='flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap gap-4 md:gap-0'>
                    <div className='lg:w-[30%] flex justify-center flex-col items-center gap-2'>
                        <div>
                            <img src={one} alt="" />
                        </div>
                        <div className='flex text-white font-semibold bg-[#002768] px-8 rounded-2xl text-sm '>Step 1</div>
                        <h4 className='w-[80%] text-center font-bold text-xl text-[#002768]'>IELTS Preparation and Scoring</h4>
                        <p className='w-[80%] text-center text-[#002768]'>We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.</p>
                    </div>
                    <div className='lg:w-[30%] flex justify-center flex-col items-center gap-2'>
                        <div>
                            <img src={two} alt="" />
                        </div>
                        <div className='flex text-white font-semibold bg-[#E64E37] px-8 rounded-2xl text-sm '>Step 2</div>
                        <h4 className='w-[80%] text-center font-bold text-xl text-[#E64E37]'>IELTS Preparation and Scoring</h4>
                        <p className='w-[80%] text-center text-[#002768]'>We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.</p>
                    </div>
                    <div className='lg:w-[30%] flex justify-center flex-col items-center gap-2'>
                        <div>
                            <img src={one} alt="" />
                        </div>
                        <div className='flex text-white font-semibold bg-[#002768] px-8 rounded-2xl text-sm '>Step 3</div>
                        <h4 className='w-[80%] text-center font-bold text-xl text-[#002768]'>Assessment & Visa Submission</h4>
                        <p className='w-[80%] text-center text-[#002768]'>We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
