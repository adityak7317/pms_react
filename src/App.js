import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Goals from "./Goals/Goals";
import Peoples from "./Peoples/Peoples";
import Feedback from "./Feedback/Feedback";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/goals" element={<Goals />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/peoples" element={<Peoples />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;

// ReactDOM.render(
//   <BrowserRouter>
//     <App></App>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
