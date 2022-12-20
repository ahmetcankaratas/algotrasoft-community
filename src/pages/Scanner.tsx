import { InView } from "react-intersection-observer";
import { MarketResponseResult } from "../@types/api";

import BacktestCard from "../components/ResultItem";
import Layout from "../components/Layout/Layuot";
import { useApp } from "../states/AppState";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Cover from "../components/Cover";
const Scanner: React.FC = () => {
  const { getStocks, filteredStocks } = useApp();

  const loading = (
    <div className="flex h-28 w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-darkBlue3">
      <Loader />
    </div>
  );

  return (
    <Layout>
      <section id="scanner" className="bg-gray-50 dark:bg-darkBlue">
        <Cover
          header="Scanner"
          description="Search Engine for Trading Strategies"
        />
        <div className="container mx-auto px-6 pt-12 pb-20 md:pb-24">
          {getStocks.isLoading ? loading : <Search />}
          <ul className="mt-8 flex max-h-screen w-full flex-col space-y-8 scrollbar scrollbar-thumb-darkCyan dark:scrollbar-track-white scrollbar-track-gray-300 overflow-y-scroll">
            {filteredStocks?.map((backtest: MarketResponseResult) => (
              <InView
                key={backtest.id}
                rootMargin="200px 0px"
                threshold={0.3}
                triggerOnce={true}
              >
                {({ inView, ref }) => {
                  return inView ? (
                    <BacktestCard key={backtest.id} id={backtest.id} />
                  ) : (
                    <div
                      ref={ref}
                      className="h-72 w-full rounded-lg bg-gray-100 dark:bg-darkBlue3"
                    ></div>
                  );
                }}
              </InView>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
