import React from 'react';
import bgImage from '../../assets/carousel/carousel-1.jpg';
import { Button } from 'flowbite-react';



const AboutUs = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <section
      className="xl:h-[75vh] relative bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
     
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="lg:w-1/2 justify-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Consultancy Services
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
      
    </section>
  );
};

export default AboutUs;
