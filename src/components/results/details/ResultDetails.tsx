import BarGraph from "./BarChart";
import { BacktestResponseResult } from "../../../@types/api";
import Info from "./Info";

const Details: React.FC<BacktestResponseResult> = ({ data }) => {
  return (
    <div className="container mx-auto mt-[-5rem] w-full px-6 md:max-w-2xl">
      <div className="flex flex-col justify-between space-y-4 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3">
        <Info title="Sector" description={data.sector} />
        <Info title="Market" description={data.market} />
        <Info title="Market Cap" description={data.market_cap} />
        <hr />
        <BarGraph description="1 Month Result" value={data.return_monthly_1} />
        <BarGraph description="3 Month Result" value={data.return_monthly_3} />
        <BarGraph description="6 Month Result" value={data.return_monthly_6} />
        <BarGraph description="1 Year Result" value={data.return_yearly_1} />
      </div>
    </div>
  );
};

export default Details;
