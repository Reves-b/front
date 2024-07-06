import React, {useEffect, useState} from 'react';
import AdminNav from "../../../Components/nav/AdminNav";
import {toast} from 'react-toastify';
import {useSelector} from "react-redux";
import {
    updateSubCategory,
    getSubCategory,
    
} from "../../../functions/subCategory";
import {getCategories} from '../../../functions/category'; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CategoryForm from '../../../Components/forms/CategoryForm';
import LocalSearchForm from '../../../Components/forms/LocalSearchForm';
import { useNavigate } from 'react-router-dom';



const SubCategoryUpdate = ({match}) => {
    const {user} = useSelector((state) => ({...state}))
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false);
    const[categories, setCategories] = useState([]);
    const[parent, setParent]= useState("");

    // searching/filtering categories step -1

const navigate = useNavigate();
useEffect(()=> {
    loadCategories();
    // loadSubCategory();
}, [])

const loadCategories= () => 
getCategories().then((c)=>
    setCategories(c.data));

const loadSubCategory= () => 
getSubCategory(match.params.slug).then((s)=>{
    setItem(s.data.item)
    setParent(s.data.parent)
});
    



const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
setLoading(true);
updateSubCategory(match.params.slug, {item, parent}, user.token)
.then(res=>{
    // console.log(res)
    setLoading(false)
    setItem('')
    toast.success(`"${res.data.item}" is updated`);
    // loadSubCategories();
navigate("/admin/subCategory")

})
.catch((err)=>{
    console.log(err);
    setLoading(false)
    if(err.response.status === 400) toast.error(err.response.data);
});
};




//step-3


// step-4




return (
<div className='container-fluid'>

<div className='row'>
    <div className='col-md-2'> 

    <AdminNav/> 

    </div>
     <div className='col'> 
    {loading? (<h4 className='text-danger'>Loading..</h4>)
     : (<h4>Update Sub Category</h4>)}
    <div className='form-group'>
        <label> Main Category</label>
        <select 
        name="category" 
        className='form-control'
        onChange={(e) => setParent(e.target.value)}
        >

<option>Please select</option>

            {categories.length > 0 &&
            categories.map((c) => (
            <option key={c._id} value={c._id} select={c._id === parent}>
                {c.name}
                </option>
            ))}        

        </select>
    </div>
    
    {/* {JSON.stringify(category)} */}
    
    
    
    <CategoryForm 
    handleSubmit={handleSubmit} 
    item ={item} 
    setItem= {setItem}
    />
    
{/* Step-2     */}


{/* step-5 */}


   
     </div>
</div>

</div>

);


};


export default SubCategoryUpdate;

