// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { updateProduct } from '../../redux/actions/adminActions';
// import { getProductDataToUpdate } from '../../redux/actions/adminActions';
// import Loader from 'react-loader-spinner';
// import { FaTrashAlt } from 'react-icons/fa';

// const EditProduct = () => {
//   const history = useHistory()
//   const { id } = useParams()
//   const dispatch = useDispatch()
//   const [product, setProduct] = useState({})
//   const [image, setImage] = useState([{}])
//   const [productImage, setProductImage] = useState([])
//   const [allImages, setAllImages] = useState([{}])
//   const [selectedImages, setSelectedImages] = useState([])
//   const productData = useSelector((state) => state.adminReducer.product);
//   const isFetching = useSelector((state) => state.adminReducer.isFetching);

//   const handleChange = ({ target }) => {
//     console.log('Target:', target)
//     const { name, value } = target;
//     setProduct({
//       ...product, [name]: value,
//     });
//   };

//   const handleFileChange = (key, event) => {
//     const files = [...image]
//     files[key] = event.target.files[0]
//     if (files) {
//       console.log('Files:', files)
//       setImage(files)
//       setAllImages([...productImage, ...files])
//       console.log('All images combined:', [...productImage, ...files])
//       const fileArray = Array.from(files).map(file => URL.createObjectURL(file))
//       setSelectedImages(fileArray)
//       Array.from(event.target.files[0]).map(file => URL.revokeObjectURL(file))
//     }
//   }

//   const addImage = () => {
//     console.log('This function works')
//     setImage([...image, {}])
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData = new FormData();
//     formData.append('title', product.title);
//     formData.append('price', product.price)
//     formData.append('description', product.description);
//     for (let i = 0; i < allImages.length; i++) {
//       formData.append("image", allImages[i]);
//     }
//     dispatch(updateProduct(id, formData, history))
//     for (var pair of formData.entries()) {
//       console.log(pair[0] + ' - ' + pair[1]);
//     }
//     setProduct({})
//   }

//   useEffect(() => {
//     setProduct(productData)
//     console.log('Product object consoled:', productData.image)
//     setProductImage(productData.image)
//   }, [productData])

//   useEffect(() => {
//     if (id) {
//       setProduct({})
//       dispatch(getProductDataToUpdate(id))
//     }
//   }, [])

//   const handleDeleteImage = (index) => {
//     console.log('Image array:', image)
//     const newSourceArray = [...image]
//     console.log('SourceArray data array:', newSourceArray)
//     newSourceArray.splice(index, 1)
//     setImage(newSourceArray)
//     // console.log('New source array:', newSourceArray)
//     setAllImages([...productImage, ...newSourceArray])
//     setSelectedImages(newSourceArray)
//     console.log('image array passed to setAllImages', newSourceArray)
//     console.log('Product Image array:', productImage)
//     // console.log('Array of image:', image)
//   }
//   const removeItem = index => {
//     const oldImages = [...image];
//     oldImages.splice(index, 1);
//     setImage(oldImages)
//   }

//   const handleDeleteImageArray = (index) => {
//     // console.log('Index of clicked image:', index)
//     const newArray = [...productImage]
//     newArray.splice(index, 1);
//     setProductImage(newArray)
//     setAllImages([...image, ...newArray])
//     console.log('Product Array:', newArray)
//     console.log('Product Image array:', productImage)
//     console.log('Array of image:', image)
//   }

//   const renderPhotos = (source) => {
//     return source?.map((photo, index) => {
//       return (<span className="mx-2 my-2" key={index}>
//         <div>
//           <FaTrashAlt onClick={(e) => handleDeleteImage(index, e)} className="absolute float-right" style={{ cursor: 'pointer' }} />
//         </div>
//         <img src={photo} key={photo} style={{ width: '200px', height: '200px' }} className="relative" />
//       </span>
//       )
//     })
//   }

//   return (
//     <div>
//       {isFetching ? (<div className="d-flex justify-content-center align-items-center">
//         <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
//       </div>
//       ) : (<div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
//         <label className="pl-2 mt-4">Edit Product</label>
//         <hr />
//         <form className="form-group col-lg-6 px-2" onSubmit={handleSubmit}>
//           <div class="form-group">
//             <label for="exampleFormControlInput1">Title</label>
//             <input
//               type="text"
//               name="title"
//               class="form-control"
//               placeholder="Title"
//               required
//               value={product.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div class="form-group">
//             <label for="exampleFormControlInput1">Price</label>
//             <input
//               type="number"
//               name="price"
//               class="form-control"
//               placeholder="Price"
//               required
//               value={product.price}
//               onChange={handleChange}
//             />
//           </div>
//           <div class="form-group">
//             <label for="exampleFormControlInput1">Description</label>
//             <input
//               type="text"
//               name="description"
//               class="form-control"
//               placeholder="Description"
//               value={product.description}
//               onChange={handleChange}
//             />
//           </div>
//           {image?.length ? image.map((el, index) => <div className="form-group small-section upload-file" style={{ border: '1px solid', widht: '100%', height: '20%', background: '', borderRadius: '2px', outline: 'none', borderColor: 'white', }} >
//             <label for="exampleFormControlInput1">Image</label>
//             <span className="add-more-btn my-1" onClick={() => removeItem(index)}>Remove -</span>
//             <input
//               type="file"
//               name={`image`}
//               // value={el}
//               accept="image/x-png,image/jpg,image/jpeg, image/png,"
//               onChange={(event) => handleFileChange(index, event)}
//               className="form-control"
//               placeholder="Upload Image"
//             />
//           </div>) : null}
//           <span onClick={addImage} className="add-more-btn" style={{ cursor: 'pointer', marginBottom: '0px' }}>Add more +</span>
//           <div className="d-flex col-lg-12 flex-wrap">
//             {
//               productImage?.map((ele, index) =>
//                 <span className="mx-2" key={index}>
//                   <div>
//                     <FaTrashAlt onClick={(e) => handleDeleteImageArray(index, e, productImage)} className="absolute float-right" style={{ cursor: 'pointer' }} />
//                   </div>
//                   <img style={{ width: '200px', height: '200px' }} src={ele} alt="" className="relative" />
//                 </span>)
//             }
//             {
//               renderPhotos(selectedImages)
//             }
//           </div>
//           <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }} >
//             Update Product
//           </button>
//         </form>
//       </div>
//       )}
//     </div>
//   )
// }

