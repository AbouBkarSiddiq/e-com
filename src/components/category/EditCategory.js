import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from '../../redux/actions/adminActions'; 
import { getCategoryDataToUpdate } from '../../redux/actions/adminActions'

const EditCategory = () => {
    const history = useHistory()
    const { id } = useParams();
    const dispatch = useDispatch()
    const [category, setCategory] = useState({})
    const [preview, setPreview] = useState('')
    const res = useSelector((state) => state.adminReducer.category);
    // console.log('res from category action:', res)

    const handleChange = ({ target }) => {
        console.log('Target:', target)
        const { name, value } = target;
        setCategory({
            ...category, [name]: value,
        });
    };

    const handleFileChange = (e) => {
        let files = e.target.files[0]
        if (files) {
            console.log('Files', files)
            // setImage(files)
            // console.log("Try to update image::::", setImage(files))
            setCategory({
                ...category, image : files,
            });
            setPreview(URL.createObjectURL(e.target.files[0]))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', category.title);
        formData.append('description', category.description);
        formData.append('image', category.image);
        dispatch(updateCategory(id, formData))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
        }
        // setTitle('')
        // setImage(null)
        // setDescription('')
    }

    // const handleFileChange = (e) => {
    //     let files = e.target.files[0]
    //     if (files) {
    //         console.log('Image at create:', files)
    //         setImage(files)
    //         // setPreview(URL.createObjectURL(e.target.files[0]))
    //     }
    // }

    useEffect(() => {
        dispatch(getCategoryDataToUpdate(id))
        setCategory(res)
    }, [])

    return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Edit Category</label>
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
            value={category.title}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          {/* <label for="exampleFormControlInput1">Email address</label> */}
          <input
            type="text"
            name="description"
            class="form-control"
            placeholder="Description"
            value={category.description}
            onChange={handleChange}
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
        {
            preview ? <div>
                <img style={{ width: '300px', height: '300px' }} src={preview} alt="todo" />
                    </div> : !preview ? <div>
                <img style={{ width: '300px', height: '300px' }} src={category.image} alt="todo" />
            </div> : null
        }

        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          Update Category
        </button>
      </form>
    </div>
    )
}

export default EditCategory
