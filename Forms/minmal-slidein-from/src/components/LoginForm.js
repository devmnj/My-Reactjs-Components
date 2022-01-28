import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form'
export default function LoginForm(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(data)
  console.log(watch("username"));

  const [cls, setCls] = useState('')
  const [RPanel, setRPanel] = useState(false)
  const [loginClass, setLoginClass] = useState('input')
  const [loginClass2, setLoginClass2] = useState('input')
  
  useEffect(() => {
     RPanel ? setCls('container right-panel-active'): setCls('container')

  },[RPanel])
  useEffect(() => {  
    errors.password ? setLoginClass('invalid1'):setLoginClass('input');
   
  }, [errors.password]);
  
  useEffect(() => {  
    errors.email ? setLoginClass2('invalid1'):setLoginClass2('input');
   
  }, [errors.email]);
  
  return (
    <div  >
      <div className={cls}>
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form  onSubmit={handleSubmit(onSubmit)} className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" {...register("email",{required:true})} className={loginClass2} />
            <input type="password" className={loginClass} placeholder="Password"  {...register("password",{required:true,maxLength:5})} />
            <a href="#" className="link">Forgot your password?</a>
            <button className="btn" >Sign In</button>
          </form>
        </div>

        <div className="container__overlay">
          {props.background}
          <div className="overlay" style={{background:'url('+props.background +')' }}>
            <div className="overlay__panel overlay--left">
              <button onClick={()=>setRPanel(false)} className="btn" id="signIn">Sign In</button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp" onClick={()=>setRPanel(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
