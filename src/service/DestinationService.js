import axios from "axios";

const DESTINATION_API_BASE_URL = "http://localhost:8080/api/destinations";

const getAllDestinations = () => {
    return axios.get(DESTINATION_API_BASE_URL);
}

const getDestinationById = (id) => {
    return axios.get(DESTINATION_API_BASE_URL + "/" + id);
}

const DestinationService = {
    getAllDestinations,
    getDestinationById
}

export default DestinationService;