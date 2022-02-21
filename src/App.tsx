import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
