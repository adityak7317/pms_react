import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Goals from "./components/Goals/Goals";
import Peoples from "./components/Peoples/Peoples";
import Feedback from "./components/Feedback/Feedback";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
