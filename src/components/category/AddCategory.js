import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from '../../redux/actions/adminActions';

const AddCategory = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [subCategory, setSubCategory] = useState([{ title: '', description: '' }])
  const [preview, setPreview] = useState('')
  const res = useSelector((state) => state.adminReducer.category);
  console.log('res from category action:', res)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sub category data:', subCategory)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('subCategory', JSON.stringify(subCategory))

    // for (let i = 0 ; i < subCategory.length ; i++) {
    //   // formData.append("subCategory", subCategory[i].title);
    //   // formData.append("subCategory", subCategory[i].description);
    //   formData.append("subCategory", subCategory[i]);
    // }

    dispatch(addCategory(formData, history))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
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

  const addSubCategoryValue = (key, event) => {
    const subCategoryValue = [...subCategory]
    subCategoryValue[key][event.target.name] = event.target.value
    setSubCategory(subCategoryValue)
  }
  const removeItem = index => {
    const oldICategory = [...subCategory];
    oldICategory.splice(index, 1);
    setSubCategory(oldICategory)
  }

  // const handleFileChange = (key, event) => {
  //   const files = [...image]
  //   files[key] = event.target.files[0]
  //   if (files) {
  //     console.log('List of images:', files) 
  //     setImage(files)
  //   }
  // }

  // const addSubCategoryImage = (key, event) => {
  //   const subCategoryImage = [...subCategory]
  //   const image = event.target.files[0]
  //   subCategoryImage[key][event.target.name] = image
  //   setSubCategory(subCategoryImage)
  // }

  // const addMoreImages = () => {
  //   console.log('This function works')
  //   const add = {
  //     image: [{}]
  //   }
  //   setSubCategory([...subCategory, add])
  // }

  const addMore = () => {
    const add = {
      title: '',
      description: '',
      // image: ''
    }
    console.log('This function works')
    setSubCategory([...subCategory, add])
  }

  return (
    <div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
      <label className="pl-2 mt-4">Add Category</label>
      <hr />
      <form className="form-group px-2" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            name="title"
            class="form-control"
            placeholder="Title"
            // required
            className="form-control form-control-user col-lg-6"
            // id="exampleFirstName" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Description</label>
          <input
            type="text"
            name="description"
            className="form-control form-control-user col-lg-6"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image</label>
          <input
            type="file"
            name="image"
            className="form-control form-control-user col-lg-6"
            accept="image/x-png,image/jpg,image/jpeg, image/png,"
            onChange={handleFileChange}
          />
        </div>
        {/* {
          image ? <div>
            <img style={{ width: '300px', height: '300px' }} src={preview} alt="category" />
          </div> : null
        } */}
        {subCategory ? subCategory.map((item, key) => <div className="" style={{ backgroundColor: 'white', padding: '0px' }}>
          <div className="mt-1">Sub Category {key + 1}
            <span className="add-more-btn my-1" onClick={() => removeItem(key)}>Remove -</span>
          </div>
          {/* <hr /> */}
          <div className="col-lg-12 col-md-12 d-flex flex-column flex-lg-row full-width justify-content-between mt-1 border py-2">
            <div className="col-lg-6">
              <label for="exampleFormControlInput1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                // required
                className="form-control"
                // id="exampleFirstName" 
                value={item.title}
                onChange={(e) => addSubCategoryValue(key, e)}
              />
            </div>
            <div className="col-lg-6">
              <label for="exampleFormControlInput1">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                value={item.description}
                onChange={(e) => addSubCategoryValue(key, e)}
              />
            </div>
          </div>
          {/* <hr /> */}
        </div>) : null}
        <span onClick={addMore} className="add-more-btn" style={{ marginTop: '12px', marginLeft: '12px' }}>Add More +</span>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '50px' }}>
          Add Category
        </button>
      </form>
    </div>
  )
}

export default AddCategory