import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ui/ScrollToTopButton";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen p-4 pt-23">{children}</main>
    <ScrollToTopButton />
    <Footer />
  </>
);

export default Layout;
