import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero/>
    </div>
  );
};

export default Layout;
