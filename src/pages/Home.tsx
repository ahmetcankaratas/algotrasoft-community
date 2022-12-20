import Collabration from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layuot";
import Particle from "../components/Particle";
import Footer from "../components/Footer";
const Home: React.FC = () => {
  return (
    <Layout>
      <Particle />
      <Hero />
      <Collabration />
    </Layout>
  );
};

export default Home;
