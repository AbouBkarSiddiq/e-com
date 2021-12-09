import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../redux/actions/adminActions';

const AddProduct = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState([])
    const [preview, setPreview] = useState('')
    const res = useSelector((state) => state.adminReducer.product);
    // console.log('res from product action:', res)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);
        dispatch(addProduct(formData))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
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

    const handleFileChange = (e) => {
        let files = e.target.files
        if (files) {
            console.log('Image at create:', files)
            setImage(...image, [...e.target.files])
            // setPreview(URL.createObjectURL(e.target.files[0]))
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
        <div class="form-group">
        <input
            type="file"
            multiple
            name="image"
            accept="image/x-png,image/jpg,image/jpeg, image/png,"
            onChange={handleFileChange}

        />
        
        {/* <button className="btn btn-primary" onClick={addMore}>Add more+</button> */}
        </div>
        {/* {
            image ? <div>
                <img style={{ width: '300px', height: '300px' }} src={preview} alt="category" />
            </div> : null
        } */}

        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          Add Product
        </button>
      </form>
    </div>
    )
}

export default AddProduct