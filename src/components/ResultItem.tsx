import Loader from "./Loader";
import { Link } from "react-router-dom";
import useFindBacktest from "../hooks/useFindBacktest";

type BacktestCardProps = {
  id: number;
};

const BacktestCard: React.FC<BacktestCardProps> = ({ id }) => {
  // in the firebase database, the id's start at 1, but the array index starts at 0
  const backtest = useFindBacktest(id - 1);

  if (backtest.isLoading) {
    return (
      <li className="mx-auto flex h-28 w-10/12 items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-darkBlue3">
        <Loader />
      </li>
    );
  }

  if (backtest.data?.data.id === undefined) {
    return null;
  }

  return (
    <li className="mx-auto w-10/12">
      <Link
        to={`/scanner/${id - 1}`}
        className="pointer flex flex-row justify-between rounded-lg bg-gray-100 p-10 duration-200 hover:scale-105 dark:bg-darkBlue3"
      >
        <div className="group flex flex-col space-y-3">
          <Link
            to={`/scanner/${id - 1}`}
            className="text-lg font-bold md:text-2xl"
          >
            {backtest.data?.data.name}
          </Link>
          <h4 className="md:text-md text-sm">{backtest.data?.data.symbol}</h4>
        </div>
        <div className="group flex flex-col space-y-3">
          <div className="md:text-md rounded-xl bg-gray-300 p-1 px-3 text-sm dark:bg-darkBlue1">
            yearly apy
          </div>
          <h4
            className={
              (backtest.data?.data.return_yearly_1 < 0
                ? "text-red-500 "
                : "text-darkCyan ") + "text-md md:text-l text-center font-bold"
            }
          >
            <span className="text-lg md:text-xl ">%</span>{" "}
            {backtest.data?.data.return_yearly_1.toFixed(0)}
          </h4>
        </div>
      </Link>
    </li>
  );
};

export default BacktestCard;
