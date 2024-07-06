import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";
import AdminNav from "../../../Components/nav/AdminNav";
import {useSelector} from "react-redux";
import {
    createCategory,
    getCategories,
    removeCategory
} from "../../../functions/category"; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CategoryForm from '../../../Components/forms/CategoryForm';
import LocalSearchForm from '../../../Components/forms/LocalSearchForm';



const CategoryCreate = () => {
    const {user} = useSelector(state => ({...state}))
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false);
    const[categories, setCategories] = useState([]);
    // searching/filtering categories step -1
const[keyword, setKeyword] = useState("")


useEffect(()=> {
    loadCategories();
}, [])

const loadCategories= () => 
getCategories().then((c)=>
    setCategories(c.data))

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
setLoading(true);
createCategory({item}, user.token)
.then(res=>{
    // console.log(res)
    setLoading(false)
    setItem('')
    toast.success(`${res.data.item} is created`)
    loadCategories();
})
.catch((err)=>{
    console.log(err);
    setLoading(false)
    if(err.response.status === 400) toast.error(err.response.data);
});
};


const handleRemove = async(slug) =>{
// let answer = window.confirm("Delete?");
// console.log(answer, slug);
if(window.confirm("Delete")){
    setLoading(true)
    removeCategory(slug, user.token)
.then(res => {
    setLoading(false);
    setItem("");
    toast.success(`${res.data.item} is deleted`);
    loadCategories();
})
.catch((err)=>{

    setLoading(false);
    if(err.response.status ===400) 
    toast.error(err.response.data);
})

}

    
};

//step-3
const categoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Item</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary">Save</button>
      </div>
    </form>
  );

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
    {loading? (<h4 className='text-danger'>Loading..</h4>) : 
    (<h4>Create category</h4>)}
    <CategoryForm 
    handleSubmit={handleSubmit} 
    item ={item} 
    setItem= {setItem}
    />
    
{/* Step-2     */}
<LocalSearchForm 
keyword={keyword}
setKeyword= {setKeyword}/>
    {/* <hr/> */}

{/* step-5 */}


    {categories.filter(searched(keyword)).map((c) => (
        <div className='alert alert-secondary' key={c._id}>
{c.item} 


<span 
onClick={()=> handleRemove(c.slug)} 
className='btn btn-sm float-right'>
<DeleteOutlined className='text-danger'/>
</span> 

<Link to={`/admin/category/${c.slug}`}>
    <span 
    
    className='btn btn-sm float-right text-primary'>
    <EditOutlined className='text-warning'/>

</span>
</Link>

        </div>
         ))}
     </div>
</div>

</div>

)


}


export default CategoryCreate;

