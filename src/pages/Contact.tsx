import Layout from "../components/layout/Layout";
import Cover from "../components/UI/Cover";
import Info from "../components/Info";
const Contact: React.FC = () => {
  return (
    <Layout>
      <section id="contact" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header="Contact" description="Join Us" />
        <Info />
      </section>
    </Layout>
  );
};

export default Contact;
