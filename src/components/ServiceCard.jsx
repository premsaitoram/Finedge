import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ image, title, description, buttondes }) => {
  return (
    <motion.div
        className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg"
        whileInView={{opacity:[0,1]}}
        whileHover={{ scale: [1, 0.9] }}
        transition={{ duration: 0.5, delayChildren:0.5 }}
    >
      <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={image} alt={title} />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-[#6b7688] font-bold">{description}</p>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        {buttondes}
      </button>
    </motion.div>
  );
};

export default ServiceCard;