import React from 'react'
import bannerBg from '../../assets/images/bannerbg.svg';
import visa from '../../assets/images/visa.svg';
import '../../App.css'
export default function Banner() {
    return (
        <>
            <div class="bg-[#002768] ">
                <div class=" bg-cover bg-center h-full w-full   "
                    style={{ backgroundImage: `url(${bannerBg})` }}>
                    <div class="max-w-7xl m-auto px-4 md:px-12 flex flex-wrap lg:flex-nowrap pt-6 md:pt-0">
                        <div class="flex flex-col  justify-center  md:w-[80%] lg:w-[50%]  gap-4 py-2">
                            <h1 class="text-white text-4xl md:text-5xl font-bold lg:w-[80%]">Build Your Global Career with a Work Visa</h1>
                            <p class="text-white lg:w-[75%]">Open doors to international opportunities and grow your career without borders. Let us guide your journey to a successful work visa.</p>
                            <div class="flex">
                                <div class="flex text-white p-3 px-7 mt-4 rounded-4xl bg-[#E64E37] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                    Book a Consultation
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full h-auto md:w-[80%] lg:w-[45%]">
                            <img src={visa} alt="" className="w-full  h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
