import React from 'react';
import './Content.css';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';

 const SignupForm = () => {
   // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
   const formik = useFormik({
     initialValues: {
       firstName: '',
       country: '',
       date:'',
       item:'',
       quantity:'',
       rate:''
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <input
         id="firstName"
         name="firstName"
         type="text"
         placeholder="Supplier Name"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
        <br/>
       <select 
            id="country" 
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
       >
            <option value="NA">Unit/Warehouse</option>
            <option value="IND">IND</option>
            <option value="AUS">AUS</option>
            <option value="SA">SA</option>
            <option value="ENG">ENG</option>
            <option value="NZ">NZ</option>
        </select>
        <br/>
       <input
         id="date"
         name="date"
         type="date"
         onChange={formik.handleChange}
         value={formik.values.date}
       />
        <br/>
        <select 
            id="item" 
            name="item"
            onChange={formik.handleChange}
            value={formik.values.item}
       >
            <option value="NA">Item</option>
            <option value="Pen">Pen</option>
            <option value="Pencil">Pencil</option>
            <option value="Book">Book</option>
        </select>
        <select 
            id="quantity" 
            name="quantity"
            onChange={formik.handleChange}
            value={formik.values.quantity}
       >
            <option value="NA">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <select 
            id="rate" 
            name="rate"
            onChange={formik.handleChange}
            value={formik.values.rate}
       >
            <option value="NA">Rate</option>
            <option value="IND">20</option>
            <option value="AUS">30</option>
            <option value="SA">40</option>
        </select>
       <button style={{backgroundColor: 'blue', width: 267, height:40, border:'none', marginTop: 10}} type="submit">Submit</button>
     </form>
   );
 };

function Content() {
    return (
        <div className="content">
            <h3>Supplier Details</h3>
            <hr/>
            <SignupForm />
        </div>    
    )
}

export default Content
