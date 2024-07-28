import React from 'react';
import { Link } from 'react-scroll';
import Wavinghand from '../assets/waving-hand.gif';
import { TypeAnimation } from 'react-type-animation';
import './mobile.css';
import Contact from './Contact';

const Home = () => {
  return (
    <div id='home' className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent dark:bg-gradient-to-br dark:from-[#060417] dark:via-[#0a0a0d] dark:to-[#1a1a1d] dark:text-white'>
      <div className=' flex flex-col md:flex-row justify-around items-center py-12'>
        {/* Contact Component for larger screens */}
        <div className='hidden lg:flex absolute bottom-5 left-1'>
          <Contact />
        </div>

        <div className='text-center md:text-left w-full md:w-2/3 p-6 md:pl-20 lg:pl-44'>
          <div className='text-2xl flex gap-1 justify-center md:justify-start'>
            <img src={Wavinghand} className='h-[30px] w-[30px] animate-bounce' alt="Waving Hand" />
            <h1><span>Hey!!</span></h1>
          </div>
          <h1 className='text-5xl font-bold my-4'>
            <span>I'm,</span>
            <span>
              <TypeAnimation
                sequence={[
                  " Sahil Bangar",
                  2000,
                  " a Web Developer",
                  2000,
                  " a Programmer",
                  2000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700'
              />
            </span>
          </h1>
          <p className='text-2xl mt-4'>
            I'm passionate about web development and dedicated to creating great user experiences. I use technologies like Tailwind CSS and ReactJS to build awesome web applications.
          </p>
          <Link to="about" className='inline-block mt-16 px-8 py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300'>
            Learn More
          </Link>
        </div>
        <div className='md:w-1/3 p-6 flex justify-center'>
          <div className="card">
            <div className="btn1"></div>
            <div className="btn2"></div>
            <div className="btn3"></div>
            <div className="btn4"></div>
            <div className="card-int">
              <div className="hello">
                Hello
                <span className="reveal">
                  <span className=''>I'm Sahil</span>
                </span>
              </div>
            </div>
            <div className="top">
              <div className="camera">
                <div className="int"></div>
              </div>
              <div className="speaker"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
