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
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Goals from "./Components/Goals/Goals";
import Peoples from "./Components/Peoples/Peoples";
import Feedback from "./Components/Feedback/Feedback";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Approved from "../src/Components/Goals/D-Goals/Approved";
import CompletedByManager from "../src/Components/Goals/D-Goals/CompletedByManager";
import CompletedByMe from "../src/Components/Goals/D-Goals/CompletedByMe";
import Rejected from "../src/Components/Goals/D-Goals/Rejected";
import Total from "../src/Components/Goals/D-Goals/Total";
import YetToApproved from "../src/Components/Goals/D-Goals/YetToApproved";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/goals" element={<Goals />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/peoples" element={<Peoples />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Approved" element={<Approved />}></Route>
          <Route
            path="/CompletedByManager"
            element={<CompletedByManager />}
          ></Route>
          <Route path="/CompletedByMe" element={<CompletedByMe />}></Route>
          <Route path="/Rejected" element={<Rejected />}></Route>
          <Route path="/Total" element={<Total />}></Route>
          <Route path="/YetToApproved" element={<YetToApproved />}></Route>
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
