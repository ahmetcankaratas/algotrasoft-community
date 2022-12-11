import { MarketResponse, BacktestResponseResult } from "../@types/api";
import client from "./client";

const getStocks = async(): Promise<MarketResponse> => client.get("/market.json");

const getBacktest = async(id: number): Promise<BacktestResponseResult> => client.get(`/backtests/results/${id}.json`);

const scannerApi = {
    getStocks,
    getBacktest
};

export default scannerApi;