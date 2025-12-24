import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";



const Home = () => {
    const jobsPromise = fetch("http://localhost:3000/jobs").then(res => res.json());

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className="text-center"><span className="loading loading-dots loading-xl"></span></div>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
        </div>
    );
};

export default Home;