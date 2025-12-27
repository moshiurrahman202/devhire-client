

const AddJob = () => {
    return (
        // <div>
        //     <h1>Add a job</h1>
        //     <form className="items-center">
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
        //             <legend className="fieldset-legend">Basic Job Info</legend>

        //             <label className="label">Job Title</label>
        //             <input type="text" name="title" className="input" placeholder="Job Designation" />

        //             <label className="label">Company</label>
        //             <input type="text" name="company" className="input" placeholder="Name of company" />

        //             <label className="label">Company Logo</label>
        //             <input type="text" name="company_logo" className="input" placeholder="URL of company logo" />

        //             <label className="label">Location</label>
        //             <input type="text" name="location" className="input" placeholder="For Which location" />
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 w-sm rounded-box  border p-4">
        //             <legend className="fieldset-legend">Job Type</legend>
        //             <div className="filter">
        //                 <input className="btn btn-square" type="reset" value="×" />
        //                 <input className="btn" type="radio" name="jobtype" aria-label="On-site" />
        //                 <input className="btn" type="radio" name="jobtype" aria-label="Remote" />
        //                 <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" />
        //             </div>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
        //             <legend className="fieldset-legend">Job Catagory</legend>
        //             <select name="category" defaultValue="Job Category" className="select">
        //                 <option disabled={true}>Job Catagory</option>
        //                 <option>Front-End</option>
        //                 <option>Backent</option>
        //                 <option>Fullstack</option>
        //             </select>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 w-sm border-base-300 rounded-box  border p-4">
        //             <legend className="fieldset-legend">Application Deadline</legend>
        //             <input type="date" name="deadline" className="input" />
        //         </fieldset>
        //         {/*  */}

        //         <fieldset className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-sm fieldset bg-base-200 border-base-300 rounded-box  border p-4">
        //             <legend className="fieldset-legend">Salary Range</legend>

        //             <div>
        //                 <label className="label">Min Sarary</label>
        //                 <input type="text" name="min" className="input" placeholder="Minimum Salary" />
        //             </div>

        //             <div>
        //                 <label className="label">Max Sarary</label>
        //                 <input type="text" name="max" className="input" placeholder="Maximun Salary" />
        //             </div>

        //             <div><label className="label">Currency</label>
        //                 <select name="currency" defaultValue="currency" className="select">
        //                     <option disabled={true}>currency</option>
        //                     <option>BDT</option>
        //                     <option>USD</option>
        //                     <option>EUR</option>
        //                     <option>JPY</option>
        //                     <option>AUD</option>
        //                     <option>CAD</option>
        //                 </select></div>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
        //             <legend className="fieldset-legend">Job Description</legend>
        //             <textarea className="textarea" name="description" placeholder="Job Description"></textarea>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
        //             <legend className="fieldset-legend">Job Requirements</legend>
        //             <textarea className="textarea" name="requirements" placeholder="Job requirements (separated by comma)"></textarea>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
        //             <legend className="fieldset-legend">Job Responsibilities</legend>
        //             <textarea className="textarea" name="responsibilities" placeholder="Job responsibilities (separated by comma)"></textarea>
        //         </fieldset>
        //         {/*  */}
        //         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
        //             <legend className="fieldset-legend">HR Info</legend>

        //             <label className="label">HR Name</label>
        //             <input type="text" name="hr_name" className="input" placeholder="HR Name" />

        //             <label className="label">HR Email</label>
        //             <input type="text" name="hr_email" className="input" placeholder="HR Email" />
        //         </fieldset>
        //         <input type="submit" className="btn" value="Add Job" />
        //     </form>

        // </div>
        <div className="min-h-screen bg-base-200 py-10">
            <div className="max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6 md:p-10 space-y-12">
                <h1 className="text-3xl font-semibold">
                    Add a New Job
                </h1>
                <p className="text-gray-500">Fill out the details below to publish a job</p>

                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Basic Job Info */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-medium">Job Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Job Title */}
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered w-full"
                                placeholder="Job Title (e.g. Frontend Developer)"
                            />

                            {/* Company Name */}
                            <input
                                type="text"
                                name="company"
                                className="input input-bordered w-full"
                                placeholder="Company Name"
                            />

                            {/* Company Logo URL */}
                            <input
                                type="url"
                                name="company_logo"
                                className="input input-bordered w-full"
                                placeholder="Company Logo URL (https://...)"
                            />

                            {/* Location */}
                            <input
                                type="text"
                                name="location"
                                className="input input-bordered w-full"
                                placeholder="Job Location"
                            />

                            {/* Category – full width */}
                            <select
                                name="category"
                                className="select select-bordered w-full md:col-span-2"
                            >
                                <option disabled selected>
                                    Job Category
                                </option>
                                <option>Frontend</option>
                                <option>Backend</option>
                                <option>Fullstack</option>
                            </select>
                        </div>
                    </section>



                    {/* Job Type */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-medium">Job Type</h2>

                        <div className="flex flex-wrap gap-4">
                            {["On-site", "Remote", "Hybrid"].map(type => (
                                <label key={type} className="flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer hover:bg-base-200">
                                    <input type="radio" name="jobType" className="radio radio-primary" />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-xl font-medium">Salary</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <input className="input input-bordered" name="min" placeholder="Min Salary" />
                            <input className="input input-bordered" name="max" placeholder="Max Salary" />
                            <select name="currency" className="select select-bordered">
                                <option>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </section>






                    {/* Deadline */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-medium">Job Description</h2>
                        <textarea className="textarea textarea-bordered w-full h-32" name="description" placeholder="Describe the role"></textarea>
                    </section>




                    {/* Requirements */}
                    <fieldset className="fieldset bg-base-100 rounded-box border p-6 md:col-span-2">
                        <legend className="fieldset-legend">Job Requirements</legend>
                        <textarea className="textarea textarea-bordered w-full" name="requirements" rows="3" placeholder="Job requirements (separated by comma)" />
                    </fieldset>

                    {/* Responsibilities */}
                    <fieldset className="fieldset bg-base-100 rounded-box border p-6 md:col-span-2">
                        <legend className="fieldset-legend">Job Responsibilities</legend>
                        <textarea className="textarea textarea-bordered w-full" rows="3" name="responsibilities" placeholder="Job requirements (separated by comma)" />
                    </fieldset>

                    {/* HR Info */}
                    <section className="bg-base-200 rounded-xl p-6 space-y-4">
                        <h2 className="text-lg font-medium">HR Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="input input-bordered" name="hr_name" placeholder="HR Name" />
                            <input className="input input-bordered" name="hr_email" placeholder="HR Email" />
                        </div>
                    </section>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <button className="btn btn-primary px-12">Post Job</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddJob;