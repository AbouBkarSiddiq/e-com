import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../redux/actions/adminActions'
import { deleteCategory } from '../../redux/actions/adminActions'
import Loader from 'react-loader-spinner';


const AllCategories = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const [categoryId, setCategoryId] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  let categories = useSelector((state) => state.adminReducer.categories);
  const isFetching = useSelector((state) => state.adminReducer.isFetching)

  useEffect(() => {
    if (!categories.length) {
      dispatch(getAllCategories());
      console.log('Rendering useEffect...')
      console.log('Data of fetched categories:', categories)
    }
  }, [categories])

  const handleEdit = () => {
    history.push('category')
    // history.push({
    //   pathname: '/category',
    //   state: categoryId // your data array of objects
    // })
    // setCategoryId(category._id)
    // dispatch(getCategoryDataToUpdate(categoryId))
    // setDeleteModal(false)
  }

  const handleDelete = () => {
    // setUserId(user._id)
    dispatch(deleteCategory(categoryId))
    setDeleteModal(false)
  }

  return (
    <div>
    {isFetching? (<div className="d-flex justify-content-center align-items-center">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>
        </div>
    ) : (<div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
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
              <td><img src={category.image} style={{ width: '100px', height: '100px' }} /></td>
              <td>
                <Link to={`/all-categories`}>
                  <button className="btn btn-danger"
                    style={{ marginRight: '20px' }}
                    onClick={() => {
                      setDeleteModal(true)
                      setCategoryId(category._id)
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal">Delete</button>
                </Link>
                <Link to={`category/${category._id}`}>
                  <button className="btn btn-primary px-4" onClick={handleEdit}>Edit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        ))
      }
    </table>
    </div>
    )}
    
      {deleteModal ? <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete?</h5>
              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setDeleteModal(false)}></button>
            </div>
            <div class="modal-body">
              The category will be deleted permanently
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setDeleteModal(false)}>No</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" onClick={handleDelete}>Yes</button>
            </div>
          </div>
        </div>
      </div>
        : null}
    </div>
  )
}

export default AllCategories
