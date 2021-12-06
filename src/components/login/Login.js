import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/actions/authActions';

const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [email, setEmail]= useState()
    const [password, setPassword] = useState()

    let userId = localStorage.getItem('userId')
    
    useEffect(() => {
        if(userId) {
            history.push('/admin')
        }
    },)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {email, password}
        dispatch(login(data, history))
        console.log('Data of user at login:::::', data)
    }

    return (
        <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input 
                            type="email" 
                            name="email"
                            required
                            className="form-control form-control-user" 
                            id="exampleInputEmail" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Email Address..." 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                          <input 
                            type="password"
                            name="password"
                            required
                            className="form-control form-control-user" 
                            id="exampleInputPassword" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                          Login
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a onClick={() => history.push('/register')} className="small" style={{ cursor: 'pointer' }}>Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default Login
