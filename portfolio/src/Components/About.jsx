import React from 'react';
import './styles.css';
import Animation from '../assets/Animation - 1721993563214.json';
import Lottie from 'lottie-react';
import { DownloadButton } from './DownloadButton';

const About = () => {
  return (
    <div id='about' className='font-display flex flex-col items-center bg-white to-transparent dark:bg-gradient-to-br dark:from-[#060417] dark:via-[#0a0a0d] dark:to-[#1a1a1d] dark:text-white'>
        <h1 className='font-semibold text-6xl pt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700'>
            About
        </h1>
        <div className='flex flex-col md:flex-row items-center mt-16 gap-8'>
            <div className='md:w-[550px] md:m-24'>
                <Lottie animationData={Animation} className='w-full h-auto' />
            </div>
            <div className='md:w-1/2 p-10 flex flex-col mx-auto gap-5 text-xl '>
                <h1 className='text-black dark:text-white text-3xl md:text-4xl font-medium'>Sahil Jagan Bangar</h1>
                <p className='font-medium leading-relaxed md:pt-4 text-gray-600 dark:text-gray-300'>
                    Hey there! I'm a Computer Engineering Undergraduate from Terna Engineering College with a CGPA of 9.25 and a Technology Enthusiast. I'm a passionate FrontEnd Web Developer and have also tried my hands on Competitive Programming! I use the latest tools and enjoy working with teams to create great web applications.
                </p> 
                <a href="https://drive.google.com/file/d/1_t6uQyCH1j7_ohOhm6qYsH17N3oKkWGs/view?usp=sharing"> 
                <div className='self-center md:self-start md:h-10 md:text-xs'>
                    <DownloadButton />
                </div> 
                </a>             
            </div>
        </div>
    </div>               
  )
}

export default About;