// export default EditProduct

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from '../../redux/actions/adminActions';
import { getProductDataToUpdate } from '../../redux/actions/adminActions';
import Loader from 'react-loader-spinner';
import { FaTrashAlt } from 'react-icons/fa';

const EditProduct = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const [image, setImage] = useState([])
  const [productImage, setProductImage] = useState([])
  const [allImages, setAllImages] = useState([{}])
  const [selectedImages, setSelectedImages] = useState([])
  const productData = useSelector((state) => state.adminReducer.product);
  const isFetching = useSelector((state) => state.adminReducer.isFetching);

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
      console.log('Files:', files)
      setImage(files)
      setAllImages([...productImage, ...files])
      console.log('All images combined:', [...productImage, ...files])
      // files.push(files); //My blob
      // let foo = URL.createObjectURL(new Blob(files, { type: "application/" }));
      // setImage(foo)

      const fileArray = Array.from(files).map(file => URL.createObjectURL(file))
      console.log('File Array:', fileArray)
      setSelectedImages(fileArray)
      // setImage(...fileArray, ...image)
      Array.from(event.target.files[0]).map(file => URL.revokeObjectURL(file))
    }
  }

  const addImage = () => {
    console.log('This function works')
    setImage([...image, []])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price)
    formData.append('description', product.description);
    for (let i = 0; i < allImages.length; i++) {
      formData.append("image", allImages[i]);
    }
    dispatch(updateProduct(id, formData, history))
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }
    setProduct({})
  }

  useEffect(() => {
    setProduct(productData)
    console.log('Product object consoled:', productData.image)
    setProductImage(productData.image)
  }, [productData])

  useEffect(() => {
    if (id) {
      setProduct({})
      dispatch(getProductDataToUpdate(id))
    }
  }, [])

  const removeItem = index => {
    const oldImages = [...image];
    oldImages.splice(index, 1);
    setImage(oldImages)
  }

  const handleDeleteImage = (index) => {
    console.log('Image array:', image)
    const newSourceArray = [...selectedImages]
    console.log('SourceArray data array:', newSourceArray)
    newSourceArray.splice(index, 1)
    setImage(newSourceArray)
    // console.log('New source array:', newSourceArray)
    setSelectedImages(newSourceArray)
    setAllImages([...productImage, ...newSourceArray])
    console.log('image array passed to setAllImages', newSourceArray)
    console.log('Product Image array:', productImage)
    // console.log('Array of image:', image)
  }
  

  const handleDeleteImageArray = (index) => {
    // console.log('Index of clicked image:', index)
    const newArray = [...productImage]
    newArray.splice(index, 1);
    setProductImage(newArray)
    setAllImages([...image, ...newArray])
    console.log('Product Array:', newArray)
    console.log('Product Image array:', productImage)
    console.log('Array of image:', image)
  }

  // const renderPhotos = (source) => {
  //   return source?.map((photo, index) => {
  //     return (<span className="mx-2 my-2" key={index}>
  //       <div>
  //         <FaTrashAlt onClick={(e) => handleDeleteImage(index, e)} className="absolute float-right" style={{ cursor: 'pointer' }} />
  //       </div>
  //       <img src={photo} key={photo} style={{ width: '200px', height: '200px' }} className="relative" />
  //     </span>
  //     )
  //   })
  // }

  return (
    <div>
      {isFetching ? (<div className="d-flex justify-content-center align-items-center">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
      ) : (<div className="px-4 border mx-4" style={{ backgroundColor: 'white' }}>
        <label className="pl-2 mt-4">Edit Product</label>
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
              value={product.title}
              onChange={handleChange}
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
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input
              type="text"
              name="description"
              class="form-control"
              placeholder="Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          {image?.length ? image.map((el, index) => <div className="form-group small-section upload-file" style={{ border: '1px solid', widht: '100%', height: '20%', background: '', borderRadius: '2px', outline: 'none', borderColor: 'white', }} >
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
          <span onClick={addImage} className="add-more-btn" style={{ cursor: 'pointer', marginBottom: '0px' }}>Add more +</span>
          <div className="d-flex col-lg-12 flex-wrap">
            {
              productImage?.map((ele, index) =>
                <span className="mx-2" key={index}>
                  <div>
                    <FaTrashAlt onClick={(e) => handleDeleteImageArray(index, e)} className="absolute float-right" style={{ cursor: 'pointer' }} />
                  </div>
                  <img style={{ width: '200px', height: '200px' }} src={ele} alt="" className="relative" />
                </span>)
            }
            {
              selectedImages?.map((ele, index) =>
                <span className="mx-2" key={index}>
                  <div>
                    <FaTrashAlt onClick={(e) => handleDeleteImage(index, e)} className="absolute float-right" style={{ cursor: 'pointer' }} />
                  </div>
                  <img style={{ width: '200px', height: '200px' }} src={ele} alt="" className="relative" />
                </span>)
            }

            {/* {
              renderPhotos(selectedImages)
            } */}
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }} >
            Update Product
          </button>
        </form>
      </div>
      )}
    </div>
  )
}

export default EditProduct