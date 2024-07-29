/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

import { useFormik } from 'formik'
import { signupForm } from './schema'

function App() {
  const initialValues = {
    firstName: "",
    email: "",
    department: "",
    date: "",
    message: ""
  }

  const { values, errors, handleSubmit, handleChange, handleBlue, touched } = useFormik({
    initialValues,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema:signupForm,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm()
    }
  })

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="container w-[500px] flex items-center justify-center flex-col h-[500px]  border shadow-md px-6 py-4">
        <div className='heading'>
          <p className='text-gray-700 text-center font-bold'>Contect us</p>
          <h2 className='text-2xl font-bold'>Make an Appointment</h2>
        </div>

        <div className='mobile-view lg:opacity-0 sm:opacity-100'>
          <h3>Boook Appointment</h3>
        </div>


        <form className="flex flex-col gap-1 mt-6 pb-4" onSubmit={handleSubmit}>
          <div className="lg:flex sm:flex gap-4">
            <div className=''>
              <label className='text-xs block ' htmlFor="">Full Name *</label>
              <input value={values.firstName} onChange={handleChange} onBlur={handleBlue} className='border p-3 rounded-md text-sm bg-gray-100' type="text" placeholder='Full Name *' name="fullName" />

            </div>

            <div>
              <label className='text-xs block' htmlFor="">Email address *</label>
              <input value={values.email} onChange={handleChange} onBlur={handleBlue} className='border p-3 rounded-md text-sm bg-gray-100' type="email" placeholder='Email *' name="email" />
              <span>{touched.email && errors.email ? <p className='text-red-500 text-xs'>{errors.email}</p> : null}</span>
            </div>
          </div>

          <div className="lg:flex sm:flex gap-4">
            <div className="flex flex-col w-full">
              <label className='text-xs ' htmlFor="">Department *</label>
              <select value={values.department} onChange={handleChange} onBlur={handleBlue} name="department" id="" className='border p-3 rounded-md text-sm bg-gray-100' >
                <option value="" selected>Please Select</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
              </select>
            </div>

            <div className="flex flex-col w-full ">
              <label htmlFor="" className='text-xs '>Time *</label>
              <select value={values.date} onChange={handleChange} onBlur={handleBlue} name="date" id="" className='border p-3 rounded-md text-sm bg-gray-100'>
                <option selected className='text-gray-200'> 4:00 Available</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
              </select>
            </div>
          </div>

          <div>
            <textarea value={values.message} onChange={handleChange} onBlur={handleBlue} className='border w-full p-2 text-sm' rows="4" cols="3" name="message" id="" placeholder='Message' ></textarea>
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className='bg-[#23A6F0] p-3  rounded-md text-white'>Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
