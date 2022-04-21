import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Goals from "./components/Goals";
import Peoples from "./components/Peoples";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/goals" element={<Goals />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/peoples" element={<Peoples />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
