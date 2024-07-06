import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import AdminNav from "../../../Components/nav/AdminNav";
import {useSelector} from "react-redux";
import {createProduct} from "../../../functions/product";
import ProductCreateForm from "../../../Components/forms/ProductCreateForm"; 
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../Components/forms/FileUpload";
const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subCategories: [],
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Reves", "Reves Luxe"],
    color: "",
    brand: "",
  };

  



const ProductCreate = () => {

    const [values, setValues] = useState(initialState);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [loading, setLoading] = useState(false);

//redux

const{user} = useSelector((state) => ({...state}))




  // destructure
  // const {
  //   title,
  //   description,
  //   price,
  //   categories,
  //   category,
  //   subCategories,
  //   shipping,
  //   quantity,
  //   images,
  //   colors,
  //   brands,
  //   color,
  //   brand,
  // } = values;



useEffect(() => {
  loadCategories();
}, []);

const loadCategories = () =>
  getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
       if (err.response.status === 400)
        toast.error(err.response.data);
    //  toast.error(err.response.data.err)
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name, " ----- ", e.target.value);

  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subCategories: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubCategoryOptions(res.data);
    });
    setShowSubCategory(true);
  };






return (

    <div className='container-fluid'>

<div className='row'>
    <div className='col-md-2'> 

    <AdminNav/> 

    </div>

<div className='col-md-10'> 
<h4>Product Create</h4>
<hr />
{JSON.stringify(values.images)}

          <div className="p-3">
            <FileUpload 
            values={values}
            setValues={setValues}
            setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subCategoryOptions={subCategoryOptions}
            showSubCategory={showSubCategory}
          />





          

          </div>
</div>
</div>
)

}

export default ProductCreate;



