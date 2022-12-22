import Header from "./Header";
import Footer from "./Footer";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`mx-auto min-h-screen w-full py-2 font-opensans dark:bg-darkBlue dark:text-white`}
    >
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
