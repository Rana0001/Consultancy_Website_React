import React from 'react';
import {FaLaptopCode,FaMobileAlt,FaShopify,FaAws} from 'react-icons/fa';
import {BiBarChart} from 'react-icons/bi';
import {BsFiletypeSql} from 'react-icons/bs';



const cardsData = [
  {
    id: 1,
    icon: <FaLaptopCode size={50}></ FaLaptopCode>,
    heading: 'Web Development',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },
  {
    id: 2,
    icon: <FaMobileAlt size={50}></FaMobileAlt>,
    heading: 'Mobile Development',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },
  {
    id: 3,
    icon: <BiBarChart size={50}></BiBarChart>,
    heading: 'Digital Marketing',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },
  {
    id: 4,
    icon: <FaShopify size={50}></FaShopify>,
    heading: 'E-Commerce Solutions',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },
  {
    id: 5,
    icon: <FaAws size={50}></FaAws>,
    heading: 'Cloud Services',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },  {
    id: 6,
    icon: <BsFiletypeSql size={50}></BsFiletypeSql>,
    heading: 'Database Administration',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Learn More',
  },
];

function CardSelection(props){
    const data = props.card
    if(data.id === 1){
        return <div className="bg-white border xl:col-start-2 xl:col-span-2 hover:outline-blue-500 hover:outline-offset-2 hover:outline rounded-lg shadow-lg px-6 py-8 text-center" key={data.id}>
        <div className="text-4xl text-blue-500 mb-4 flex justify-center">
          {data.icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{data.heading}</h3>
        <p className="text-gray-600 text-sm mb-4">{data.label}</p>
        <button className="bg-[#289AE2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {data.button}
        </button>
      </div>
    }else if(data.id === 4){
        return <div className="bg-white border xl:col-start-2 xl:col-span-2 hover:outline-blue-500 hover:outline-offset-2 hover:outline rounded-lg shadow-lg px-6 py-8 text-center" key={data.id}>
        <div className="text-4xl text-blue-500 mb-4 flex justify-center">
          {data.icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{data.heading}</h3>
        <p className="text-gray-600 text-sm mb-4">{data.label}</p>
        <button className="bg-[#289AE2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {data.button}
        </button>
      </div>
    }else if(data.id !== 1 && data.id !== 4){
       return <div className="bg-white border hover:outline-blue-500 hover:outline-offset-2 hover:outline rounded-lg shadow-lg px-6 py-8 text-center" key={data.id}>
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {data.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{data.heading}</h3>
              <p className="text-gray-600 text-sm mb-4">{data.label}</p>
              <button className="bg-[#289AE2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {data.button}
              </button>
            </div>
    }
    
}

const SectionWithCards = () => {
  return (
    <section className="py-10" id='oursevices'>
      <div className="container mx-auto">
        <h1 className='text-3xl text-center mb-6 font-bold'>Our Services</h1>
        <div className="grid xl:grid-cols-6 sm:grid-cols-2 gap-10 md:py-5">
          {cardsData.map(card => (
            <>
            <CardSelection card={card}></CardSelection>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWithCards;