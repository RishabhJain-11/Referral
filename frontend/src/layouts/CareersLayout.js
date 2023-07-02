import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
    return (
        <div className='careers-layout'>
            <div class="px-4 mx-auto">
                <div class="text-center max-w-2xl mx-auto">
                    <h1 class="text-3xl md:text-4xl font-medium mb-20">This can be the first step to your amazing professional journey.</h1>
                </div>

                <div class="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Jobs</h5>
                        <p class="text-white">Jobs recommendation from top MNC's as well service based companies. You can filter the result according to you liking.</p>
                        <span class="mt-5 w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>

                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Internships</h5>
                        <p class="text-white">Internships to get you started with your work experience, gain knowledge and the required skills from the internships opportunities</p>
                        <span class="mt-5  w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>

                    <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 class="text-xl font-medium uppercase mb-4">Hackathons</h5>
                        <p class="text-white">Compete with other job seekers and passionate code masters to showcase your project building capabilities.</p>
                        <span class="mt-5 w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
