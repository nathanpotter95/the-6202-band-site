import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import BioPage from "./pages/BioPage";
import SongListPage from "./pages/SongListPage";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            {/* 'exact' to only render this page when the path is exactly that */}
            <Route path="/upcoming/" element={<UpcomingPage />} />
            <Route path="/media/" element={<MediaPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/band-bios/" element={<BioPage />} />
            <Route path="/song-list/" element={<SongListPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
