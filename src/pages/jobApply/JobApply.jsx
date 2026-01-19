import axios from "axios";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";

const JobApply = () => {
    const { user } = useAuth();
    const { id: jobId } = useParams();
    const navigate = useNavigate();

    const handleJobApply = (e) => {
        e.preventDefault();

        const form = e.target;
        const application = {
            jobId,
            applicant: user.email,
            linkedin: form.linkedin.value,
            github: form.github.value,
            resume: form.resume.value,
        };

        axios.post("https://devhire-server-47ycxg3dh-moshiurrahman202s-projects.vercel.app/applications", application)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Application Submitted!",
                        text: "We wish you good luck",
                        confirmButtonColor: "#2563eb",
                    });
                    navigate("/");
                }
            })
            .catch((err) => console.error(err));


    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-base-100 rounded-xl shadow-lg p-6 relative">

                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4"
                >
                    <IoClose size={18} />
                </button>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-2">
                    Apply for this Job
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Logged in as <span className="font-medium">{user?.email}</span>
                </p>

                {/* Form */}
                <form onSubmit={handleJobApply} className="space-y-4">

                    <div>
                        <label className="label font-medium">LinkedIn Profile</label>
                        <input
                            name="linkedin"
                            type="url"
                            required
                            className="input input-bordered w-full"
                            placeholder="https://linkedin.com/in/username"
                        />
                    </div>

                    <div>
                        <label className="label font-medium">GitHub Profile</label>
                        <input
                            name="github"
                            type="url"
                            required
                            className="input input-bordered w-full"
                            placeholder="https://github.com/username"
                        />
                    </div>

                    <div>
                        <label className="label font-medium">Resume Link</label>
                        <input
                            name="resume"
                            type="url"
                            required
                            className="input input-bordered w-full"
                            placeholder="Google Drive / Portfolio link"
                        />
                    </div>

                    <button className="btn btn-primary w-full mt-4">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
