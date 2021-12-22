import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../redux/actions/adminActions';

const AddProduct = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([{}])
  const [preview, setPreview] = useState('')
  const res = useSelector((state) => state.adminReducer.product);
  // console.log('res from product action:', res)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const history = useHistory()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    for (let i = 0 ; i < image.length ; i++) {
      formData.append("image", image[i]);
    }
    // formData.append('image', image);
    dispatch(addProduct(formData, history))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }
    setTitle('')
    setImage(null)
    setPrice('')
    setDescription('')
  }

  const addImage = () => {
    console.log('This function works')
    setImage([...image, {}])
  }
   
  const handleFileChange = (key, event) => {
    const files = [...image]
    files[key] = event.target.files[0]
    if (files) {
      console.log('List of images:', files) 
      setImage(files)
    }
  }

  const removeItem = index => {
    const oldImages = [...image];
    oldImages.splice(index, 1);
    setImage(oldImages)
  }

  return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Add Product</label>
      <hr />
      <form className="form-group col-lg-6 px-2" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            name="title"
            class="form-control"
            placeholder="Title"
            required
            className="form-control form-control-user"
            // id="exampleFirstName" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Price</label>
          <input
            type="number"
            name="price"
            class="form-control"
            placeholder="Price"
            required
            className="form-control form-control-user"
            // id="exampleFirstName" 
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        
        {image?.length ? image.map((el, index) => <div className="form-group small-section upload-file" style={{ border: '1px solid', widht: '100%', height: '20%', borderRadius: '10px', outline: 'none', borderColor: 'white', }} >
        <label for="exampleFormControlInput1">Image</label>
        <span className="add-more-btn my-1" onClick={() => removeItem(index)}>Remove -</span>
          <input
            type="file"
            name={`image`}
            // value={el}
            accept="image/x-png,image/jpg,image/jpeg, image/png,"
            onChange={(event) => handleFileChange(index, event)}
            className="form-control"
            placeholder="Upload Image"
          />
        </div>) : null}
        <span onClick={addImage} className="add-more-btn" style={{cursor: 'pointer', marginBottom: '100px' }}>Add more +</span>
        
        {/* <div class="form-group">
        <input
            type="file"
            multiple
            name="image"
            accept="image/x-png,image/jpg,image/jpeg, image/png,"
            onChange={handleFileChange}
        />
        </div> */}
        {/* <button className="btn btn-primary" onClick={addMore}>Add more+</button> */}

        <button type="submit" className="btn btn-primary" style={{ marginLeft: '0px', marginTop: '50px'}}>
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct