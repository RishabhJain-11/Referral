import { useEffect, useState } from "react";

export default function CareerDetails() {

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
        <div className="career-details">
            {jobs && jobs.map((job) => (
                <>
                    <h2 key={job._id}>Career Details for {job.jobTitle}</h2>
                    <p key={job._id}>Starting salary: {job.jobSalary}</p>
                    <p key={job._id}>Location: {job.location} </p>
                    <p key={job._id}>Experience: {job.exp} </p>
                    <p key={job._id}>Role: {job.role} </p>
                    <p key={job._id}>Industry Related: {job.industry} </p>
                </>
            ))}
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    )
}

/**
 * 
 * return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    )
 */