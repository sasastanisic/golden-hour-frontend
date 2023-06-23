import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

const register = (user) => {
    return axios.post(USER_API_BASE_URL, user);
}

const UserService = {
    register
};

export default UserService;