import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobPostedByEmailPromise } from "../../api/jobpostedApi";

const MyPostedJob = () => {
  const { user, loading } = useAuth();

  // 🔒 Auth loading guard
  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  // 🔒 Safety check
  if (!user?.email) {
    return <p className="text-center">No user found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        My Posted Jobs
      </h1>

      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <MyPostedJobList
          jobPostedByEmailPromise={jobPostedByEmailPromise(user.email, user.accessToken)}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
