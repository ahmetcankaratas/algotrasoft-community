import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import scannerApi from "../api/backtest"

const Backtest: React.FC = () => {
    const { backtest: backtestId } = useParams()

    const backtest = useQuery(["backtest", backtestId], () => {
        if(!backtestId) {
            return null;
        }

        return scannerApi.getBacktest(Number(backtestId))
    })

    if(backtest.isLoading) {
        return <div>loading</div>
    }

    console.log(backtest)

    return (
        <div>
            <h1>{backtest.data?.data.name}</h1>
        </div>
    )
}

export default Backtest