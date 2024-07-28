import React from 'react';

const Coding = () => {
    const data = [
        {
            name: "GeeksForGeeks",
            link: "https://www.geeksforgeeks.org/user/sahilbangar72002/",
            image: "https://geeksforgeeks.zohorecruit.in/recruit/viewCareerImage.do?page_id=61093000000211152&type=logo&file_name=GG_Logo.png",
        },
        {
            name: "LeetCode",
            link: "https://leetcode.com/u/sahill_07/",
            image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/LeetCode_logo_black.png",
        },
        {
            name: "Coding Ninjas",
            link: "https://www.naukri.com/code360/profile/sahill_07",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRWFMWR0ZVJByGadksSMu-4evEfgQfORMEg&s",
        },
    ];

    return (
        <div>
            <div className='flex flex-col text-center p-2 mt-20 text-5xl font-semibold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700 '>
                Competitive Programming
            </div>
            <div className='flex flex-wrap gap-10 mt-16 justify-center '>
            
            {data.map(({ name, link, image }) => (
                <div
                    key={name}
                    className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-900 dark:text-white shadow-lg group w-64 sm:w-80 hover:shadow-xl hover:scale-105"
                >
                    <div
                        className="absolute inset-0 z-[-1]   transition-transform duration-500 transform group-hover:scale-110 group-hover:shadow-lg"
                    ></div>

                    <div className="flex flex-col items-center p-4">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-20 h-20 object-cover rounded-full mb-3"
                        />
                        <h1 className="text-xl font-bold dark:text-white mb-2">{name}</h1>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm"
                        >
                            <button className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md group-hover:from-purple-700 group-hover:to-indigo-700 transition-colors duration-300 dark:from-indigo-500 dark:to-blue-500 dark:group-hover:from-indigo-700 dark:group-hover:to-blue-700">
                                View Profile
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
    );
};

export default Coding;
