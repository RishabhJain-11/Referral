import React from 'react'
import { useEffect, useState } from 'react';


const Material = () => {
    const [material, setMaterial] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResc, setFilteredResc] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rescPerPage] = useState(9);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await fetch("/api/material");
            const json = await response.json();

            if (response.ok) {
                setMaterial(json);
            }
        }
        fetchResources();
    }, []);


    useEffect(() => {
        const filterJobs = () => {
            let filtered = material;

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
            setFilteredResc(filtered);
        };
        filterJobs();
    }, [material, searchQuery]);

    // Pagination
    const indexOfLastJob = currentPage * rescPerPage;
    const indexOfFirstJob = indexOfLastJob - rescPerPage;
    const currentMaterial = filteredResc?.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div class="px-4 mx-auto mt-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h1 class="text-3xl md:text-4xl font-medium mb-20">This can be the one in all access store to your learning journey.</h1>
                </div>
            </div>
            <div className="flex items-center mb-4 mt-20">
                <div className="ml-auto">
                    <input
                        type="text"
                        placeholder="Search Resources..."
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

            {filteredResc && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredResc.length / rescPerPage) }, (_, i) => (
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

export default Material