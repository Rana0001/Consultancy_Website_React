import React from 'react';

import logo from '../../assets/images/logo.png';
import './footer.css';

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    
    <div className='custom-footer max-w-full '>
      <div className='max-w-[1280px] mx-auto pt-8 md:justify-items-center grid md:grid-cols-2'>
      <div className='mx-10 md:mx-auto'>
        <img src={logo} className='w-52' alt="logo"></img>
        <p className='max-w-md py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        
          <p className='text-lg font-semibold '>Follow us:</p>
          <div className='flex flex-wrap mb-3'>
          <a href='https://www.facebook.com/magar.prashant.79'><FaFacebookSquare size={30} className=' text-blue-500'/></a>
          <a href='https://www.instagram.com/magarprashant10/'><FaInstagram size={30} className='mx-2 sm:mx-5 text-red-400'/></a>
          <a href='https://www.twitter.com/'><FaTwitterSquare size={30} className='mx-2 sm:mx-5 text-[#0d9df7]'/></a>
          <a href="https://github.com/Rana0001"><FaGithubSquare size={30} className='mx-2 sm:mx-5 text-[#000000]'/></a>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3s lg:grid-cols-4 justify-between lg:gap-20 mx-10'>
        <div className='my-2'>
          <h6 className='font-semibold text-black mt-3'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm hover:underline'>Analytics</li>
            <li className='py-2 text-sm hover:underline'>Marketing</li>
            <li className='py-2 text-sm hover:underline'>Commerce</li>
            <li className='py-2 text-sm hover:underline'>Insights</li>
          </ul>
        </div>
        <div className='my-5'>
          <h6 className='font-semibold text-black'>Support</h6>
          <ul>
            <li className='py-2 text-sm hover:underline'>Pricing</li>
            <li className='py-2 text-sm hover:underline'>Documentation</li>
            <li className='py-2 text-sm hover:underline'>Guides</li>
            <li className='py-2 text-sm hover:underline'>API Status</li>
          </ul>
        </div>
        <div className='my-5'>
          <h6 className='font-semibold text-black'>Company</h6>
          <ul>
            <li className='py-2 text-sm hover:underline'>About</li>
            <li className='py-2 text-sm hover:underline'>Blog</li>
            <li className='py-2 text-sm hover:underline'>Jobs</li>
            <li className='py-2 text-sm hover:underline'>Press</li>
            <li className='py-2 text-sm hover:underline'>Careers</li>
          </ul>
        </div>
        <div className='my-5'>
          <h6 className='font-semibold text-black'>Legal</h6>
          <ul>
            <li className='py-2 text-sm hover:underline'>Claim</li>
            <li className='py-2 text-sm hover:underline'>Policy</li>
            <li className='py-2 text-sm hover:underline'>Terms</li>
          </ul>
        </div>
      </div>
      </div>
    
    <p className='w-full text-center font-medium pb-4'>Copyright &copy; 2023</p>

   
    </div>
   

  );
};

export default Footer;