import React, { useState } from 'react'

function MyFirstPage() {

  const [error, setError] = useState();
// const [detail, myDetail] = useState([{
//    Name: "Amjad", Address: "Karachi", Age: 32, Gender: "male",
//     Name: "salman", Address: "Bara Board", Age: 21, Gender: "male",
//     Name: "Nehal", Address: "Machar Colony", Age: 29, Gender: "male",
//     Name: "Ayesha", Address: "Karachi", Age: 32, Gender: "female",
   

// }]);



 const myFunction = () => {


   let Name = "Amjad"
   let  Address = "Karachi"
   let Age = 32
   let Gender = "male"
   
  if (Name == Name && Address == Address && Age == Age  && Gender == Gender) {

    alert("The Details is Correct")
    console.log("The Details is Correct");
    
  } else {

    alert("The Details Is Wrong")
    console.log("The Details are wrong");
    console.error(error);

  }


 
  

 }




  return (
    <>
    {/* {detail.map((details) => (

     <div  className=''  key={details.id}>

      <h2>{details.name}</h2>
      <p>{details.Address}</p>
     </div>


    ))} */}

       {/* <form style={{backgroundColor: "skyblue", padding: "10px,"}}>
         <label>Name</label>
         <input type='text' placeholder="Enter Your Name" />
         <br/>
         <label>Address</label>
         <input type='text' placeholder="Enter Your Address" />
         <br/>
         <label>Age</label>
         <input type='#' placeholder="Enter Your Age" />
         <br/>
         <label>Gender</label>
         <select>
         <option>male</option>
         <option>female</option>
         </select>
         <br/>
         <button onClick={myFunction}>Press</button>

       </form> */}


<div className='py-10'> 
<form className='container mx-auto'>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
    <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
  </div>
  <div class="mb-6">
    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your address</label>
    <input type="" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
  </div>

  <div class="mb-6">
    <label for="Age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your #</label>
    <input type="#" id="#Age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
  </div>

<div className='mb-6'>
  <select >
  <option>
    male
  </option> 
  <option>
    female
  </option>

  </select>

  </div>
  <div class="flex items-start mb-6">
    
  </div>
  <button onClick={myFunction} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


</div>       


   


    </>
  )
}

export default MyFirstPage