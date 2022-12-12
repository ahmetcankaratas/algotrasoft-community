import { useQuery } from "react-query";
import scannerApi from "../api/backtest";

const useFindBacktest = (id: number | undefined) => {
  return useQuery(["backtest", id], () => {
    if (!id) {
      return null;
    }

    return scannerApi.getBacktest(id);
  });
};

export default useFindBacktest;