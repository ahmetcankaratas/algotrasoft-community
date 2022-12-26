import { HashLink as Link } from "react-router-hash-link";

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 bg-white pt-12 dark:bg-darkBlue"
    >
      <div className="container-mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="./assets/images/icon-team.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Grow Together</h3>
            <p className="max-w-md">
              Our members are dedicated to the free exchange of information. By
              educating each other, we improve ourselves, our networks, our
              market positions, and our portfolios.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="./assets/images/icon-coding.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Coding Sessions</h3>
            <p className="max-w-md">
              Join our bi-weekly Sunday coding sessions where you will be
              introduced to mathematical concepts behind algorithmic trading,
              learn basic trading strategies, and how to implement them in code.
            </p>
          </div>
        </div>

        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="./assets/images/icon-event.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Events</h3>
            <p className="max-w-md">
              Members offering free events to other members so that all are
              encouraged to participate. By supplying the industry with
              webinars, training materials, white papers, and other information,
              we can demonstrate the extent to which our intelligence is
              competitive.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="./assets/images/icon-search.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Scanner</h3>
            <p className="max-w-md">
              Our scanner is a tool that allows you to scan the market for best
              algorithmic strategtic results. You can then download the code and
              run it on your own machine. You can also use the code as a
              starting point for your own algorithmic trading strategy. To see
              the scanner in action,{" "}
              <Link
                to="/scanner#scanner"
                className="border-b border-accentCyan text-accentCyan"
              >
                Click
                <img
                  src="./assets/images/icon-arrow.svg"
                  alt=""
                  className="ml-2 inline pb-1"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
