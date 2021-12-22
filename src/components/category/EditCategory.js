import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from '../../redux/actions/adminActions';
import { getCategoryDataToUpdate } from '../../redux/actions/adminActions'
import Loader from 'react-loader-spinner';
import '../../assets/css/common.css'

const EditCategory = () => {
  const history = useHistory()
  const { id } = useParams();
  const dispatch = useDispatch()
  const [category, setCategory] = useState({})
  const [subCategory, setSubCategory] = useState([{ title: '', description: '' }])
  const [preview, setPreview] = useState('')
  const categoryData = useSelector((state) => state.adminReducer.category);
  const isFetching = useSelector((state) => state.adminReducer.isFetching)

  // console.log('res from category action:', categoryData)

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
        ...category, image: files,
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
    formData.append('subCategory', JSON.stringify(subCategory))
    dispatch(updateCategory(id, formData, history))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
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
  const addSubCategoryValue = (key, event) => {
    const subCategoryValue = [...subCategory]
    subCategoryValue[key][event.target.name] = event.target.value
    setSubCategory(subCategoryValue)
  }

  const addMore = () => {
    const add = {
      title: '',
      description: '',
      // image: ''
    }
    console.log('This function works')
    setSubCategory([...subCategory, add])
  }

  const removeItem = index => {
    const oldICategory = [...subCategory];
    oldICategory.splice(index, 1);
    setSubCategory(oldICategory)
  }

  useEffect(() => {
    setCategory(categoryData)
    console.log("Sub Category Data:", categoryData.subCategory)
    setSubCategory(categoryData.subCategory)
  }, [categoryData])

  useEffect(() => {
    if (id) {
      setCategory({})
      dispatch(getCategoryDataToUpdate(id))
    }
  }, [])

  return (
    <div>
      {isFetching ? (<div className="d-flex justify-content-center align-items-center">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>) : (<div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
        <label className="pl-2 mt-4">Edit Category</label>
        <hr />
        <form className="form-group px-2" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="Title"
              required
              className="form-control form-control-user col-lg-6"
              // id="exampleFirstName" 
              value={category.title}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>Description</label>
            <input
              type="text"
              name="description"
              class="form-control"
              placeholder="Description"
              required
              className="form-control form-control-user col-lg-6"
              // id="exampleFirstName" 
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
          {subCategory ? subCategory.map((item, key) => <div className="" style={{ backgroundColor: 'white', padding: '0px' }}>
            <div className="mt-1"><div>Sub Category {key + 1}
            <span className="my-1 add-more-btn" onClick={() => removeItem(key)}>Remove -</span>
            </div>
            <div className="col-lg-12 col-md-12 d-flex flex-column flex-lg-row full-width justify-content-between mt-1 border py-2">
              <div className="col-lg-6">
                <label className="">Title</label>
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
                <label>Description</label>
                {/* <label for="exampleFormControlInput1">Email address</label> */}
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
            </div>
          </div>) : null}
          <span onClick={addMore} className="add-more-btn" style={{ marginTop: '12px', marginLeft: '12px' }}>Add More +</span>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
            Update Category
          </button>
        </form>
      </div>
      )}
    </div>
  )
}

export default EditCategory