import React from 'react';
import './EventDetails.css';
 import { useLocation,useParams } from 'react-router-dom';

export default function EventDetails(props) {
  const location = useLocation();
const data = location.state;
 console.log(data);
  var { id} = useParams();
  console.log(id)
 console.log(typeof id)

  const findBlog = data.find((post) => post.id === Number(id))
    console.log(findBlog)

    if (!findBlog) {
        return <p>No blogs found.</p>
    }


  return (
    <div>
      <div className="context">
        <h1>{ findBlog.name}</h1>
        <label className='desc'>Description</label>
        <p>&nbsp;&nbsp;&nbsp;{ findBlog.desc}</p>
 







 
      </div>
      
      </div>
  );

 
}