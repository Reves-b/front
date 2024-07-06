import React, {useEffect, useState} from 'react';
import AdminNav from "../../../Components/nav/AdminNav";
import {toast} from 'react-toastify';
import {useSelector} from "react-redux";
import {
    getCategory,
    updateCategory
} from "../../../functions/category"; 
import {useNavigate, useParams} from "react-router-dom"
import CategoryForm from '../../../Components/forms/CategoryForm';


const CategoryUpdate = () => {
    const { user } = useSelector((state) => ({...state}))
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let{slug} = useParams();


useEffect(()=> {
    // console.log(slug)
    loadCategory();
}, [])

const loadCategory = () => 
getCategory(slug).then((c)=>
setItem(c.data.item));

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
setLoading(true);
updateCategory(slug, {item}, user.token)
.then((res)=>{
    console.log(res)
    setLoading(false)
    setItem("")
    toast.success(`"${res.data.item}" is updated`)
    navigate("/admin/category")
})
.catch((err)=>{
    console.log(err);
    setLoading(false)
    if(err.response.status === 400) toast.error(err.response.data);
});
};

const categoryForm =() => (
<form onSubmit={handleSubmit}>
<div className ="form-group">
<label>Item</label>
<input
type="text"
className='form-control'
onChange={(e) => setItem(e.target.value)}
value={item}
autoFocus
required
/>
<br/>

<button className='btn btn-outline-primary'>save</button>


</div>




</form>



)





return (
<div className='container-fluid'>

<div className='row'>
    <div className='col-md-2'> 

    <AdminNav/> 

    </div>
     <div className='col'> 
    {loading? (<h4 className='text-danger'>Loading..</h4>)
     : (<h4>Update category</h4>)}



{categoryForm()}
    {/* <CategoryForm 
    handleSubmit={handleSubmit} 
    item ={item} 
    setItem= {setItem}
    />  */}
    <hr/>

   
     </div>
</div>

</div>

)


}


export default CategoryUpdate;


