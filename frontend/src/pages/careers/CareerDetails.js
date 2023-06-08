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
        <>
            <div>ok</div>
        </>
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