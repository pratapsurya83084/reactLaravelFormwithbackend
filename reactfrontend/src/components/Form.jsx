
import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import $ from 'jquery';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    country: '',
    job: '',
    course_enroll_date:'',
    course:'',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

 



  const handleSubmit = async (e) => {
    e.preventDefault();

    // $.ajax({
    //   url:'submitform',
    //   type: 'POST',
    //   data: formData,
    //   success: function(response){
    //     navigate("/submit/success");
    //   }
    // })  

    // Fetch CSRF token from meta tag
    // const csrfMetaTag = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    for (const key in formData) {
      if (formData[key] === '') {
        alert(`Please fill out the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
        return;
      }
    }
  
    // Form validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    try {
      // console.log(formData);
      
      const response=await axios.post('/api/formsubmit',{
        method:"post",
        headers:{
          
          "Content-Type":'application/json',
        },
        body:JSON.stringify(formData),
      });
      // console.log(response);
      
      alert(response.data.message);

      if (response.data.message === "Data saved successfully!") {
        localStorage.setItem("userdetail", JSON.stringify(formData));
        navigate("/submit/success");  // Redirect to success page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-10 md:py-20 mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-20 md:mb-20 text-center">
        Your Success Story Starts Begins With BISJHINTUS Group
      </h2>

      {/* date and course name yet to be add */}
      <form onSubmit={handleSubmit}
      action=''
      
      method='post'
      className="max-w-lg mx-auto bg-[#009bb5] p-8 rounded-lg shadow-md">
        {/* your course opting*/}
        <div className="mb-6">
          <label htmlFor="course" className="block text-white font-bold mb-2">
          {/* Your Course Opting */}
          Your Desired Course
          </label>
          <input
            id="course"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Course You Are Signing Up For"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        {/* add input date  */}
        <div className="mb-6">
          <label htmlFor="course_enroll_date" className="block text-white font-bold mb-2">
          Course Journey Begins With Us
          </label>
          <input
            id="course_enroll_date"
            type="date"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="enter date"
            value={formData.course_enroll_date}
            onChange={handleChange}
            required
          />
        </div>
        {/* Full Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Your Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phone_number" className="block text-white font-bold mb-2">
            Your Phone Number
          </label>
          <input
            id="phone_number"
            type="tel"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your phone number"
            value={formData.phone_number}
            onChange={handleChange}
            pattern="\d{10}"
            inputMode="numeric"
            title="Phone number must be 10 digits"
            required
          />
        </div>

        {/* Country */}
        <div className="mb-6">
          <label htmlFor="country" className="block text-white font-bold mb-2">
            Your Country
          </label>
          <input
            id="country"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Role */}
        <div className="mb-6">
          <label htmlFor="job" className="block text-white font-bold mb-2">
            Your Job Role
          </label>
          <input
            id="job"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your job role"
            value={formData.job}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          {/* <Link to="/submit/success"></Link> */}
          <button
          // onClick={submitsuccess}
            type="submit"
            className="w-  text-xl bg-[#009bb5] border  text-white 
            shadow-xl  
            
            font-bold py-3 
            px-10 rounded"
          >
            ACT NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
