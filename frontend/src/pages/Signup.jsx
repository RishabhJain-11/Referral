// import React, { useRef, useState } from 'react'
// import { useAuth } from "../context/AuthContext";

// const Signup = () => {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();
//     const { signup, currentUser } = useAuth()
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//             return setError('Password did not match');
//         }

//         try {
//             setError('');
//             setLoading(true);
//             signup(emailRef.current.value, passwordRef.current.value)
//         } catch (error) {
//             setError("Failed to create an account");
//         }
//         setLoading(false);
//     }

//     return (
//         <>
//             <div className="">
//                 <div className="p-8 lg:w-1/2 mx-auto">
//                     <div className="bg-white rounded-t-lg p-8">
//                         <p className="text-center text-sm text-gray-400 font-light">Sign up with</p>
//                         <div>
//                             <div className="flex items-center justify-center space-x-4 mt-3">
//                                 <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3"            >
//                                         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"              ></path>
//                                     </svg>
//                                     Github
//                                 </button>
//                                 <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48"            >
//                                         <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
//                                         <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
//                                         <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
//                                         <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
//                                     </svg>
//                                     Google
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
//                         <p className="text-center text-sm text-gray-500 font-light">        Or sign up with credentials      </p>

//                         {currentUser && currentUser.email}

//                         <form className="mt-6" onSubmit={handleSubmit}>
//                             {/* <div className="relative">
//                                 <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Name" />
//                                 <div className="absolute left-0 inset-y-0 flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
//                                         <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                                     </svg>
//                                 </div>
//                             </div> */}
//                             <div className="relative mt-3">
//                                 <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Email" />
//                                 <div className="absolute left-0 inset-y-0 flex items-center" ref={emailRef}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
//                                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="relative mt-3">
//                                 <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="password" placeholder="Password" />
//                                 <div className="absolute left-0 inset-y-0 flex items-center" ref={passwordRef}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
//                                         <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="relative mt-3">
//                                 <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="password" placeholder="Password Confirmation" />
//                                 <div className="absolute left-0 inset-y-0 flex items-center" ref={passwordConfirmRef}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
//                                         <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="flex items-center justify-center mt-8">
//                                 <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" disabled={loading}>Create Account</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Signup




import { useEffect, useState } from "react";

const Careers = () => {
    const [jobs, setJobs] = useState(null);
    const [selectedRole, setSelectedRole] = useState("All");
    const [filteredJobs, setFilteredJobs] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(9);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch("/api/jobs");
            const json = await response.json();

            if (response.ok) {
                setJobs(json);
                setFilteredJobs(json);
            }
        };
        fetchJobs();
    }, []);

    useEffect(() => {
        const filterJobs = () => {
            let filtered = jobs;

            if (selectedRole !== "All") {
                filtered = filtered.filter((job) => job.type === selectedRole);
            }

            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter((job) => {
                    return (
                        job.jobTitle.toLowerCase().includes(query) ||
                        job.compName.toLowerCase().includes(query) ||
                        job.role.toLowerCase().includes(query) ||
                        job.industry.toLowerCase().includes(query)
                    );
                });
            }

            setFilteredJobs(filtered);
        };

        filterJobs();
    }, [selectedRole, jobs, searchQuery]);

    // Pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs?.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <div className="mr-2">
                    <h3>Filter according to your need:</h3>
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="mt-4 mb-6 p-2 border text-black border-gray-300 rounded-lg"
                    >
                        <option className="text-black" value="All">
                            All Types
                        </option>
                        <option className="text-black" value="Hackathon">
                            Hackathon
                        </option>
                        <option className="text-black" value="Job">
                            Job
                        </option>
                        <option className="text-black" value="Internship">
                            Internship
                        </option>
                    </select>
                </div>

                <div className="ml-auto">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="mt-4 p-2 border text-black border-gray-300 rounded-lg"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {currentJobs &&
                    currentJobs.map((job) => (
                        <div
                            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2"
                            key={job.id}
                        >
                            <p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {job.jobTitle}
                                </h5>
                            </p>
                            <p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#38bdf8] underline hover:underline-offset-4 hover:text-[#f43f5e]">
                                    {job.compName}
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Role: {job.type}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Salary: {job.jobSalary}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Experience: {job.exp}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Location: {job.location}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Employee Count: {job.empCount}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Role: {job.role}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Industry: {job.industry}
                            </p>

                            <a
                                href={job.link}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Apply Now
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    ))}
            </div>

            {filteredJobs && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, i) => (
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
    );
};

export default Careers;