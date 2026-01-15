import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";


const MyApplications = () => {
    const {user} = useAuth();
    const myApplicationPromise = useApplicationApi()
    
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<div className="text-center"><span className="loading loading-dots loading-xl"></span></div>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;