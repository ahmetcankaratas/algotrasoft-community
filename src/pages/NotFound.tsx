import Layout from "../components/layout/Layout";
import Cover from "../components/UI/Cover";
import BackButton from "../components/UI/BackButton";
const NotFound: React.FC = () => {
    return (
      <Layout>
        <section id="result" className="bg-gray-50 dark:bg-darkBlue">
          <Cover header="Not Found" description="" />
          <BackButton />
        </section>
      </Layout>
    );
  

};

export default NotFound;
