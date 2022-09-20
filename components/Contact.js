import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='top-40 bg-white shadow rounded py-12 lg:px-28 px-8'>
      <h1 className='md:text-3xl text-xl font-bold leading-7 text-center text-gray-700'>
        Send a Message
      </h1>
      <div className='md:flex items-center mt-12'>
        <div className='md:w-72 flex flex-col'>
          <label
            htmlFor='fullname'
            className='text-base font-semibold leading-none text-gray-800'>
            Full Name
          </label>
          <input
            tabIndex={0}
            arial-label='Please input name'
            type='name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name='fullname'
            className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
            placeholder='Please input  name'
          />
        </div>
        <div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
          <label
            htmlFor='email'
            className='text-base font-semibold leading-none text-gray-800'>
            Email Address
          </label>
          <input
            tabIndex={0}
            arial-label='Please input email address'
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
            placeholder='Please input email address'
          />
        </div>
      </div>
      <div>
        <div className='w-full flex flex-col mt-8'>
          <label
            htmlFor='message'
            className='text-base font-semibold leading-none text-gray-800'>
            Message
          </label>
          <textarea
            tabIndex={0}
            aria-label='leave a message'
            role='textbox'
            type='text'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none'
            defaultValue={''}
          />
        </div>
      </div>
      {/* <p className='text-xs leading-3 text-gray-600 mt-4'>
        By clicking submit you agree to our terms of service, privacy policy and
        how we use data as stated
      </p> */}
      <div className='flex items-center justify-center w-full'>
        <button
          type='submit'
          className='mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none'>
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default Contact;
