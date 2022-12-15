import { Link } from "react-router-dom";

const Collabration = () => {
  return (
    <section
      id="collabration"
      className="relative z-10 bg-white dark:bg-darkBlue1 h-screen flex"
    >
      <div className="container mx-auto flex flex-col items-center px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className="w-2/3 md:w-1/2">
          <img src="./assets/images/network.png" alt="" className="mb-10" />
        </div>

        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">About Us</h4>
            <p className="text-md md:text-lg text-justify">
              The Algorithmic Trading Society of Turkey was founded in March
              2020 with the aim of bringing people together to develop their
              understanding of the application algorithms in a financially
              driven context.
            </p>

            <p className="text-md md:text-lg text-justify">
              We hope to build a community of Algo traders that can help improve
              one another.
            </p>
          </div>

          <div className="blok mt-4">
            <Link to="/scanner" className="border-b border-accentCyan text-accentCyan">
              Scanner
              <img
                src="./assets/images/icon-arrow.svg"
                alt=""
                className="inline pb-1 ml-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collabration;
