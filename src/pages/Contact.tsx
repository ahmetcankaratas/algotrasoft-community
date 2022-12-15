import { InView } from "react-intersection-observer";
import { MarketResponseResult } from "../@types/api";

import BacktestCard from "../components/BacktestCard";
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
      <section id="contact" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header="Contact" description="Join Us" />
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          <div className="container mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
            <p className="text-md md:text-lg text-justify">
              Please do not hesitate to contact us, if you want to learn more
              about simple trading strategies or more complicated statistical
              arbitrage of stocks. Regardless of whether you are a novice to
              trading or a veteran Quant, all are welcomed to be part of the
              society.
            </p>
            <p className="text-md md:text-lg text-justify">                <img
                  src="./assets/images/icon-email.svg"
                  alt=""
                  className="scale-10 invert dark:invert-0 inline mr-2 pb-1"
                />
                Email: algotrasoft@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
