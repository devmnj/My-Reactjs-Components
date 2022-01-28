import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form'
export default function LoginForm() {
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  const onSubmit = data =>alert(data)
  console.log(watch("username"));
  return  (
 <div>

<div className="container align">

  <div className="grid">

    <form onSubmit={handleSubmit(onSubmit)} className="form login">

      <div className="form__field">
        <label htmlFor="login__username">
            <FontAwesomeIcon icon={faUser}/>
        <span className="hidden">Username</span></label>
        <input  {...register("username",{required:true})}    id="login__username" type="text" name="username" className="form__input" placeholder="Username" />
      </div>
      { errors.username && <div>User Name required</div>}

      <div className="form__field">
        <label htmlFor="login__password">
<FontAwesomeIcon icon={faKey}/>
          <span className="hidden">Password</span></label>
        <input id="login__password"    {...register("password",{required:true})} type="password" name="password" className="form__input" placeholder="Password" />
      
      </div>
     {errors.password &&<div>Password required</div>}
      <div className="form__field">
        <input type="submit" value="Sign In"/>
      </div>

    </form>

    <p className="text--center">Not a member? <a href="#">Sign up now</a> <svg className="icon">
      </svg></p>

  </div>

</div>

 </div>
  )
}
