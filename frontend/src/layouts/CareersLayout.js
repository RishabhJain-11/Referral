import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
    return (
        <div className='careers-layout'>
            <div class="px-4 mx-auto">
                <div class="text-center max-w-2xl mx-auto">
                    <h1 class="text-3xl md:text-4xl font-medium mb-20">Get the header you needed for your awesome website.</h1>
                </div>

                <div class="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Fresh Design</h5>
                        <p class="text-white">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable</p>
                        <span class="mt-5 w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>

                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Clean Code</h5>
                        <p class="text-white">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
                        <span class="mt-5  w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>

                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Perfect Tool</h5>
                        <p class="text-white">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
                        <span class="mt-5 w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
