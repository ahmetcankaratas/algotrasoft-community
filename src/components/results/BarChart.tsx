type barProps = {
    description: string;
    value: number;
}

const BarChart:React.FC<barProps>  = ({description, value}) => {
    const barColor = value < 0 ? "bg-red-500" : "bg-darkCyan";

    return(
        <div className="grid grid-cols-2 items-center space-y-1 hover:underline hover:underline-offset-4 duration-200">
        <div className="text-sm bg-gray-300 dark:bg-darkBlue1 p-1 px-3 rounded-xl w-[10rem]">{description}</div>
        <div className="flex items-center ">
          <div className="h-4 w-full bg-gray-200 p-1 rounded-xl">
              <div
                style={{
                  width: `${Math.min(
                    100,
                    value < 0 ? value * -1 : value
                  )}%`,
                }}
                className={`h-full ${barColor} p-1 rounded-xl`}
              ></div>
          </div>
          <div className="w-8 text-right text-sm ml-2">
            {value.toFixed(0)}%
          </div>
        </div>
      </div>
    )
}

export default BarChart;