export type MarketResponseResult = {
    "id":number,
    "symbol":string,
    "name":string,
}

export type MarketResponse = {
    data:{
        stocks: MarketResponseResult[]
    }
}


export type BacktestResponseResult = {
    data:{
        "id":number,
        "symbol":string,
        "name":string,
        "market":string,
        "sector":string,
        "industry":string,
        "market_cap":string,
        "return_monthly_1":number,
        "return_monthly_3":number,
        "return_monthly_6":number,
        "return_yearly_1":number
    }

}

