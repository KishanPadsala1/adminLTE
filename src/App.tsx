import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      {/* Preloader */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div>
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
