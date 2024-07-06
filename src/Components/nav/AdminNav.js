import React from "react";
import {Link} from "react-router-dom";
const AdminNav =() => (




    <nav>
    <ul className="nav flex-column">
        <li className="nav-item">
                
                <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
        </li>

        <li className="nav-item">
            <Link to="/admin/product" className="nav-link">
          Product
        </Link>
       
       
        </li>

        <li className="nav-item">
            {/* <a href="/admin/products" className="nav-link">Products</a> */}
       
            <Link to="/admin/products" className="nav-link">
          Products
        </Link>
       
       
        </li>

        <li className="nav-item">
            {/* <a href="/admin/category" className="nav-link">Category</a> */}
            <Link to="/admin/category" className="nav-link">
          Category
        </Link>
       
       
        </li>

        <li className="nav-item">
            {/* <a href="/admin/sub" className="nav-link">Sub Category</a> */}
        
            <Link to="/admin/subCategory" className="nav-link">
          Sub Category
        </Link>
        
        
        </li>
        <li className="nav-item">
            <a href="/admin/coupan" className="nav-link">Coupan</a>
        </li>

        <li className="nav-item">
            <a href="/user/password" className="nav-link">
                Password</a>
        </li>




    </ul>
</nav>
)



export default AdminNav;