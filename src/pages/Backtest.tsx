import { useParams, useNavigate } from "react-router";
import useFindBacktest from "../hooks/useFindBacktest";
import Loader from "../components/Loader";
import Layout from "../components/Layout/Layuot";
import Cover from "../components/Cover";
import BarGraph from "../components/BarGraph";
const Backtest: React.FC = () => {
  const navigate = useNavigate();

  const { backtest: backtestId } = useParams();

  const backtest = useFindBacktest(backtestId ? +backtestId : undefined);

  const goBack = () => navigate(-1);

  const loading = (
    <div className="flex h-28 w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-darkBlue3">
      <Loader />
    </div>
  );

  console.log(backtest.data?.data);
  return (
    <Layout>
      <section id="result" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header={backtest.data?.data.name} description="Result Details" />
        {backtest.isLoading && loading}
        {backtest.data?.data && (
          <div className="container mx-auto w-full px-6 md:max-w-2xl">
            <div className="flex flex-col justify-between space-y-4 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3">
              <BarGraph
                description="1 Month Result"
                value={backtest.data?.data.return_monthly_1}
              />
              <BarGraph
                description="3 Month Result"
                value={backtest.data?.data.return_monthly_3}
              />
              <BarGraph
                description="6 Month Result"
                value={backtest.data?.data.return_monthly_6}
              />
              <BarGraph
                description="1 Year Result"
                value={backtest.data?.data.return_yearly_1}
              />
            </div>
            <div
              role="button"
              className="text-md mt-5 w-20 cursor-pointer rounded-xl bg-gray-100 p-3 text-center hover:bg-darkCyan dark:hover:bg-accentCyan dark:bg-darkBlue3 md:text-lg"
              onClick={goBack}
            >
              Back
            </div>
          </div>
        )}
        <h1></h1>
      </section>
    </Layout>
  );
};

export default Backtest;
