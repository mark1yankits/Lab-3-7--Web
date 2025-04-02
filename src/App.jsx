import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderItem/Header";
import Footer from "./components/FooterItem/Footer";
// Pages
import Home from "./pages/Home/Home.jsx"
import Initiative from "./pages/Initiatives/initiative.jsx";
import MyInitiative from "./pages/MyInitiative/MyInitiative.jsx"
import Profile from "./pages/Profile/Profile.jsx";
import InitiativeDetails from "./pages/InitiativeDetails/InitiativeDetails.jsx"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiatives" element={<Initiative />} />
        <Route path="/initiative/:id" element={<InitiativeDetails />} />
        <Route path="/about-us" element={<MyInitiative />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;