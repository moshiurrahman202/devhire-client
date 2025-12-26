

const AddJob = () => {
    return (
        <div>
            <h1>Add a job</h1>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
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
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn btn-square" type="reset" value="×" />
                        <input className="btn" type="radio" name="jobtype" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Page details</legend>
                    <select name="category" defaultValue="Job Category" className="select">
                        <option disabled={true}>Job Catagory</option>
                        <option>Front-End</option>
                        <option>Backent</option>
                        <option>Fullstack</option>
                    </select>
                </fieldset>
            </form>

        </div>
    );
};

export default AddJob;