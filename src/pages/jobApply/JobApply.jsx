import axios from 'axios';
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';


const JobApply = () => {
    const { user } = useAuth();
    const {id: jobId} = useParams();
    const navigate = useNavigate();

    const handleJobApply = e => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }
        axios.post("http://localhost:3000/applications",{...application}
        )
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your application has been sunmitted!",
  showConfirmButton: false,
  timer: 1500
});
                
            }
        })
        .then(err => {
            console.log(err);
        })
    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1 className="text-3xl items-center">Go back to see job <span onClick={goBack} className="underline cursor-pointer text-xl">details?</span></h1>
            <form onSubmit={handleJobApply} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 flex flex-col justify-center items-center">
                <legend className="fieldset-legend">Enter Here Your Information</legend>

                <label className="label">linkedin</label>
                <input name="linkedin" type="ulr" className="input" placeholder="linkedin URL" />

                <label className="label">GitHub</label>
                <input name="github" type="url" className="input" placeholder="GitHub URL" />

                <label className="label">Resume</label>
                <input name="resume" type="url" className="input" placeholder="Resume URL" />
                <input type="submit" className="btn" value="Submit" />
            </form>

        </div>
    );
};

export default JobApply;