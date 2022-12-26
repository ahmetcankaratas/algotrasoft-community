import { useContext, createContext, useMemo, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import scannerApi from "../api/backtest";
import { MarketResponse, MarketResponseResult } from "../@types/api";

type AppContextProps = {
  getStocks: UseQueryResult<MarketResponse>;
  searchQuery: string;
  filteredStocks: MarketResponseResult[] | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type AppStateProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [theme, setTheme] = useState<string>(localStorage.theme as string);

  const getStocks = useQuery("all-stocks", () => {
    return scannerApi.getStocks();
  });

  const filteredStocks = useMemo(() => {
    if (getStocks.data?.data == null) {
      return [];
    }

    if (searchQuery === "") {
      return getStocks.data?.data.stocks;
    }

    return getStocks.data?.data.stocks.filter((stock) => {
      return stock.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, getStocks.data]);

  return (
    <AppContext.Provider
      value={{
        getStocks,
        searchQuery,
        setSearchQuery,
        filteredStocks,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
