import {InView} from "react-intersection-observer"
import { MarketResponseResult } from "../@types/api";

import BacktestCard from "../components/BacktestCard";
import Layout from "../components/Layout/Layuot";
import { useApp } from "../states/AppState";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Cover from "../components/Cover";
const Scanner: React.FC = () => {
  const {getStocks, filteredStocks} = useApp();

  const loading = <div className="w-full h-28 bg-gray-100 dark:bg-darkBlue3 rounded-lg p-4 flex justify-center items-center">
  <Loader /></div>

  return (
    <Layout>
      <section id="scanner" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header="Scanner" description="Search Engine for Trading Strategies"/>
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {getStocks.isLoading ? loading : <Search />}
          <ul className="flex w-full flex-col space-y-8 mt-8">
            {filteredStocks?.map(
              (backtest: MarketResponseResult) => (
                <InView key={backtest.id} rootMargin="200px 0px" threshold={0.3} triggerOnce={true}>
                  {({ inView, ref }) => {
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
