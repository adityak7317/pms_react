import "./Login.css";

function Login() {
  return (
    <div>
      <h3 className="one">LOGIN PAGE</h3>
      <form className="box">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          <a href=""> Forgot password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
