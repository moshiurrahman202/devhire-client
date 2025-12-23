import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
const JobsCard = ({ job }) => {
    const {_id, title, location, jobType, salaryRange, requirements, description, company, company_logo } = job
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-3'>
                <figure>
                    <img
                        src={company_logo}
                        className="w-16"
                        alt="company logo" />
                </figure>
                <div className='pt-2'>
                    <h1 className="text-3xl">{company}</h1>
                    <p className="flex items-center gap-1"><FaLocationDot /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{jobType}</div>
                </h2>
                <p>{`Salary : ${salaryRange.min} ${salaryRange.currency} to ${salaryRange.max} ${salaryRange.currency}`}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((item, idx) => <div className="badge badge-outline" key={idx}>{item}</div>)
                    }
                </div>
                <div className="card-actions">
                    <Link className="btn btn-sm btn-primary w-full" to={`/jobs/${_id}`}>Apply Naw!</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;