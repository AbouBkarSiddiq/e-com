import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from '../../redux/actions/adminActions';
import { getProductDataToUpdate } from '../../redux/actions/adminActions'
import Loader from 'react-loader-spinner';

const EditProduct = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const [image, setImage] = useState([{}])
  // const [preview, setPreview] = useState([])
  const productData = useSelector((state) => state.adminReducer.product);
  const isFetching = useSelector((state) => state.adminReducer.isFetching)

  console.log('res from product action:', productData)

  const handleChange = ({ target }) => {
    console.log('Target:', target)
    const { name, value } = target;
    setProduct({
      ...product, [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   let files = e.target.files[0]
  //   if (files) {
  //     console.log('Files', files)
  //     // setImage(files)
  //     // console.log("Try to update image::::", setImage(files))
  //     setProduct({
  //       ...product, image: files,
  //     });
  // setPreview(URL.createObjectURL(e.target.files[0]))
  //   }
  // };

  const handleFileChange = (key, event) => {
    const files = [...image]
    files[key] = event.target.files[0]
    if (files) {
      console.log('List of images:', files)
      setImage(files)
      setImage(image)
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
    formData.append('image', product.image);
    dispatch(updateProduct(id, formData))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }
    setProduct({})
  }

  useEffect(() => {
    setProduct(productData)
  }, [productData])

  useEffect(() => {
    if (id) {
      setProduct({})
      dispatch(getProductDataToUpdate(id))
    }
  }, [])

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

          <div className="d-flex col-lg-12">
            {
              productData?.image?.map(ele => <div className="mx-2"><img style={{ width: '300px', height: '300px' }} src={ele} alt="" /></div>)
            }
          </div>
          <div>
            {
              image?.map(item => <div className="mx-2"><img style={{ width: '300px', height: '300px' }} src={item} alt="" /></div>)
            }
          </div>
          {/* <div>
          {
            image ? <img style={{ width: '300px', height: '300px' }} src={image} alt="" /> : null
          }
          </div> */}


          {/* {
          preview ? <div>
              <img style={{ width: '300px', height: '300px' }} src={preview} alt="todo" />
                  </div> : !preview ? <div>
              <img style={{ width: '300px', height: '300px' }} src={product.image} alt="todo" />
          </div> : null
          } */}
          
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
