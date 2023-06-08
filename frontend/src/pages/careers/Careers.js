import { useEffect, useState } from "react";

const Careers = () => {

    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch("/api/jobs");
            const json = await response.json();

            if (response.ok) {
                setJobs(json);
            }
        }
        fetchJobs();
    }, []);

    return (
        <>
            <div>
                {jobs && jobs.map((job) => (
                    <p>{job.jobTitle}</p>
                ))}
            </div>
        </>
    )
}

export default Careers

