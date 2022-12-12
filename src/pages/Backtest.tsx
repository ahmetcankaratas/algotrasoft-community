import { useParams } from "react-router-dom"
import useFindBacktest from "../hooks/useFindBacktest"

const Backtest: React.FC = () => {
    const { backtest: backtestId } = useParams()

    const backtest = useFindBacktest(backtestId?+backtestId:undefined)

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