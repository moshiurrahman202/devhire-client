

const AddJob = () => {
    return (
        <div>
            <h1>Add a job</h1>
            <form className="items-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                    <legend className="fieldset-legend">Basic Job Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input" placeholder="Job Designation" />

                    <label className="label">Company</label>
                    <input type="text" name="company" className="input" placeholder="Name of company" />

                    <label className="label">Company Logo</label>
                    <input type="text" name="company_logo" className="input" placeholder="URL of company logo" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input" placeholder="For Which location" />
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 w-sm rounded-box  border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn btn-square" type="reset" value="×" />
                        <input className="btn" type="radio" name="jobtype" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" />
                    </div>
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
                    <legend className="fieldset-legend">Job Catagory</legend>
                    <select name="category" defaultValue="Job Category" className="select">
                        <option disabled={true}>Job Catagory</option>
                        <option>Front-End</option>
                        <option>Backent</option>
                        <option>Fullstack</option>
                    </select>
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 w-sm border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input type="date" name="deadline" className="input" />
                </fieldset>
                {/*  */}

                <fieldset className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-sm fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div>
                        <label className="label">Min Sarary</label>
                        <input type="text" name="min" className="input" placeholder="Minimum Salary" />
                    </div>

                    <div>
                        <label className="label">Max Sarary</label>
                        <input type="text" name="max" className="input" placeholder="Maximun Salary" />
                    </div>

                    <div><label className="label">Currency</label>
                        <select name="currency" defaultValue="currency" className="select">
                            <option disabled={true}>currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>JPY</option>
                            <option>AUD</option>
                            <option>CAD</option>
                        </select></div>
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name="description" placeholder="Job Description"></textarea>
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm  border p-4">
                    <legend className="fieldset-legend">Page details</legend>
                </fieldset>
            </form>

        </div>
    );
};

export default AddJob;