import React from "react";

export default function Goals() {
  return (
<div>
   <div>
   <nav  className="navbar navbar-light bg" style={{color: '',marginTop:'10px',backgroundColor:'white'}} >
    <div className="container-fluid" >
      <h4 >SET YOUR GOALS HERE</h4>
      <div className="d-flex">
        <button type="button" className="btn btn-info btn-lg">Add Goal</button>
      </div>
    </div>
  </nav>
  <table className="table mt-4" style={{marginLeft: '30px', width: '1150px'}}>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Goals</th>
        <th scope="col">Discription</th>
        <th scope="col">start Date</th>
        <th scope="col">End Date</th>
        <th scope="col">Action</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Get AWS certified </td>
        <td>aaaaaaaaaaaaa</td>
        <td>1/1/21 </td>
        <td>2/7/21 </td>
        <td>
          <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Delete</button>
        </td>
        <td />
      </tr> 
    </tbody>
  </table> 
  <div className="modal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"><strong> Add your GOALS</strong></h4>
          <button style={{marginLeft: '300px'}} type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Goal</label>
              <input type="goal" className="form-control" name="Goal" id="exampleFormControlInput1" placeholder="Goal name" />
              <span className="text-danger">
                <p> goal required</p>
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Discription</label>
              <textarea className="form-control" name="Discription" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
              <div className="col-sm-10">
                <input type="date" name="startDate" className="form-control" id="startDate" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
              <div className="col-sm-10">
                <input type="date" name="EndDate" className="form-control" id="endDate" />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">       
          <button type="button" className="btn btn-default">Close</button>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
