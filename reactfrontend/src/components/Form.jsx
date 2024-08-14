import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Form = () => {

  // const [csrfToken, setCsrfToken] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        country: '',
        job: '',
        course_enroll_date: '',
        course: '',
    });

    // const [csrfToken, setCsrfToken] = useState('');
    const navigate = useNavigate();

 
  // Function to get the CSRF token from the meta tag
const getCsrfToken = () => {
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  console.log(metaTag);
  
  if (metaTag) {
      return metaTag.getAttribute('content');
  }
  return null;
};
 
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

 
    // onsubmit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Ensure csrfToken is not empty before making the request
        const csrfToken = getCsrfToken();
        // if (!csrfToken) {
        //     console.error('CSRF token not found');
        //     return;
        // }
       
      
       try {
          const response = await axios.post('/api/formsubmit', formData, {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrfToken,
            },
          });

            console.log(response.data);
            // Redirect or update the UI as needed
            navigate('/submit/success');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-10 md:py-20 mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-20 md:mb-20 text-center">
                Your Success Story Starts With BISJHINTUS Group
            </h2>
            <form 
            // action='/api/formsubmit'
           
            onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#009bb5] p-8 rounded-lg shadow-md">
                {/* Your form fields */}
                <div className="mb-6">
                    <label htmlFor="course" className="block text-white font-bold mb-2">Your Desired Course</label>
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

                <div className="mb-6">
                    <label htmlFor="course_enroll_date" className="block text-white font-bold mb-2">Course Journey Begins With Us</label>
                    <input
                        id="course_enroll_date"
                        type="date"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={formData.course_enroll_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="name" className="block text-white font-bold mb-2">Your Full Name</label>
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

                <div className="mb-6">
                    <label htmlFor="email" className="block text-white font-bold mb-2">Your Email</label>
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

                <div className="mb-6">
                    <label htmlFor="phone_number" className="block text-white font-bold mb-2">Your Phone Number</label>
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

                <div className="mb-6">
                    <label htmlFor="country" className="block text-white font-bold mb-2">Your Country</label>
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

                <div className="mb-6">
                    <label htmlFor="job" className="block text-white font-bold mb-2">Your Job Role</label>
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

                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full text-xl bg-[#009bb5] border text-white shadow-xl font-bold py-3 px-10 rounded"
                    >
                        ACT NOW
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
