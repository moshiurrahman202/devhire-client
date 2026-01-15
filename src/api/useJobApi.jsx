import useAxiosToken from "../hooks/useAxiosToken";


const useJobApi = () => {
    const axioxToken = useAxiosToken();
    const jobCreatedByPromise = email => {
        return axioxToken.get(`/jobs?email=${email}`)
        .then(res => res.data)
    }
    return jobCreatedByPromise;
};

export default useJobApi;