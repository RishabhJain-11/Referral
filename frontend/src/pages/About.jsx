import React from 'react'
import { imager } from '../assets';

export default function About() {
  return (
    <>
      <div class="p-6">
        <div class="flex flex-col items-center justify-center">
          <span class="rounded-full bg-red-500 px-2 py-1 text-white uppercase text-sm"    >
            Meet Founder
          </span>
        </div>
      </div>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-2">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">
                  22
                </p>
                <p class="text-gray-400">Projects</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Certificates</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Repos</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img className='rounded-full' src={imager} alt="" />
              </div>
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button class="text-white py-2 px-4 uppercase rounded bg-black hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Connect</button>
              <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">Rishabh Jain,
              <span class="font-light text-gray-500">
                21
              </span>
            </h1>
            <p class="font-light text-gray-600 mt-3">Akurdi, Maharashtra</p>
            <p class="mt-8 text-gray-500">
              Software Developer - Machine Learning Engineer
            </p>
            <p class="mt-2 text-gray-500">Savitribai Phule Pune University</p>
          </div>
          <div class="mt-12 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16">I am a 3rd Year Undergrad at DYPCOE, Pune pursuing a Bachelor of Engineering majoring in Information Technology. So far, in my experience at DYPCOE, I have learned various Computer Science fundamentals like Database Management, Full stack Web Dev, Basics of Google Cloud, Python Programming, Basics of Data Structures and Algorithms, and practical professional skills like teamwork, networking, and time-management.
              <br />
              <br />
              I am also a Full-Stack Web Development learner and have made quite a few projects comprising of tools, technologies, and frameworks such as ReactJS, Next.js, MongoDB, Node.js, and Express.js.I am currently learning more about Backend and DevOps and trying to cement the concepts that I had learned in the Web Development process till now be it frontend, backend, or databases.</p></div>
        </div>
      </div>


      <div class="p-8">
        <div class="flex flex-col items-center justify-center">
          <span class="rounded-full bg-red-500 px-2 py-1 text-white uppercase text-sm">
            About The Company
          </span>
        </div>
        <h1 class="text-4xl font-medium text-lime-50 text-center mt-6">
          Know about us who got inspired to build this product.
        </h1>
        <p class="text-center mt-6 text-lg font-light text-white">
          It tell what our future plans and all the new exciting we are planning for the aspirants.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="p-8">
          <div class="bg-emerald-400 rounded-full w-16 h-16 flex justify-center items-center text-white shadow-2xl"    >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"      >
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-white font-medium mb-3">
            Social Media App
          </h2>
          <p class="font-light text-sm text-white mb-3">
            The website you are using have an integrated social media which will take you to the new page of our company which have the feature of Social Media.
          </p>
        </div>
        <div class="p-8">
          <div class="bg-emerald-400 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"    >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"      >
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-white font-medium mb-3">
            Resources and Merchandise
          </h2>
          <p class="font-light text-sm text-white mb-3">
            All the coding and study materials required is going to provided by the company and and you can access it by purchasing it.
          </p>
        </div>
        <div class="p-8">
          <div class="bg-emerald-400 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"    >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"      >
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h2 class="uppercase mt-6 text-white font-medium mb-3">
            Blogs
          </h2>
          <p class="font-light text-sm text-white mb-3">
            The blogs which get you covered on the experiences of other developers and get to know about the on going developments in the world.
          </p>
        </div>
      </div>
    </>

  )
}