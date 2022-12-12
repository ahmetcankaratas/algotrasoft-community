import Collabration from "../components/Collabration";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layuot";
import Particle from "../components/Particle";
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
