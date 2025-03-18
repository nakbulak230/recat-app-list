import React from 'react'
import { Formik, Field, Form } from 'formik';

function Contact1() {
  return (
    <div>
         <h1>Giriş Yap</h1>
     <Formik initialValues={{firstName: '',lastName: '',email: '',}}
                //  onSubmit={async (values) => {
                //  await new Promise((r) => setTimeout(r, 500));
                //  alert(JSON.stringify(values, null, 2));}}
                onSubmit={ (values) => {console.log(values);}}>
           <Form> 
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Nazım" />
    
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Akbulak" />
    
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="nnn@acme.com"  type="email" />
            <button type="submit">Submit</button> 
           
           </Form>
         </Formik>
    </div>
  )
}

export default Contact1