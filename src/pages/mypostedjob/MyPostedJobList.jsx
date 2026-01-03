import { use } from "react";
import { Link } from "react-router";


const MyPostedJobList = ({jobPostedByEmailPromise}) => {
    const jobList = use(jobPostedByEmailPromise);
    console.log(jobList);
    
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Deadline</th>
        <th>View Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {
        jobList.map((job, idx) => <tr key={job._id}>
        <th>{idx + 1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td><Link to={`/applications/${job._id}`}>Applications</Link></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    );
};
export default MyPostedJobList;