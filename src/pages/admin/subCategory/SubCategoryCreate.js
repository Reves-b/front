import React, {useEffect, useState} from 'react';
import AdminNav from "../../../Components/nav/AdminNav";
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";

import {useSelector} from "react-redux";
import {
    createSubCategory,
    getSubCategory,
    getSubCategories,
    removeSubCategory
} from "../../../functions/subCategory";
import {getCategories} from '../../../functions/category'; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CategoryForm from '../../../Components/forms/CategoryForm';
import LocalSearchForm from '../../../Components/forms/LocalSearchForm';



const SubCategoryCreate = () => {
    const {user} = useSelector((state) => ({...state}))
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false);
    const[categories, setCategories] = useState([]);
    const[category, setCategory]= useState("");
    const[subCategories, setSubCategories]= useState([]);

    // searching/filtering categories step -1
const[keyword, setKeyword] = useState("")


useEffect(()=> {
    loadCategories();
    loadSubCategories();
}, [])

const loadCategories= () => 
getCategories().then((c)=>
    setCategories(c.data));

const loadSubCategories= () => 
getSubCategories().then((s)=>
    setSubCategories(s.data))
    



const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
setLoading(true);
createSubCategory({item, parent: category}, user.token)
.then(res=>{
    // console.log(res)
    setLoading(false)
    setItem('')
    toast.success(`"${res.data.item}" is created`)
    loadSubCategories();
})
.catch((err)=>{
    console.log(err);
    setLoading(false)
    if(err.response.status === 400) toast.error(err.response.data);
});
};


const handleRemove = async(slug) =>{
let answer = window.confirm("Delete?");
console.log(answer, slug);
if(window.confirm("Delete?")){
    setLoading(true)
    removeSubCategory(slug, user.token)
.then((res) => {
    setLoading(false);
    // setItem("");
    toast.success(`${res.data.item} is deleted`);
    loadSubCategories();
})
.catch((err)=>{

    
    if(err.response.status ===400) 

    {setLoading(false);
    toast.error(err.response.data);

}
})

}

    
};

//step-3
{/* Step-2     */}
<LocalSearchForm 
keyword={keyword}
setKeyword= {setKeyword}/>

// step-4

const searched = (keyword) => (c) => 
c.item.toLowerCase().includes(keyword)


return (
<div className='container-fluid'>

<div className='row'>
    <div className='col-md-2'> 

    <AdminNav/> 

    </div>
     <div className='col'> 
    {loading? (<h4 className='text-danger'>Loading..</h4>)
     : (<h4>Create Sub Category</h4>)}


    <div className='form-group'>
        <label> Parent Category</label>
        <select 
        name="category" 
        className='form-control'
        onChange={(e) => setCategory(e.target.value)}
    >
<option>Please select</option>
        {categories.length > 0 &&
            categories.map((c)=> (
        <option key={c._id} value={c._id}>
            {c.item}
        </option>
       ))}
        
</select>

</div>






           
    
    {JSON.stringify(category)}
    
    
    
    <CategoryForm 
    handleSubmit={handleSubmit} 
    item ={item} 
    setItem= {setItem}
    />
    


    {/* <hr/> */}

<LocalSearchForm keyword={keyword} setKeyword={setKeyword}/>


{/* step-5 */}


    {subCategories.filter(searched(keyword)).map((s) => (
        <div className='alert alert-secondary' key={s._id}>
{s.item} 


<span 
onClick={()=> handleRemove(s.slug)} 
className='btn btn-sm float-right'>
<DeleteOutlined className='text-danger'/>
</span> 

<Link to= {`/admin/subCategory/${s.slug}`}>
    <span className='btn btn-sm float-right text-primary'>
        <EditOutlined className='text-warning'/>

</span>
</Link>

        </div>
         ))}
     </div>
</div>

</div>

);


};


export default SubCategoryCreate;

