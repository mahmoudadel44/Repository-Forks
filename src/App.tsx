import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
