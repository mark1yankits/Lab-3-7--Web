import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import Header from "./components/HeaderItem/Header";
import Footer from "./components/FooterItem/Footer";
// Pages
import Home from "./pages/Home/Home.jsx"
import Initiative from "./pages/Initiatives/initiative.jsx";
import MyInitiative from "./pages/MyInitiative/MyInitiative.jsx"
import Profile from "./pages/Profile/Profile.jsx";
import InitiativeDetails from "./pages/InitiativeDetails/InitiativeDetails.jsx"

// login
import Login from "./pages/Login/Login.jsx";

function LayoutWrapper({ children }){
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return(
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}
function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/initiatives" element={<Initiative />} />
          <Route path="/initiative/:id" element={<InitiativeDetails />} />
          <Route path="/about-us" element={<MyInitiative />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/login" element ={<Login />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;