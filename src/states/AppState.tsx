import { useContext, createContext } from "react";
import { useQuery, UseQueryResult } from "react-query";
import scannerApi from "../api/backtest";
import { MarketResponse } from "../@types/api";

type AppContextProps = {
    getStocks: UseQueryResult<MarketResponse>;
}

type AppStateProviderProps = {
    children: React.ReactNode;
}

export const AppContext = 
createContext<AppContextProps>(({} as AppContextProps));

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {

    const getStocks = useQuery("stocks", () => {
        return scannerApi.getStocks();
    });

    return (
        <AppContext.Provider value={{ getStocks }}>
            {children}
        </AppContext.Provider>
    );
};
