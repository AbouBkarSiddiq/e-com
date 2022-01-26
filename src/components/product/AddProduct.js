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
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const res = useSelector((state) => state.adminReducer.product);
  // console.log('res from product action:', res)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // const history = useHistory()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    // formData.append('size', sizes);
    // formData.append('color', color);
    formData.append('description', description);
    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }
    for (let i = 0; i < size.length; i++) {
      formData.append("size", size[i]);
    }
    for (let i = 0; i < color.length; i++) {
      formData.append("color", color[i]);
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

  const handleSizeChange = (e) => {
    setSize(preState => [...preState, e.target.value])
    // size.push(e.target.value)
    console.log('E.target.value:', size)
  };

  const handleColorChange = (e) => {
    setColor(preState => [...preState, e.target.value])
    // size.push(e.target.value)
    console.log('E.target.value:', color)
  };

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
        <div className="d-flex">
          <div class="form-group">
            <label>Sizes:</label>
            <select
              name="size"
              // multiple
              value={size}
              onChange={handleSizeChange}
            >
              <option >Choose a size:</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">X-Large</option>
            </select>
          </div>
          <div style={{ display: 'flex', marginLeft: '20px' }}>
            {size.map(item => (
              <div style={{ borderColor: '#dce0e6', borderRadius: '20%', marginRight: '5px', alignItems: 'center', textAlign: 'center', border: '1px solid', width: '25px', height: '25px' }}>{item}</div>
            ))}
          </div>
        </div>
        <div className="d-flex">
          <div class="form-group">
            <label>Colors</label>
            <select
              name="color"
              // multiple
              value={color}
              onChange={handleColorChange}
            >
              <option >Choose a color:</option>
              <option value="#0271ad">Blue</option>
              <option value="#51aee0">Sky-Blue</option>
              <option value="#f2eeed">Off-White</option>
              <option value="#db5e8a">Pink</option>
              <option value="#e82e2e">Red</option>
              <option value="#000000">Black</option>
            </select>
          </div>
          <div style={{ display: 'flex', marginLeft: '20px' }}>
            {color.map(item => (
              <div style={{ borderColor: '#dce0e6', borderRadius: '20%', marginRight: '5px', alignItems: 'center', textAlign: 'center', border: '1px solid',height: '25px' }}>{item}</div>
            ))}
          </div>
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
        <span onClick={addImage} className="add-more-btn" style={{ cursor: 'pointer', marginBottom: '100px' }}>Add more +</span>

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

        <button type="submit" className="btn btn-primary" style={{ marginLeft: '0px', marginTop: '50px' }}>
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct