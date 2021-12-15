import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from '../../redux/actions/adminActions';
import { getProductDataToUpdate } from '../../redux/actions/adminActions'
import Loader from 'react-loader-spinner';
import { FaTrashAlt } from 'react-icons/fa';

const EditProduct = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const [image, setImage] = useState([{}])
  const [allImages, setAllImages] = useState([{}])
  const [selectedImages, setSelectedImages] = useState([])
  const productData = useSelector((state) => state.adminReducer.product);
  const isFetching = useSelector((state) => state.adminReducer.isFetching)

  // console.log('res from product action:', productData)
  const handleChange = ({ target }) => {
    console.log('Target:', target)
    const { name, value } = target;
    setProduct({
      ...product, [name]: value,
    });
  };


  const handleFileChange = (key, event) => {
    const files = [...image]
    files[key] = event.target.files[0]
    if (files) {
      setImage(files)
      // console.log('Product dot image:', ...product.image)
      // console.log('image files spread:', ...image)
      setAllImages([...(product.image), ...files])
      console.log('All images combined:', [...(product.image), ...files])

      const fileArray = Array.from(files).map(file => URL.createObjectURL(file))
      // console.log('File arry of new images:', fileArray)
      setSelectedImages(fileArray)
      Array.from(event.target.files[0]).map(file => URL.revokeObjectURL(file))
      // const mappedFiles = files.map((file) => ({
      //   ...file,
      //   preview: URL.createObjectURL(file),
      // }));
      // setPreview(mappedFiles);
      // setImage(URL.createObjectURL(files))
      // setAllImages(Object.assign(product.image, ...files));
    }
  }

  const addImage = () => {
    console.log('This function works')
    setImage([...image, {}])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price)
    formData.append('description', product.description);
    // formData.append('image', product.image);
    for (let i = 0; i < allImages.length; i++) {
      formData.append("image", allImages[i]);
    }
    dispatch(updateProduct(id, formData))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }
    setProduct({})
  }

  useEffect(() => {
    setSelectedImages(selectedImages)
  }, [selectedImages])

  useEffect(() => {
    setProduct(productData)
  }, [productData])

  useEffect(() => {
    if (id) {
      setProduct({})
      dispatch(getProductDataToUpdate(id))
    }
  }, [])

  const handleDeleteImage = (index, e) => {
    console.log('Index of clicked image:', index)
    let file = image.splice(index, 1)
    // const newImages = allImages.filter((ele => ele.index !== index))
    setAllImages(file)
    // console.log(setAllImages(newImages))
    // console.log('New Images:', newImages)
    console.log('This function is binded.')
  }

  const handleDeleteImageArray = (index, e, productArray) => {
    console.log('Product Array:', productArray)
    console.log('Index of clicked image:', index)
    // const newArray = productArray.filter((ele => ele.index !== index))
    // console.log('New Array:', newArray)
    productArray.splice(index, 1);
    setImage(productArray)
    console.log(setAllImages(productArray));
    console.log('This function is works.')
  }

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (<span className="mx-2 my-2" key={index}>
        <div>
          <FaTrashAlt onClick={(e) => handleDeleteImage(index, e)} className="absolute float-right" style={{cursor: 'pointer'}}/>
        </div>
        <img src={photo} key={photo} style={{ width: '200px', height: '200px' }} className="relative" />
      </span>
      )
    })
  }

  return (
    <div>
      {isFetching ? (<div className="d-flex justify-content-center align-items-center">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
        // <div>Loading...</div>
      ) : (<div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
        <label className="pl-2 mt-4">Edit Product</label>
        <hr />
        <form className="form-group col-lg-12 px-2" onSubmit={handleSubmit}>
          <div class="form-group">
            {/* <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>User Name</label> */}
            <input
              type="text"
              name="title"
              class="form-control col-lg-6"
              placeholder="Title"
              required
              // id="exampleFirstName" 
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleFormControlInput1" style={{ textAlign: 'left' }}>User Name</label> */}
            <input
              type="number"
              name="price"
              class="form-control col-lg-6"
              placeholder="Price"
              required
              // id="exampleFirstName" 
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleFormControlInput1">Email address</label> */}
            <input
              type="text"
              name="description"
              class="form-control col-lg-6"
              placeholder="Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          {image?.length ? image.map((el, index) => <div className="form-group col-lg-6" style={{ border: '1px solid', widht: '100%', height: '20%', background: '', borderRadius: '2px', outline: 'none', borderColor: 'white', }} >
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
          <span onClick={addImage} className="btn btn-primary add-more-btn" style={{ cursor: 'pointer', marginBottom: '100px' }}>Add more +</span>

          <div className="d-flex col-lg-12 flex-wrap justify-content-">
            {
              product?.image?.map((ele, index) =>
                <span className="mx-2" key={index}>
                  <div>
                    <FaTrashAlt onClick={(e) => handleDeleteImageArray(index, e, product.image)} className="absolute float-right" style={{ cursor: 'pointer' }} />
                  </div>
                  <img style={{ width: '200px', height: '200px' }} src={ele} alt="" className="relative" />
                </span>)
            }
            {
              renderPhotos(selectedImages)
            }
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
            Update Product
          </button>
        </form>
      </div>
      )}
    </div>
  )
}

export default EditProduct
