import React from 'react';
import { CONTACT } from '../constants/indexText';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{duration: 0.5}}
      className='border-b border-neutral-900 pb-20'>
        <h1 className='text-center justify-center text-4xl'>Git TO Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='my-4'>{CONTACT.email}</p>
        </div>
    </motion.div>
    
  );
};

export default Contact;
