

const AddJob = () => {
    const handleforndata = e => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const plainObject = Object.fromEntries(formdata.entries());
        console.log(plainObject);


    }
    return (
        // <div className="min-h-screen bg-base-200 py-10">
        //     <div className="max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6 md:p-10 space-y-12">
        //         <h1 className="text-3xl font-semibold">
        //             Add a New Job
        //         </h1>
        //         <p className="text-gray-500">Fill out the details below to publish a job</p>

        //         <form onSubmit={handleforndata} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        //             {/* Basic Job Info */}
        //             <section className="space-y-6">
        //                 <h2 className="text-xl font-medium">Job Information</h2>

        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                     {/* Job Title */}
        //                     <input
        //                         type="text"
        //                         name="title"
        //                         className="input input-bordered w-full"
        //                         placeholder="Job Title (e.g. Frontend Developer)"
        //                     />

        //                     {/* Company Name */}
        //                     <input
        //                         type="text"
        //                         name="company"
        //                         className="input input-bordered w-full"
        //                         placeholder="Company Name"
        //                     />

        //                     {/* Company Logo URL */}
        //                     <input
        //                         type="url"
        //                         name="company_logo"
        //                         className="input input-bordered w-full"
        //                         placeholder="Company Logo URL (https://...)"
        //                     />

        //                     {/* Location */}
        //                     <input
        //                         type="text"
        //                         name="location"
        //                         className="input input-bordered w-full"
        //                         placeholder="Job Location"
        //                     />

        //                     {/* Category – full width */}
        //                     <select
        //                         name="category"
        //                         className="select select-bordered w-full md:col-span-2"
        //                     >
        //                         <option disabled selected>
        //                             Job Category
        //                         </option>
        //                         <option>Frontend</option>
        //                         <option>Backend</option>
        //                         <option>Fullstack</option>
        //                     </select>
        //                 </div>
        //             </section>



        //             {/* Job Type */}
        //             <section className="space-y-3">
        //                 <h2 className="text-xl font-medium">Job Type</h2>
        //                 <div className="flex flex-wrap gap-4">
        //                     {["On-site", "Remote", "Hybrid"].map(type => (
        //                         <label
        //                             key={type}
        //                             className="flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer hover:bg-base-200"
        //                         >
        //                             <input
        //                                 type="radio"
        //                                 name="jobType"
        //                                 value={type}
        //                                 className="radio radio-primary"
        //                                 required
        //                             />
        //                             <span>{type}</span>
        //                         </label>
        //                     ))}
        //                 </div>
        //             </section>
        //             <section className="space-y-4">
        //                 <h2 className="text-xl font-medium">Salary</h2>

        //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        //                     <input className="input input-bordered" name="min" placeholder="Min Salary" />
        //                     <input className="input input-bordered" name="max" placeholder="Max Salary" />
        //                     <select name="currency" className="select select-bordered">
        //                         <option>Currency</option>
        //                         <option>BDT</option>
        //                         <option>USD</option>
        //                     </select>
        //                 </div>
        //             </section>


        //             {/* Deadline */}
        //             <section className="space-y-4">
        //                 <h2 className="text-xl font-medium">Job Description</h2>
        //                 <textarea className="textarea textarea-bordered w-full h-32" name="description" placeholder="Describe the role"></textarea>
        //             </section>


        //             {/* Requirements */}
        //             <fieldset className="fieldset bg-base-100 rounded-box border p-6 md:col-span-2">
        //                 <legend className="fieldset-legend">Job Requirements</legend>
        //                 <textarea className="textarea textarea-bordered w-full" name="requirements" rows="3" placeholder="Job requirements (separated by comma)" />
        //             </fieldset>

        //             {/* Responsibilities */}
        //             <fieldset className="fieldset bg-base-100 rounded-box border p-6 md:col-span-2">
        //                 <legend className="fieldset-legend">Job Responsibilities</legend>
        //                 <textarea className="textarea textarea-bordered w-full" rows="3" name="responsibilities" placeholder="Job requirements (separated by comma)" />
        //             </fieldset>

        //             {/* HR Info */}
        //             <section className="bg-base-200 rounded-xl p-6 space-y-4">
        //                 <h2 className="text-lg font-medium">HR Information</h2>

        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                     <input className="input input-bordered" name="hr_name" placeholder="HR Name" />
        //                     <input className="input input-bordered" name="hr_email" placeholder="HR Email" />
        //                 </div>
        //             </section>
        //             {/* Application Deadline */}
        //             <section className="space-y-4">
        //                 <h2 className="text-xl font-medium">Application Deadline</h2>
        //                 <input
        //                     type="date"
        //                     name="deadline"
        //                     min={new Date().toISOString().split("T")[0]}
        //                     className="input input-bordered w-full"
        //                     required
        //                 />
        //             </section>


        //             {/* Submit */}
        //             <div className="flex justify-end">
        //                 <button className="btn btn-primary px-12">Post Job</button>
        //             </div>

        //         </form>
        //     </div>
        // </div>
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
          <input name="hr_name" className="input input-bordered" placeholder="HR Name" />
          <input name="hr_email" className="input input-bordered" placeholder="HR Email" />
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