import axios from "axios";

const instance = axios.create({ 
    baseURL: "https://algotrasoft-1973e-default-rtdb.firebaseio.com",
})

export default instance;