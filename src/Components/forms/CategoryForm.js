import React from "react";

const CategoryForm = ({handleSubmit, item, setItem}) => (
<form onSubmit = {handleSubmit}>
<div className='form-group'>
    <label>Item</label>
    <input 
    type="text" 
    className='form-control'
     onChange = {(e) => setItem(e.target.value)}
     value = {item}
     autoFocus
     required
     />
     <br/>
<button className='btn btn-outline-primary'>Save</button>

</div>
</form>
);

export default CategoryForm;