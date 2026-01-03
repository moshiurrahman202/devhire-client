import { useLoaderData, useParams } from "react-router";


const ViewApplications = () => {
    const jobApplied = useLoaderData()
    console.log(jobApplied);
    
    return (
        <div>
            <h1>this is View Applications params {jobApplied.length}</h1>
        </div>
    );
};

export default ViewApplications;