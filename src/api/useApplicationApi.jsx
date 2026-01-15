import useAxiosToken from "../hooks/useAxiosToken";


const useApplicationApi = () => {
    const axiosToken = useAxiosToken();
    const myApplicationPromise = email => {
        return axiosToken.get(`/applications?email=${email}`)
        .then(res => res.data)
    }
    return myApplicationPromise;
};

export default useApplicationApi;