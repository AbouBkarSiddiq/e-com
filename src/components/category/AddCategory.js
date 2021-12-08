import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from '../../redux/actions/adminActions';

const AddCategory = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState()
    const [description, setDescription] = useState('')
    const [preview, setPreview] = useState('')
    const res = useSelector((state) => state.adminReducer.category);
    console.log('res from category action:', res)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);
        dispatch(addCategory(formData))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
        }
        setTitle('')
        setImage(null)
        setDescription('')
    }

    const handleFileChange = (e) => {
        let files = e.target.files[0]
        if (files) {
            console.log('Image at create:', files)
            setImage(files)
            // setPreview(URL.createObjectURL(e.target.files[0]))
        }
    }


    return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Add Category</label>
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
            name="image"
            accept="image/x-png,image/jpg,image/jpeg, image/png,"
            onChange={handleFileChange}

        />
        </div>
        {/* {
            image ? <div>
                <img style={{ width: '300px', height: '300px' }} src={preview} alt="category" />
            </div> : null
        } */}

        {/* <div>
          <select
            name="role"
            className="form-control"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div> */}
        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          Add Category
        </button>
      </form>
    </div>
    )
}

export default AddCategory
