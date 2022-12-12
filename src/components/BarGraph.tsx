type grapProps = {
    description: string;
    value: number;
}

const BarGraph:React.FC<grapProps>  = ({description, value}) => {
    const barColor = value < 0 ? "bg-red-500" : "bg-darkCyan";

    return(
        <div className="grid grid-cols-2 items-center space-y-1">
        <div className="">{description} </div>
        <div className="flex items-center ">
          <div className="h-3 w-full bg-gray-200">
              <div
                style={{
                  width: `${Math.min(
                    100,
                    value < 0 ? value * -1 : value
                  )}%`,
                }}
                className={`h-full ${barColor}`}
              ></div>
          </div>
          <div className="w-8 text-right text-sm ml-2">
            {value.toFixed(0)}%
          </div>
        </div>
      </div>
    )
}

export default BarGraph;