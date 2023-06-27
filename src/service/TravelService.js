import axios from "axios";

const TRAVELS_API_BASE_URL = "http://localhost:8080/api/travels";

const getAllTravels = () => {
    return axios.get(TRAVELS_API_BASE_URL);
}

const TravelService = {
    getAllTravels
}

export default TravelService;