import React from 'react'
import { Link , Outlet} from 'react-router-dom';
import AllPeople from './AllPeople/AllPeople';
import APColVeiw from './AllPeople/ColVeiw/APColVeiw';
import MyTeam from './MyTeam/MyTeam';

function Peoples() {
    return (
   
        <div style={{margin:"25px"}}>
          <Link  to = "/Peoples/apcolveiw">People</Link>&nbsp; | &nbsp;
          <Link to = "/Peoples/mtcardveiw">MyTeam</Link>
          <Outlet/>
      </div>
      
    )
}

export default Peoples