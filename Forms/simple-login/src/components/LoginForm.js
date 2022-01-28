import React from 'react';
 
import {useForm} from 'react-hook-form'
export default function LoginForm() {
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  const onSubmit = data =>alert(data)
  console.log(watch("username"));
  return  (
 <div>
 <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Log in</h2>

  <form class="login-container" onSubmit={handleSubmit(onSubmit)}>
    <p><input {...register("email",{required:true})} type="email" placeholder="Email" name="email"/></p>
    {errors.email && "Email required"}
    <p><input {...register("password",{required:true})} type="password" placeholder="Password" /></p>
    {errors.password && "password required"}
    <p><input type="submit" value="Log in"/></p>
  </form>
</div>

 </div>
  )
}
