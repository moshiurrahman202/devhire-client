import { use } from "react";


const ApplicationList = ({ myApplicationPromise }) => {
    const applicationList = use(myApplicationPromise)
    console.log(applicationList);

    return (


        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <span>#</span>
                            </label>
                        </th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Your Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        applicationList.map((application, idx) => <tr key={application._id}>
                            <th>
                                <label>
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                    <span>{idx}</span>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={application.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{application.company}</div>
                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                {application.title}
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                            </td>
                            <td>{application.applicant}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)
                    }



                </tbody>

            </table>
        </div>


    );
};

export default ApplicationList;