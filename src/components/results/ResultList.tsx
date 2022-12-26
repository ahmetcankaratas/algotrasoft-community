import { InView } from "react-intersection-observer";
import { MarketResponseResult } from "../../@types/api";

import Item from "./ResultItem";
import { useApp } from "../../states/AppState";
import ErrorBoundary from "../ErrorBoundaries";
const Scanner: React.FC = () => {
  const { getStocks, filteredStocks } = useApp();

  return (
    <ul className="mt-8 flex max-h-screen w-full flex-col space-y-8 overflow-y-scroll scrollbar scrollbar-track-gray-300 scrollbar-thumb-darkCyan dark:scrollbar-track-white">
      {filteredStocks?.map((backtest: MarketResponseResult) => (
        <InView
          key={backtest.id}
          rootMargin="200px 0px"
          threshold={0.3}
          triggerOnce={true}
        >
          {({ inView, ref }) => {
            return inView ? (
              <Item key={backtest.id} id={backtest.id} />
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
  );
};

export default Scanner;
