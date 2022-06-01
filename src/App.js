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



import MyTeam from "./Components/Peoples/MyTeam/MyTeam";
import MTCardVeiw from "./Components/Peoples/MyTeam/CardVeiw/MTCardVeiw";
import MTColVeiw from "./Components/Peoples/MyTeam/ColVeiw/MTColVeiw";

import AllPeople from "./Components/Peoples/AllPeople/AllPeople";
import APCardVeiw from "./Components/Peoples/AllPeople/CardVeiw/APCardVeiw"
import APColVeiw from "./Components/Peoples/AllPeople/ColVeiw/APColVeiw"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/goals" element={<Goals />}></Route>
          <Route path="/feedback" element={<Feedback />}/>
       
          <Route path="/login" element={<Login />}/>
          <Route path="/Approved" element={<Approved />}/>
          <Route path="/peoples" element={<Peoples />}>   </Route>
          <Route path="/myteam" element={<MyTeam />}>     </Route>
           <Route path="/Peoples/mtcardveiw" element={<MTCardVeiw />}/>
           <Route path="/mtcolveiw" element={<MTColVeiw />}/>
      
            <Route path="/allpeople" element={<AllPeople />}>       </Route>
            <Route path="/apcardveiw" element={<APCardVeiw />}/>
            <Route path="/Peoples/apcolveiw" element={<APColVeiw />}/>
         
        
                   
                   
          <Route
            path="/CompletedByManager"
            element={<CompletedByManager />}
          ></Route>
          <Route path="/CompletedByMe" element={<CompletedByMe />}/>
          <Route path="/Rejected" element={<Rejected />}/>
          <Route path="/Total" element={<Total />}/>
          <Route path="/YetToApproved" element={<YetToApproved />}></Route>
        </Routes>
        
        {/* <Footer /> */}
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
