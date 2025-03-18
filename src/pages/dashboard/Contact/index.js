import React from 'react'
//import { Formik, Form } from 'formik';
import { useFormik } from 'formik';
import validationSchema from './Validations';
import './styles.css';

function Contact() {
  const {handleSubmit,handleChange,handleBlur,values,isSubmitting,errors,touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message:'',
    },
    onSubmit:async (values,bag) => {
      //alert(JSON.stringify(values, null, 2));
      await new Promise((r) => setTimeout(r, 1000));
      if(values.email==="test@test.com"){return bag.setErrors({email:"Bu mail zaten var"});}
     console.log(values);
     
      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <div>
     <h1>Giriş Yap</h1>
            <form onSubmit={handleSubmit} className='form'>
           
            <div>
            
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder='firstName'
                onChange={handleChange("firstName")}
                value={values.firstName}
                disabled={isSubmitting}
                onBlur={handleBlur("firstName")}
              />
            {errors.firstName&&touched.firstName&&<div className='error'>{errors.firstName}</div>}
            </div>

            <div>           
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" 
            name="lastName" 
            placeholder="lastName" 
            onChange={handleChange("lastName")} 
            value={values.lastName}
            disabled={isSubmitting}
            onBlur={handleBlur("lastName")}
            />
            {errors.lastName&&touched.lastName&&<div className='error'>{errors.lastName}</div>}
            </div>
            
            <div>
            <label htmlFor="email">Email</label>
            <input id="email"
             name="email" 
             placeholder="email" 
              type="email" 
              onChange={handleChange("email")}
              value={values.email}
              disabled={isSubmitting}
              onBlur={handleBlur("email")}
               />
               {errors.email&&touched.email&&<div className='error'>{errors.email}</div>}
            </div>
           
            <div>
            <label htmlFor="message">message</label>
            <textarea id="message" 
            name="message" 
            placeholder="messages"   
            onChange={handleChange("message")} 
            value={values.message}
            disabled={isSubmitting}
            onBlur={handleBlur("isSubmitting")}
            />
            {errors.message&&touched.message&&<div className='error'>{errors.message}</div>}
            </div>
           
            <button type="submit" disabled={isSubmitting}>Submit</button> 
           
           </form>
    </div>
  )
}

export default Contact