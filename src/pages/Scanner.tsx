import { useQuery } from "react-query";
import scannerApi from "../api/backtest";

const Scanner: React.FC = () => {
  const backtest = useQuery("backtest", () => {
    return scannerApi.getBacktest();
  });

  if (backtest.isLoading) {
    return <div>loading</div>;
  }

  console.log(backtest);
  return (
    <div>
      <h1>Scanner</h1>

      {backtest.data?.data.results.map((backtest: any) => (
        <div>{backtest.name}</div>
      ))}
    </div>
  );
};

export default Scanner;
