type infoProps = {
  title: string;
  description: string;
};

const Info: React.FC<infoProps> = ({ title, description }) => {
  return (
    <div className="grid grid-cols-2 items-center space-y-1 duration-200 hover:underline hover:underline-offset-4">
      <div className="w-[10rem] rounded-xl bg-gray-300 p-1 px-3 text-sm dark:bg-darkBlue1">
        {title}
      </div>
      <div className="flex items-center ">
        {description.toLowerCase() == "n/a" ? "Not Available" : description}
      </div>
    </div>
  );
};

export default Info;
