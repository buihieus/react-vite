// import axios from "axios";
import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND="/api/v1/user";
        const data = {
            // DINH DANG CUA NO LA 1 BIEN OBJECTS
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (_id,fullName, phone) => {
    const URL_BACKEND="/api/v1/user";
        const data = {
            // DINH DANG CUA NO LA 1 BIEN OBJECTS
            _id: _id,
            fullName: fullName,
            phone: phone
        }
        return axios.put(URL_BACKEND, data);
}
const deleteUserAPI = (id) => {
    //dùng dấu backtick để truyền trực tiếp id vào 
    const URL_BACKEND=`/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND);
}
const fetchAllUserAPI = () => {
    const URL_BACKEND="/api/v1/user";
    return axios.get(URL_BACKEND);
}
export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI,
    deleteUserAPI
}
