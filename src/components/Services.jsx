import React from 'react';
import { motion } from 'framer-motion';
import Moneytransfer from '../assets/Moneytransfer.png';
import business from '../assets/business.jpg';
import payment from '../assets/payment.png';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      image: Moneytransfer,
      title: 'Individual Money Transfers',
      description: 'With FinEdge, individuals can easily transfer money to friends, family, or other accounts securely and conveniently. Whether it\'s sending funds domestically or internationally, users can initiate quick and hassle-free transfers.',
      buttondes: 'Transfer Money'
    },
    {
      image: business,
      title: 'Business Payments',
      description: 'Streamline your business payments with ease. FinEdge offers solutions for businesses to manage their payments efficiently, from payroll to vendor payments. Simplify the complexities of business transactions and improve efficiency.',
      buttondes: 'Make Payment',
    },
    {
      image: payment,
      title: 'Real-Time Payment Tracking',
      description: 'Track your payments in real-time for accurate records. FinEdge provides a real-time payment tracking feature, allowing you to monitor the status and progress of your payments. Stay on top of your financial transactions with ease.',
      buttondes: 'Track payment',
    },
  ];

  return (
    <motion.div
        className="services w-full py-[10rem] px-4 bg-[#ffffff]"
        initial={{ opacity: [0, 1] }}
        whileInView={{opacity:[0,1]}}
        whileHover={{ scale: [1] }}
        transition={{ duration: 0.25 }}
    >
      <h2 className="text-3xl font-bold text-center mb-20">Our Services</h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;