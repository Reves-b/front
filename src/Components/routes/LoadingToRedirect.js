import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'

const LoadingToRedirect = () =>{
const [count, setCount] = useState(5)

useEffect(()=> {
const interval = setInterval(() => {
//
setCount((currentCount) => --currentCount);

}, 1000);
// redirect once count is equal to 0
count === 0 && Navigate('/')

//cleanup
return()=> clearInterval(interval);

}, [count]) ;

return(
<div className='container p-5 text-center'>
<p>Redirecting you in {count} seconds</p>

</div>

)

}
export default LoadingToRedirect;