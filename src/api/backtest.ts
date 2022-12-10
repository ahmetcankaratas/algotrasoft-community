import client from "./client";

const getBacktest = async() => client.get("/backtests.json");

const scannerApi = {
    getBacktest,
};

export default scannerApi;