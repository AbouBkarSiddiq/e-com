import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
require('dotenv').config();

const Register = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  const [role, setRole] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { userName, email, role }
    console.log('Data of user at Register...>>>>', data)
    axios.post(`${process.env.REACT_APP_API_URL}user/new`, data)
    // console.log('data of user :', data)
      .then((response) => {
        console.log('Data sent successfully.', response)
        console.log('User registration successful')
      }).catch (err => {console.log(err)})
  }

  return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Add User</label>
      <hr />
      <form className="form-group col-lg-6 px-2" onSubmit={handleSubmit}>
        <div class="form-group">
          {/* <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>User Name</label> */}
          <input
            type="text"
            name="userName"
            class="form-control"
            placeholder="User Name"
            required
            className="form-control form-control-user"
            // id="exampleFirstName" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div class="form-group">
          {/* <label for="exampleFormControlInput1">Email address</label> */}
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <select
            name="role"
            className="form-control"
            value={role}
            // style={{ width: '100%', padding: '12px', borderRadius: '50px', outline: 'none' }}
            onChange={e => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          Add User
        </button>
      </form>
    </div>
  )
}

export default Register
