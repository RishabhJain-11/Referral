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
            <div className="careers">
                {jobs && jobs.map((job) => (
                    <>
                        <br />
                        <br />
                        <br />
                        <h2 key={job._id}>Career Details for {job.jobTitle}</h2>
                        <p key={job._id}>Starting salary: {job.jobSalary}</p>
                        <p key={job._id}>Location: {job.location} </p>
                        <p key={job._id}>Experience: {job.exp} </p>
                        <p key={job._id}>Role: {job.role} </p>
                        <p key={job._id}>Industry Related: {job.industry} </p>
                        <br />
                        <br />
                        <br />
                    </>
                ))}
                
            </div>
        </>
    )
}

export default Careers

/**
 * UP
 * Rajasthan
 * Madhaya Pradesh
 * Bihar
 * Jharkhand
 * Chhattisgarh
 * Uttrakhand
 * Haryana
 * Himachal
 * Delhi
 */