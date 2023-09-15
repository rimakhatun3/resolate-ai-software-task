import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { database } from '../../firebase/_firebase_config';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';



const AddTask = () => {
    const navigate = useNavigate()

const handleAddTask = async (event)=>{
    event.preventDefault()
const form = event.target;
const title = form.title.value;
const description = form.description.value;
const date = form.date.value
const task = {title,description,date}
    console.log(task)
// if(!title || !description || !date){
//     toast.error("please provide value in each input field")
// }
// else{
//     database.child("task").push(task, (err)=>{
//         if(err){
//             toast.error(err)
//         }
//         else{
//             toast.success("task added successfully")
//         }
//     })


// }

const option = {
    method:"POST",
    headers:{
        "content-type": "application/json"
    },
    body:JSON.stringify(task)
}
const res = await fetch('https://resolute-ai-software-task-default-rtdb.firebaseio.com/addtask.json',option)
if(res){
    alert('task added')
    navigate('/')
    
}
else{
    alert('error message')
}

}
 

    return (
        <div className='mt-14 border bg-slate-200 w-1/2 mx-auto rounded-xl py-12 px-6 '>
            <form onSubmit={handleAddTask}>
             
               <input   className='border rounded-xl py-2 px-4 w-4/5 my-2 text-black' placeholder='Task title'  type="text" name="title" id="" />
               <textarea placeholder='Task Description'   className='border rounded-xl py-2 px-4 w-4/5 text-black'   name="description" id="" cols="50" rows="5"></textarea>
              
               <input   className='border rounded-xl py-2 px-4 w-4/5 my-2 text-black'   type="date" name="date" id="" />
               <input className='px-4 py-2 w-1/2 bg-rose-500 hover:bg-blue-500 rounded-2xl' type="submit" value="Add Task" />
               
              
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddTask;