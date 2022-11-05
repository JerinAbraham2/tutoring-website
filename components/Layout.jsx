import Banner from "./banner/Banner";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Banner />
      {children}
    </>
  );
};

export default Layout;
