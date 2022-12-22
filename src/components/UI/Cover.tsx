type CoverProps = {
    header: string | undefined;
    description: string | undefined;
}

const Cover: React.FC<CoverProps> = ({header,description}) => {
    return(
        <div className="flex justify-center items-center w-full h-96 dark:bg-scanner-cover bg-scanner-cover-light bg-center bg-no-repeat">
        <div className="text-center space-y-5">
        <h1 className="bold text-4xl md:text-6xl mx-7">{header}</h1>
        <p className="px-5 text-lg font-bold md:text-xl text-darkCyan dark:">{description}</p>
        </div>
    </div>
    )
}

export default Cover;