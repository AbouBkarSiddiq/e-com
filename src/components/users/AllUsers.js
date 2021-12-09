import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/actions/adminActions'
import { deleteUser } from '../../redux/actions/adminActions';
import Layout from '../layout/Layout';

const AllUsers = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [deleteModal, setDeleteModal] = useState(false)
  const [userId, setUserId] = useState()
  // const [users, setUsers] = useState()
  let users = useSelector((state) => state.adminReducer.users);

  useEffect(() => {
    if(!users.length){
      dispatch(getAllUsers());
      console.log('Rendering useEffect...')
    }
      
    // console.log('Data of fetched users:', users)
  }, [users])

  const handleDelete = () => {
    dispatch(deleteUser(userId))
    setDeleteModal(false)
  }

  return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Users List</label>
      <table class="table">
        <thead>
          <tr scope="row">
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {
          users.map((user) => (
            <tbody>
              <tr scope="row">
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                <Link to={`/all-users`}>
                  <button className="btn btn-danger" 
                  style={{ marginRight: '20px' }} 
                  onClick={() => {
                    setDeleteModal(true)
                    setUserId(user._id)
                  }} 
                  // onClick={handleDelete}
                  data-toggle="modal" 
                  data-bs-dismiss="modal"
                  data-target="#exampleModal">Delete</button>
                </Link>
                  <button className="btn btn-primary px-4">Edit</button>
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
      {deleteModal ? <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="false"></button>
            </div>
            <div class="modal-body">
              The user will be deleted permanently
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" data-backdrop="false" onClick={() => setDeleteModal(false)}>No</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="false" onClick={handleDelete}>Yes</button>
            </div>
          </div>
        </div>
      </div>
        : 
      null}
    </div>
  )
}

export default AllUsers