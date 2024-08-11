
import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact_no: '',
    country: '',
    jobrole: '',
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
  
    // Check if all fields are filled
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
      const response = await axios.post('http://localhost/form/phpbackend/submit.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log(response);
      navigate("/submit/success")
      
      // Handle success response
      // alert(response.data.message);
  
      if (response.data.message === "Form submitted successfully!") {
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
      method='POST'
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
          <label htmlFor="date" className="block text-white font-bold mb-2">
          Course Journey Begins With Us
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="enter date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        {/* Full Name */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-white font-bold mb-2">
            Your Full Name
          </label>
          <input
            id="username"
            type="phoneNumber"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your name"
            value={formData.username}
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
          <label htmlFor="contact_no" className="block text-white font-bold mb-2">
            Your Phone Number
          </label>
          <input
            id="contact_no"
            type="tel"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your phone number"
            value={formData.contact_no}
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
          <label htmlFor="jobrole" className="block text-white font-bold mb-2">
            Your Job Role
          </label>
          <input
            id="jobrole"
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your job role"
            value={formData.jobrole}
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
