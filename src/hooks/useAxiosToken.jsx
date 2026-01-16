import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({ baseURL: "http://localhost:3000" })
const useAxiosToken = () => {
    const { user, signOutUser } = useAuth();
    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config;
    });
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(() => {
                console.log("sign out user for 401 status code",error);
            })
            .catch(err => {
                console.log(err);
                
            })
        }
        return Promise.reject(error)
    })
    return axiosInstance;
};

export default useAxiosToken;