import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../redux/actions/adminActions';

const AddProduct = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([{}])
  const [preview, setPreview] = useState('')
  const res = useSelector((state) => state.adminReducer.product);
  // console.log('res from product action:', res)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    for (let i = 0 ; i < image.length ; i++) {
      formData.append("image", image[i]);
    }
    // formData.append('image', image);
    dispatch(addProduct(formData))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }
    setTitle('')
    setImage(null)
    setPrice('')
    setDescription('')
  }

  // const addMore = () => {
  //   const add = {
  //       image: '',
  //       color: '',
  //       serialnumber: ''
  //   }
  //   this.setState({
  //       variety: [...this.state.variety, add]
  //   })
  // }

  const addImage = () => {
    console.log('This function works')
    setImage([...image, {}])
  }
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  // onColorChange = (key, event) => {
  //   const colors = [...this.state.colors]
  //   colors[key] = event.target.value
  //   this.setState({
  //       colors: colors
  //   })
  // }
   
  const handleFileChange = (key, event) => {
    const files = [...image]
    files[key] = event.target.files[0]
    if (files) {
      console.log('List of images:', files) 
      setImage(files)
    }
  }


  return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Add Product</label>
      <hr />
      <form className="form-group col-lg-6 px-2" onSubmit={handleSubmit}>
        <div class="form-group">
          {/* <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>User Name</label> */}
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
          {/* <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>User Name</label> */}
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
          {/* <label for="exampleFormControlInput1">Email address</label> */}
          <input
            type="text"
            name="description"
            class="form-control"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        {image?.length ? image.map((el, index) => <div className="form-group small-section upload-file" style={{ border: '1px solid', widht: '100%', height: '20%', background: '#C4E5F9', borderRadius: '10px', outline: 'none', borderColor: 'white', }} >
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
        <span onClick={addImage} className="btn btn-primary add-more-btn" style={{cursor: 'pointer', marginBottom: '100px' }}>Add more +</span>
        
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

        <button type="submit" className="btn btn-primary" style={{ marginLeft: '270px', marginTop: '50px'}}>
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct