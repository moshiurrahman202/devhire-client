import axios from "axios";
import { useLoaderData} from "react-router";
import Swal from "sweetalert2";


const ViewApplications = () => {
    const jobApplicant = useLoaderData()
    console.log(jobApplicant, "length => ", jobApplicant.length);
    const handleStatus = (e, id) => {
        console.log(e.target.value, id);
        axios.patch(`http://localhost:3000/applications/${id}`, {status: e.target.value})
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Application Status updated!",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
        .catch(err => {
            console.log(err);  
        })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobApplicant.map((applicant, idx) => <tr key={applicant._id}>
        <th>{idx + 1}</th>
        <td>{applicant.applicant}</td>
        <td>Frontend Specialist</td>
        <td><select onChange={e => handleStatus(e, applicant._id)} defaultValue={applicant.status} className="select">
  <option disabled={false}>Update Status</option>
  <option>Pending</option>
  <option>Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default ViewApplications;