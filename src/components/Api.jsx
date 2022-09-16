import React, { useState, useEffect } from 'react'
import axios from "axios"


function Api() {



const [posts, setPosts] = useState([])
const [id, setId] = useState(1)


useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then( res => {
        console.log(res);
        setPosts(res.data)
      } )
      .catch( err => {
        console.log(err);
     })
   
})

  

  
  return (
    <>

    <input value={id}  onChange={e => setId(e.target.value)}/>
     <ul>
          {
            posts.map(post => ( <li key={post.id}>{post.title}<br/>{post.thumbnailUrl}</li>
                 )
           
            )
        }
     </ul>
        
    </>
  )
}

export default Api




