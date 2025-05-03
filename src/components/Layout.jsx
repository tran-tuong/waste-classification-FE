import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen p-4 pt-23">{children}</main>
    <Footer />
  </>
);

export default Layout;
