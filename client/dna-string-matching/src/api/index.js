import axios from "axios";

const getDiseaseById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/v1/disease/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

const postDisease = async (id, data) => {
    try {
        const response = await axios.post("http://localhost:5000/v1/disease", data);
        return response;
    } catch (error) {
        throw error;
    }
};

const updateDisease = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:5000/v1/disease/${id}`, data);
        return response;
    } catch (error) {
        throw error;
    }
};

const deleteDiease = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/v1/disease/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

const dnaTest = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/v1/test", data);
        return response;
    } catch (error) {
        throw error;
    }
};

const getAllHistory = async () => {
    try {
        const response = axios.get("http://localhost:5000/v1/history");
        return response;
    } catch (error) {
        throw error;
    }
};

const getHistory = async (searchKey) => {
    try {
        const response = await axios.post("http://localhost:5000/v1/history", { "search-key": searchKey });
        return response;
    } catch (error) {
        throw error;
    }
};

const getDiseasesList = async (page, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:5000/v1/disease?page=${page}&perPage=12`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { getDiseaseById, updateDisease, postDisease, deleteDiease, dnaTest, getAllHistory, getHistory, getDiseasesList };
