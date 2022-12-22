const Info: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      <div className="container mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
        <p className="text-md text-justify md:text-lg">
          Please do not hesitate to contact us, if you want to learn more about
          simple trading strategies or more complicated statistical arbitrage of
          stocks. Regardless of whether you are a novice to trading or a veteran
          Quant, all are welcomed to be part of the society.
        </p>
        <p className="text-md text-justify md:text-lg">
          {" "}
          <img
            src="./assets/images/icon-email.svg"
            alt=""
            className="scale-10 mr-2 inline pb-1 invert dark:invert-0"
          />
          Email: algotrasoft@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Info;
