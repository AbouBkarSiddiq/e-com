import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/adminActions'
import { deleteProduct} from '../../redux/actions/adminActions'


const AllProducts = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const [productId, setProductId] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  let products = useSelector((state) => state.adminReducer.products);

  console.log('Products response from backend>>>>', products)

  useEffect(() => {
    if(!products.length) {
      dispatch(getAllProducts());
      console.log('Rendering useEffect...')
      console.log('Data of fetched categories:', products)

    }
  },[products])

  const handleEdit = () => {
    history.push('category')
    // setCategoryId(category._id)
    // dispatch(getCategoryDataToUpdate(categoryId))
    // setDeleteModal(false)
  }

  const handleDelete = () => {
    // setUserId(user._id)
    dispatch(deleteProduct(productId))
    setDeleteModal(false)
  }

   return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <h5 className="pl-2 mt-4 font-weight-bold">Products List</h5>
      <table class="table">
        <thead>
          <tr scope="row">
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {
          products.map((product) => (
            <tbody>
              <tr scope="row">
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                {/* <td>{category.image? <img src={category.image} style={{width:'100px', height:'100px'}}/> : null}</td> */}
                <td>{<img src={product?.image} style={{width:'100px', height:'100px'}}/>}</td>
                {/* {
                  product.image?.map(ele => {
                    console.log(ele[0])
                    // <td><img src={ele} style={{width:'10px', height:'10px'}} /></td>
                  })
                } */}
                <td>
                <Link to={`/all-products`}>
                  <button className="btn btn-danger" 
                  style={{ marginRight: '20px' }} 
                  onClick={() => {
                    setDeleteModal(true)
                    setProductId(product._id)
                  }}
                  data-toggle="modal" 
                  data-target="#exampleModal">Delete</button>
                </Link>
                <Link to={`product/${product._id}`}>
                  <button className="btn btn-primary px-4" onClick={handleEdit}>Edit</button>
                </Link>
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
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

export default AllProducts