import { use } from "react";
import JobsCard from "../shared/JobsCard";


const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    console.log(jobs);
    return (
        <div>
            <h1 className="text-center text-7xl font-semibold my-5">Hot Jobs</h1>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center ">{
                jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
            }</div>

        </div>
    );
};

export default HotJobs;