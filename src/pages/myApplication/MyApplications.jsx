import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationApi";


const MyApplications = () => {
    const {user} = useAuth()
    
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<div className="text-center"><span className="loading loading-dots loading-xl"></span></div>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email, user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;