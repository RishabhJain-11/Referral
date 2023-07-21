import React from 'react'
import { useEffect, useState } from 'react';

const Blogger = () => {
    const [blogs, setBlogs] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBlog, setFilteredBlog] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rescPerPage] = useState(9);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await fetch("/api/blog");
            const json = await response.json();

            if (response.ok) {
                setBlogs(json);
            }
        }
        fetchResources();
    }, []);


    useEffect(() => {
        const filterJobs = () => {
            let filtered = blogs;

            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter((resc) => {
                    return (
                        resc.title.toLowerCase().includes(query) ||
                        resc.content.toLowerCase().includes(query) ||
                        resc.author.toLowerCase().includes(query)
                    );
                });
            }
            setFilteredBlog(filtered);
        };
        filterJobs();
    }, [blogs, searchQuery]);

    // Pagination
    const indexOfLastJob = currentPage * rescPerPage;
    const indexOfFirstJob = indexOfLastJob - rescPerPage;
    const currentMaterial = filteredBlog?.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>

            <div className="bg-white z-0 ">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className='absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50'
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                The blogs if you want to write please follow this -{' '}
                                <a href="/" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Write Blog <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Get to know about the latest information from the world.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We provide the blogs section for you so that you can learn from others information and you can also share a lot information related to your experience.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href='/' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read Blogs</a>
                                <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                                    Write Blogs <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div >

            <div class="px-4 mx-auto mt-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h1 class="text-3xl md:text-4xl font-medium mb-20">This can be the first step to your amazing professional journey.</h1>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <div className="ml-auto">
                    <input
                        type="text"
                        placeholder="Search Blogs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="mt-4 p-2 border text-black border-gray-300 rounded-lg"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {currentMaterial &&
                    currentMaterial.map((material) => (
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={material.link} target='_blank' rel='noreferrer'>
                                <img class="rounded-t-lg" src={material.img} alt="" target='_blank' rel='noreferrer' />
                            </a>
                            <div class="p-5">
                                <a href={material.link} target='_blank' rel='noreferrer'>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{material.title}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{material.author}</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{material.content}</p>
                                <a href={material.link} target='_blank' rel='noreferrer' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Access Here
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>

            {filteredBlog && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredBlog.length / rescPerPage) }, (_, i) => (
                        <button
                            key={i}
                            className={`mx-1 px-3 py-2 rounded-lg text-white ${i + 1 === currentPage ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"
                                }`}
                            onClick={() => paginate(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Blogger