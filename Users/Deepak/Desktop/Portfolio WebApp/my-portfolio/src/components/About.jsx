import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello there! I'm Deepak Kumar Behera , a passionate 23-year-old React JS developer actively seeking new opportunities to contribute my skills and expertise to exciting projects. With a strong foundation in front-end web development and a focus on React, I strive to create dynamic and user-friendly web applications that leave a lasting impact.
        </p>

        <br />

        <p className="text-xl">
        My core skill set includes:
        React , Redux Toolkit (RTK) ,Tailwind CSS ,HTML5 & CSS3 ,JavaScript .
        I am a passionate learner, a team player, and I pay meticulous attention to detail. Let's work together to create amazing web experiences!
        I have completed the MERN Stack development course from Coding Ninjas . And also familar with the languages like C++ . I have a good DSA knowledge in DSA which i have completed from Coding Ninjas .
        
        
        </p>
      </div>
    </div>
  );
};

export default About;