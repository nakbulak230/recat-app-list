import React from 'react'
import { Formik, Form } from 'formik';

function Contact() {
  return (
    <div>
     <h1>Giriş Yap</h1>
     <Formik initialValues={{firstName: '',lastName: '',email: '',message:''}}
            onSubmit={ (values) => {console.log(values);}}>

      
         {
          ({handleSubmit,handleChange})=>(
            <Form  onSubmit={handleSubmit} className='form'> 

            <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Nazım" onChange={handleChange("firstName")} />
            </div>

            <div>           
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Akbulak" onChange={handleChange("lastName")} />
            </div>
            
            <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="nnn@acme.com"  type="email" onChange={handleChange("email")} />
            </div>
           
            <div>
            <label htmlFor="message">message</label>
            <textarea id="message" name="message" placeholder="messages"   onChange={handleChange("message")} />
            </div>
           
            <button type="submit">Submit</button> 
           
           </Form>
          )
         }
    
     </Formik>
      
    </div>
  )
}

export default Contact