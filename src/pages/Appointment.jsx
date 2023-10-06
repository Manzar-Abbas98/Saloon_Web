import React, { useState } from 'react';
import { Footer, Navbar } from '../components';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: 'Hair Cutting',
    agreeToTerms: false,
    receivePromotions: false,
    isOlderThan18: false,
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-full md:w-1/2 mx-auto mt-12 py-14 bg-white p-12 rounded-3xl">
        <form onSubmit={handleFormSubmit}>
        <h1 className='font-extrabold text-xl pb-3'>Appointment Here!</h1>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="First name"
              required
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Last name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Email address"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Phone number"
              required
            />
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Area Code"
              required
            />
          </div>

          <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">
            Service Required
          </label>
          <select
            id="service"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#3f2020] f block w-full p-2.5"
          >
            <option>Hair Cutting</option>
            <option>Hair Dryer</option>
            <option>Facials</option>
            <option>Styles</option>
          </select>

          <label htmlFor="user_avatar" className="block m-2 text-sm font-medium text-gray-900">
            Upload file
          </label>
          <input
            className="block w-full text-sm my-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="user_avatar"
            type="file"
          />

          <fieldset>
            <legend className="sr-only">Checkbox variants</legend>

            <div className="flex items-center mb-4">
              <input

                id="checkbox-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
              />
              <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">
                I agree to the terms and conditions.
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
              />
              <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900">
                I want to get promotional offers
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-3"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
              />
              <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900">
                I am 18 years or older
              </label>
            </div>
          </fieldset>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Other details you may wish to highlight
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            type="submit"
            className="text-white bg-[#3F2020] hover:bg-[#2c1212] text-sm w-full md:w-auto px-5 py-2.5 text-center mt-4 rounded-3xl"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
