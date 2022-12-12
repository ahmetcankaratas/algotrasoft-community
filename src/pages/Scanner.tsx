import {InView} from "react-intersection-observer"
import { MarketResponseResult } from "../@types/api";

import BacktestCard from "../components/BacktestCard";
import Layout from "../components/Layout/Layuot";
import { useApp } from "../states/AppState";
import Loader from "../components/Loader";
import Search from "../components/Search";
const Scanner: React.FC = () => {
  const {getStocks, filteredStocks} = useApp();

  const loading = <div className="w-full h-28 bg-gray-100 dark:bg-darkBlue3 rounded-lg p-4 flex justify-center items-center">
  <Loader />
</div>

console.log(filteredStocks)

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
          {getStocks.isLoading ? loading : <Search />}
          <ul className="flex w-full flex-col space-y-8 mt-8">
            {filteredStocks?.map(
              (backtest: MarketResponseResult) => (
                <InView key={backtest.id} rootMargin="200px 0px" threshold={0.3} triggerOnce={true}>
                  {({ inView, ref }) => {
                    console.log(backtest.id)
                    return inView ? (<BacktestCard key={backtest.id} id={backtest.id}/>):( <div ref={ref} className="w-full h-72 bg-gray-100 dark:bg-darkBlue3 rounded-lg"></div>)
                  }}
                </InView>
                
              )
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
