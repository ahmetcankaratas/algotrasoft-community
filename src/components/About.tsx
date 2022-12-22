import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <section
      id="about-us"
      className="relative z-10 flex h-screen bg-gray-50 dark:bg-darkBlue1"
    >
      <div className="container mx-auto flex flex-col items-center px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className="w-2/3 md:w-1/2">
          <img src="./assets/images/network.png" alt="" className="mb-10" />
        </div>

        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">About Us</h4>
            <p className="text-md text-justify md:text-lg">
              The Algorithmic Trading Society of Turkey was founded in March
              2020 with the aim of bringing people together to develop their
              understanding of the application algorithms in a financially
              driven context.
            </p>

            <p className="text-md text-justify md:text-lg">
              We hope to build a community of Algo traders that can help improve
              one another.
            </p>
          </div>

          <div className="blok mt-2">
            <Link
              to="/#work"
              className="border-b border-accentCyan text-accentCyan"
            >
              How We Work
              <img
                src="./assets/images/icon-arrow.svg"
                alt=""
                className="ml-2 inline pb-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
