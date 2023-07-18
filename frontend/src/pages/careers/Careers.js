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
                            {/* Rest of your code for rendering job items */}
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
