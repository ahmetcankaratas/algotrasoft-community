import { useNavigate } from "react-router";
import BarGraph from "./BarChart";
import {BacktestResponseResult} from "../../@types/api";

const Details: React.FC<BacktestResponseResult> = ({data}) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="container mx-auto mt-[-5rem] w-full px-6 md:max-w-2xl">
      <div className="flex flex-col justify-between space-y-4 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3">
        <BarGraph
          description="1 Month Result"
          value={data.return_monthly_1}
        />
        <BarGraph
          description="3 Month Result"
          value={data.return_monthly_3}
        />
        <BarGraph
          description="6 Month Result"
          value={data.return_monthly_6}
        />
        <BarGraph
          description="1 Year Result"
          value={data.return_yearly_1}
        />
      </div>
      <button
        className="text-md mt-2 w-20 cursor-pointer rounded-xl bg-gray-100 p-3 text-center hover:bg-darkCyan dark:bg-darkBlue3 dark:hover:bg-accentCyan md:text-lg"
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
};

export default Details;
