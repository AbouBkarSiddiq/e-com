import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../redux/actions/adminActions'


const AllCategories = () => {
  const dispatch = useDispatch()
  let categories = useSelector((state) => state.adminReducer.categories);
  useEffect(() => {
    if (!categories?.length) {
      dispatch(getAllCategories());
      console.log('Rendering useEffect...')
    }
    console.log('Data of fetched categories:', categories)
  }, [categories])

    return (
        <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Categories List</label>
      <table class="table">
        <thead>
          <tr scope="row">
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {
          categories.map((category) => (
            <tbody>
              <tr scope="row">
                <td>{category.title}</td>
                <td>{category.description}</td>
                {/* <td>{category.image? <img src={category.image} style={{width:'100px', height:'100px'}}/> : null}</td> */}
                <td><img src={category.image} style={{width:'100px', height:'100px'}}/></td>
                <td>
                <Link to={`/category/${category._id}`}>
                  <button className="btn btn-danger" 
                  style={{ marginRight: '20px' }} 
                  onClick={() => {
                    // setDeleteModal(true)
                    // setUserId(user._id)
                  }} 
                //   onClick={handleDelete}
                  data-toggle="modal" 
                  data-target="#exampleModal">Delete</button>
                </Link>
                  <button className="btn btn-primary px-4">Edit</button>
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
      {/* {deleteModal ? <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              The user will be deleted permanently
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDeleteModal(false)}>No</button>
              <button type="button" class="btn btn-primary" onClick={handleDelete}>Yes</button>
            </div>
          </div>
        </div>
      </div>
        : null} */}
    </div>
    )
}

export default AllCategories
