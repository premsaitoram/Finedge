import React from 'react';
import { motion } from 'framer-motion';
import finedge from '../assets/finedgeimg.png';

const About = () => {
    return (
     
    <motion.div 
      className="about text-white w-full bg-[#edf2f8] py-[10rem] px-4 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center uppercase mb-5 text-black">About us</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black">
        <motion.img
          className="w-[500px] mx-auto my-4"
          src={finedge}
          alt="finedge"
          whileInView={{ scale: [0, 1] }}      
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease:"easeInOut" }}
        />
        <motion.div
            className="flex flex-col justify-center"
            whileInView={{ opacity: 1 }}
            whileHover={{scale:1.1}}  
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type:"tween" }}
        >
          <p className="text-[#46364a]">FinEdge is a financial technology company that aims to revolutionize the way individuals manage their personal finances. With a team of experienced professionals and cutting-edge technology, FinEdge offers innovative solutions to help individuals make informed financial decisions and achieve their financial goals.</p>
          <br />
          <p className="text-[#6b7688]">Through their user-friendly platform, FinEdge provides comprehensive tools and resources that empower users to track their expenses, create budgets, and plan for the future. Their platform leverages advanced algorithms and data analysis to deliver personalized insights and recommendations tailored to each user's unique financial situation. With a focus on transparency and trust, FinEdge prioritizes user security and privacy, ensuring that sensitive financial information is safeguarded at all times. Their commitment to delivering exceptional user experiences has earned them a reputation as a trusted partner in personal finance management.</p>
        </motion.div>
      </div>
    </motion.div> 
  );
};

export default About;
