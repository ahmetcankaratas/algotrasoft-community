import { useParams } from "react-router";
import useFindBacktest from "../hooks/useFindBacktest";
import Loader from "../components/UI/Loader";
import Layout from "../components/layout/Layout";
import Cover from "../components/UI/Cover";
import ResultDetails from "../components/results/details/ResultDetails";
import BackButton from "../components/UI/BackButton";
import NotFound from "./NotFound";
const Details: React.FC = () => {
  const { backtest: backtestId } = useParams();
  const backtest = useFindBacktest(backtestId ? +backtestId : undefined);

  const loading = (
    <div className="flex h-28 w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-darkBlue3">
      <Loader />
    </div>
  );

  if (backtest.data?.data == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <section id="result" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header={backtest.data?.data.name} description="Result Details" />
        {backtest.isLoading && loading}
        {backtest.data?.data && <ResultDetails data={backtest.data?.data} />}
        <BackButton />
      </section>
    </Layout>
  );
};

export default Details;
