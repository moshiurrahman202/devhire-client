import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
    const {_id, title} = useLoaderData()
    // console.log(detailData);
    
    return (
        <div>
            <h1>This is job details components!</h1>
            <h1>{title}</h1>
            <Link to={`/jobapply/${_id}`} className="btn btn-primary">Apply Naw!</Link>
        </div>
    );
};

export default JobDetails;