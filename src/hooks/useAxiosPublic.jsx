import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-with-image-upload-part-6-psi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;