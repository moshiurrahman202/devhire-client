import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobPostedByEmailPromise } from "../../api/jobpostedApi";


const MyPostedJob = () => {
    const {user} = useAuth()
    console.log(user);
    
    return (
        <div>
            <h1>This is my posted job component!</h1>
            <Suspense fallback={<div className="text-center"><span className="loading loading-dots loading-xl"></span></div>}>
            <MyPostedJobList jobPostedByEmailPromise={jobPostedByEmailPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;