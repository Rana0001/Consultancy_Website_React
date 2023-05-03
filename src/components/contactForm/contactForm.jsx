import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.aakashlabs.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };



  return (
    <section className="py-10 lg:py-28 justify-center " id='contactus'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full mb-10 lg:mb-0 px-4">
          <iframe title='Google Map' className='h-56 sm:h-96 w-full lg:w-72 border-4 shadow-lg' id="gmap_canvas" src="https://maps.google.com/maps?q=kathmandu&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <div className="w-full lg:w-1/2 px-4 ">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              placeholder="Enter your message here..."
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
        </div>
        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded" role="alert">
            <strong>Success!</strong> Your message has been sent.
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded" role="alert">
            <strong>Error!</strong> There was an error sending your message. Please try again later.
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
);
};

export default ContactForm;