import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const AddJob = () => {
    const { user } = useAuth();

    const handleforndata = e => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const plainObject = Object.fromEntries(formdata.entries());
        // data process
        const { min, max, currency, ...restObject } = plainObject;
        // slary process
        restObject.salaryRange = { min, max, currency }
        // requirements process
        restObject.requirements = restObject.requirements.split(",").map(req => req.trim())
        // responsibilities process
        restObject.responsibilities = restObject.responsibilities.split(",").map(res => res.trim())
        // add status
        restObject.status = "active";

        axios.post("http://localhost:3000/jobs", restObject)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been posted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            })
            .then(err => {
                console.log(err);

            })

    }
    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-xl p-6 md:p-10 space-y-10">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-semibold">Post a New Job</h1>
                    <p className="text-gray-500 mt-1">
                        Provide accurate job details to attract the right candidates
                    </p>
                </div>

                <form
                    onSubmit={handleforndata}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                >

                    {/* LEFT COLUMN (Main Info) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Job Information */}
                        <section className="space-y-5">
                            <h2 className="text-xl font-medium border-b pb-2">
                                Job Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input name="title" className="input input-bordered" placeholder="Job Title" />
                                <input name="company" className="input input-bordered" placeholder="Company Name" />
                                <input name="company_logo" className="input input-bordered md:col-span-2" placeholder="Company Logo URL" />
                                <input name="location" className="input input-bordered" placeholder="Location" />

                                <select name="category" className="select select-bordered">
                                    <option disabled selected>Job Category</option>
                                    <option>Frontend</option>
                                    <option>Backend</option>
                                    <option>Fullstack</option>
                                </select>
                            </div>
                        </section>

                        {/* Description */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-medium border-b pb-2">
                                Job Description
                            </h2>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full h-36"
                                placeholder="Describe responsibilities, expectations, and benefits"
                            />
                        </section>

                        {/* Requirements */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-medium border-b pb-2">
                                Requirements
                            </h2>
                            <textarea
                                name="requirements"
                                className="textarea textarea-bordered w-full"
                                placeholder="Skills & requirements (comma separated)"
                            />
                        </section>

                        {/* Responsibilities */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-medium border-b pb-2">
                                Responsibilities
                            </h2>
                            <textarea
                                name="responsibilities"
                                className="textarea textarea-bordered w-full"
                                placeholder="Key responsibilities (comma separated)"
                            />
                        </section>

                    </div>

                    {/* RIGHT COLUMN (Meta Info) */}
                    <aside className="space-y-8">

                        {/* Job Type */}
                        <section className="space-y-3">
                            <h2 className="text-lg font-medium">Job Type</h2>
                            <div className="flex flex-col gap-3">
                                {["On-site", "Remote", "Hybrid"].map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="jobType" value={type} className="radio radio-primary" required />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Salary */}
                        <section className="space-y-3">
                            <h2 className="text-lg font-medium">Salary</h2>
                            <input name="min" className="input input-bordered" placeholder="Minimum Salary" />
                            <input name="max" className="input input-bordered" placeholder="Maximum Salary" />
                            <select name="currency" className="select select-bordered">
                                <option>BDT</option>
                                <option>USD</option>
                            </select>
                        </section>

                        {/* Deadline */}
                        <section className="space-y-3">
                            <h2 className="text-lg font-medium">Application Deadline</h2>
                            <input
                                type="date"
                                name="deadline"
                                min={new Date().toLocaleDateString("en-CA")}
                                className="input input-bordered"
                                required
                            />
                        </section>

                        {/* HR Info */}
                        <section className="space-y-3 bg-base-200 p-5 rounded-xl">
                            <h2 className="text-lg font-medium">HR Contact</h2>
                            <input name="hr_name" className="input input-bordered" placeholder="HR Name" defaultValue={user?.displayName.toUpperCase()} />
                            <input name="hr_email" className="input input-bordered" placeholder="HR Email" defaultValue={user?.email} />
                        </section>

                        {/* Submit */}
                        <button className="btn btn-primary w-full text-lg">
                            Publish Job
                        </button>

                    </aside>

                </form>
            </div>
        </div>

    );
};

export default AddJob;