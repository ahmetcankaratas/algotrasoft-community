import { MarketResponseResult } from "../@types/api";

import BacktestCard from "../components/BacktestCard";
import Layout from "../components/Layout/Layuot";
import { useApp } from "../states/AppState";

const Scanner: React.FC = () => {
  const {getStocks} = useApp();

  if (getStocks.isLoading) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <section id="scanner" className="bg-gray-50 dark:bg-darkBlue">
        <div className="flex justify-center items-center w-full h-96 bg-scanner-cover')]">
            <div className="text-center space-y-5">
            <h1 className="bold text-6xl">Scanner</h1>
            <p className="px-5 text-xl">Search Engine for Trading Strategies <span className="text-darkCyan">Results</span>  </p>
            </div>
        </div>
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          <ul className="flex w-full flex-col space-y-8">
            {getStocks.data?.data.stocks.slice(0, 10).map(
              (backtest: MarketResponseResult) => (
                <BacktestCard key={backtest.id} id={backtest.id} />
              )
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
