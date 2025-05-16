import './Login.css'

const Login = () => {
  return (
    <>
      <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: "100"}}>
        <div className="login-box">
          <form>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div 
                      id="emailHelp" className="form-text" style={{color: "#DBBC7F"}}><u>We'll never share your email with anyone else.</u>
                  </div>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button className="btn btn-link">Create an Account</button>
          </form>
        </div>
      </div>

      <div className="overlay">
      </div>

    </>
  );
}

export default Login