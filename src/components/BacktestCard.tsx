import Loader from "./Loader";
import { Link } from "react-router-dom";
import useFindBacktest from "../hooks/useFindBacktest";

type BacktestCardProps = {
    id: number;
}

const BacktestCard: React.FC<BacktestCardProps> = ({id}) => {

    // in the firebase database, the id's start at 1, but the array index starts at 0 
    const backtest = useFindBacktest(id-1);

    if(backtest.isLoading) {
        return <li className="w-full h-28 bg-gray-100 dark:bg-darkBlue3 rounded-lg p-4 flex justify-center items-center">
            <Loader />
        </li>
    }

    if(backtest.data?.data.id === undefined) {
        return null;
    }

    return <li className="flex flex-row justify-between p-10 rounded-lg bg-gray-100 dark:bg-darkBlue3"><div className="flex flex-col space-y-3">
        <Link to={`/scanner/${id-1}`} className="text-2xl font-bold">{backtest.data?.data.name}</Link>
        <h4 className="text-xl">{backtest.data?.data.symbol}</h4>
        </div>
        <div className="flex flex-col space-y-3">
        <h3 className="text-2xl font-bold">APY</h3>
        <h4 className="text-xl">%{backtest.data?.data.return_yearly_1.toFixed(0)}</h4>
        </div>
        </li>
}

export default BacktestCard;