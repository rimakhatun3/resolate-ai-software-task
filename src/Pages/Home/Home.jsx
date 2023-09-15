import React, { useEffect, useState } from 'react';
import { database } from '../../firebase/_firebase_config';
import { DataSnapshot } from 'firebase/database';

const Home = () => {
    const [task , setTask] = useState({})

useEffect(()=>{
fetch('https://resolute-ai-software-task-default-rtdb.firebaseio.com/addtask.json')
.then(res=>res.json())
.then(data=>setTask(data))


    // database.child("addtask").on("value",(DataSnapshot)=>{
    //     if(DataSnapshot.val() !==nul){
    //         setTask({...DataSnapshot.val()})
    //     }
    //     else{
    //         setTask({})
    //     }
    // })
},[])
console.log(task)

    return (
        <div>

<table className="table table-zebra mt-5">
    {/* head */}
    <thead className='bg-slate-100 '>
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {  Object.keys(task).map((id,index,item)=><tr key={index}>
        <th>{index}</th>
        <td>{task[id].title}</td>
        <td>{task[id].description}</td>
        <td>{task[id].date}</td>
      </tr>)}
      
      
   
    </tbody>
  </table>
        
        </div>
    );
};

export default Home;