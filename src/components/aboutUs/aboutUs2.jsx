import React from 'react';
import { Button } from 'flowbite-react';



const AboutUs = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <section
      className="xl:h-[75vh] relative bg-no-repeat bg-center bg-cover mb-1"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573167582108-000d05b2faad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)` }}
      id='aboutUs'
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>
        <div className="md:col-start-2 col-start-1 md:w-full">
          <h2 className="text-4xl font-bold text-white mb-5">
            About Us
          </h2>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
            eros eu quam iaculis dapibus. Sed ac quam eget velit porttitor
            elementum. Vivamus condimentum, mauris in rutrum fermentum, odio
            lacus lacinia leo, vel efficitur felis purus non ex. Praesent
            aliquet augue vel enim ultricies sagittis. Nam bibendum pretium
            dolor, eu pretium quam cursus vel. Sed vel nunc nec nibh lacinia
            imperdiet. Fusce posuere vel quam eu tincidunt. Maecenas non
            pellentesque turpis.
          </p>
          <Button className='mt-5 !rounded-full' size="lg" gradientDuoTone="cyanToBlue" onClick={handleClick}>Get Free Consultation</Button>
        </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default AboutUs;