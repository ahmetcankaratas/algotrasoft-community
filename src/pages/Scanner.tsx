import { useQuery } from "react-query";
import { MarketResponseResult } from "../@types/api";
import scannerApi from "../api/backtest";
import BacktestCard from "../components/BacktestCard";
import Layout from "../components/Layout/Layuot";

const Scanner: React.FC = () => {
  const getStocks = useQuery("backtests", () => {
    return scannerApi.getStocks();
  });

  if (getStocks.isLoading) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <section id="scanner" className="bg-gray-50 dark:bg-darkBlue">
        <div className="flex justify-center items-center w-full h-96 bg-scanner-cover')]">
            <div className="text-center space-y-5">
            <h1 className="bold text-6xl">Scanner</h1>
            <p className="px-5 text-xl">Exclusive Search Engine <span className="text-darkCyan">for</span> <br/> Backtesting Trading Strategies Results</p>
            </div>
        </div>
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          <ul className="flex w-full flex-col space-y-8">
            {/* {getStocks.data?.data.stocks.map(
              (backtest: MarketResponseResult) => (
                <BacktestCard id={backtest.id} />
              )
            )} */}

             <BacktestCard id={getStocks.data?.data.stocks[0].id} />
            
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
