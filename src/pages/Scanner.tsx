import Layout from "../components/layout/Layout";
import { useApp } from "../states/AppState";
import Loader from "../components/UI/Loader";
import Search from "../components/results/Search";
import Cover from "../components/UI/Cover";
import ResultList from "../components/results/ResultList";
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
          description="Backtesting Results of Ross Hook Trading Strategy"
        />
        <div className="container mx-auto px-6 pt-12 pb-20 md:pb-24">
          {getStocks.isLoading ? loading : <Search />}
          <ResultList />
        </div>
      </section>
    </Layout>
  );
};

export default Scanner;
