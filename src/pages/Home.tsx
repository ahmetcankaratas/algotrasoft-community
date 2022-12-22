import About from "../components/About";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import Particle from "../components/hero/Particle";
import Work from "../components/Work";
const Home: React.FC = () => {
  return (
    <Layout>
      <Particle />
      <Hero />
      <About />
      <Work />
    </Layout>
  );
};

export default Home;
