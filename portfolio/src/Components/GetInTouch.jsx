import React from 'react';
import instagram from '../assets/instagram.png';
import x from '../assets/x.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png'

const GetInTouch = () => {
    const socialLinks = [
        {
            image: instagram,
            link: "https://www.instagram.com/sahill._07/"
        },
        {
            image: linkedin,
            link: "https://www.linkedin.com/in/sahil-bangar-5605b6235/"
        },
        {
            image: x,
            link: "https://x.com/SahilBangar10"
        },
        {
            image: github,
            link: "https://github.com/sahill-07"
        },
        {
            image: gmail,
            link: "mailto:sahilbangar72002@gmail.com"
        }
    ];

    return (
        <div id='contact' className='mt-20 flex flex-col gap-16'>
            <div className='font-semibold font-display text-5xl text-center pt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700'>
                Get In Touch
            </div>
            <div className='flex md:gap-16 justify-center items-center mb-14'>
                {
                    socialLinks.map((social, index) => (
                        <div key={index} className="socialcard">
                            <a className="social-link" href={social.link} target='_blank' rel='noopener noreferrer'>
                                <img src={social.image} alt="social link" className="w-10 h-10" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GetInTouch;
