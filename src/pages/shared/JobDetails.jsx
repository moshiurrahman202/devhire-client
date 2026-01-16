import { Link, useLoaderData, useNavigate } from "react-router";
import { IoClose } from "react-icons/io5";
const JobDetails = () => {
    const {
        _id,
        title,
        applicationDeadline,
        category,
        company,
        company_logo,
        description,
        hr_email,
        hr_name,
        jobType,
        location,
        requirements,
        responsibilities,
        salaryRange} = useLoaderData()
        const navigate = useNavigate();
        
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="relative bg-base-100 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">

  <img
    src={company_logo}
    alt={company}
    className="w-24 h-24 object-contain border rounded-lg"
  />

  <div className="flex-1">
    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
    <p className="text-gray-500 mt-1">{company}</p>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="badge badge-outline">{jobType}</span>
      <span className="badge badge-outline">{category}</span>
      <span className="badge badge-outline">
        Deadline: {applicationDeadline}
      </span>
    </div>
  </div>

  {/* Cancel / Back Button */}
  <button
  onClick={() => navigate(-1)}
  className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4"
>
  <IoClose size={18} />
</button>
</div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">

          {/* Description */}
          <div className="bg-base-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Responsibilities */}
          {responsibilities?.length > 0 && (
            <div className="bg-base-100 p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-3">
                Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {requirements?.length > 0 && (
            <div className="bg-base-100 p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-3">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Salary */}
          {salaryRange?.length > 0 && (
            <div className="bg-base-100 p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-2">Salary Range</h2>
              <ul className="space-y-1 text-primary font-semibold">
                {salaryRange.map((salary, idx) => (
                  <li key={idx}>{salary}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Location */}
           <div className="bg-base-100 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Job Location</h2>
            <p className="text-gray-600">{location}</p>
          </div>

          {/* HR Info */}
          <div className="bg-base-100 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">HR Contact</h2>
            <p className="font-medium">{hr_name}</p>
            <p className="text-sm text-gray-500">{hr_email}</p>
          </div>

          <Link
            to={`/jobapply/${_id}`}
            className="btn btn-primary w-full"
          >
            Apply for this Job
          </Link>
        </div>
      </div>
    </div>
    );
};

export default JobDetails;