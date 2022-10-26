import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import OurPartners from './OurPartners';
import PartnersList from './PartnersList';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
        <Navbar/>
        <OurPartners/>
        <PartnersList/>
    <div className='w-full py-[10rem] px-4 bg-white'>
       <div className='text-center'>
                <h2 className='text-5xl font-bold'>All-In-One Platform</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center mt-16'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-Pink-600'>100%</p>
                    <p className='text-black mt-2'>Tasks Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-Pink-600'>24/7</p>
                    <p className='text-black mt-2'>Support</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-Pink-600'>100K</p>
                    <p className='text-black mt-2'>Poverty Saved</p>
                </div>
            </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-20'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>We Support</h2>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Delectus tenetur iusto laudantium dolor aliquid nemo molestiae porro consequuntur 
                    repellendus neque enim beatae quis suscipit, veniam maxime. Fuga aliquam asperiores ducimus!
              </p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-50 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Find Jobs</h2>              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Delectus tenetur iusto laudantium dolor aliquid nemo molestiae porro consequuntur 
                    repellendus neque enim beatae quis suscipit, veniam maxime. Fuga aliquam asperiores ducimus!
                  </p>
              <button className='bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Find Now</button>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Community</h2>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Delectus tenetur iusto laudantium dolor aliquid nemo molestiae porro consequuntur 
                    repellendus neque enim beatae quis suscipit, veniam maxime. Fuga aliquam asperiores ducimus!
                  </p>
              </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;