
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from =location?.state?.from?.pathname  || '/';
    

    const { createUser,updateUser} = useContext(AuthContext)

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email,data.password)
      .then(result=>{
        console.log(result.user)
        
        
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'register successfull',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from,{replace:true})
      
        
      })
      .catch(error=>{
        console.log(error.message)
      })

    };
    return (
        <div className='w-2/3 mx-auto bg-stone-300 text-white py-10 px-16 mt-14 '>
           <h2 className='text-center font-bold text-4xl mb-10 text-black'>Please Login</h2> 
           <form  onSubmit={handleSubmit(onSubmit)}>
           
            
            <p className='text-black mb-2 ms-4'>Your Email</p>
            <input type="text" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered  mb-4 w-full bg-slate-600"  />
            <p className='text-black mb-2 ms-4'>Your Password</p>
            <input type="password" placeholder="Your Password" {...register("password", { required: true })} className="input input-bordered   w-full bg-slate-600"  />

            <div>
                <p className=' mb-2 text-black'>
                Already Have An Account Please Login<Link to='/login'><button className='btn btn-link'>Login</button></Link>
                </p>
            </div>

            <div className='text-center'>
            <input className='btn bg-rose-500 py-2 px-10 rounded-2xl w-2/4' type="submit"  value='Register Now' />
            </div>
          
           
           </form>
           </div>
    );
};

export default Register;