import { use } from "react";


const MyPostedJobList = ({jobPostedByEmailPromise}) => {
    const jobList = use(jobPostedByEmailPromise);
    console.log(jobList);
    
    return (
        <div>
            
        </div>
    );
};

export default MyPostedJobList;