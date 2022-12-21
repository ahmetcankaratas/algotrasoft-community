import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layuot";
import Particle from "../components/Particle";
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
