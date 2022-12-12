import Loader from "./Loader";
import { Link } from "react-router-dom";
import useFindBacktest from "../hooks/useFindBacktest";

type BacktestCardProps = {
    id: number;
}

const BacktestCard: React.FC<BacktestCardProps> = ({id}) => {

    const backtest = useFindBacktest(id);

    if(backtest.isLoading) {
        return <li className="w-full h-28 bg-gray-100 dark:bg-darkBlue3 rounded-lg p-4 flex justify-center items-center">
            <Loader />
        </li>
    }

    return <li className="flex flex-row justify-between p-10 rounded-lg bg-gray-100 dark:bg-darkBlue3"><div className="flex flex-col space-y-3">
        <Link to={`/${id}`} className="text-2xl font-bold">{backtest.data?.data.name}</Link>
        <h4 className="text-xl">{backtest.data?.data.symbol}</h4>
        </div>
        <div className="flex flex-col space-y-3">
        <h3 className="text-2xl font-bold">APY</h3>
        <h4 className="text-xl">%{backtest.data?.data.return_yearly_1.toFixed(0)}</h4>
        </div>
        </li>
}

export default BacktestCard;