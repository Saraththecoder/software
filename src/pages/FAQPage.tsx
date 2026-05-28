import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import FAQ from '../components/FAQ/FAQ';

export const FAQPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Frequently Asked Questions" 
        breadcrumb="FAQs" 
      />
      <FAQ />
    </motion.div>
  );
};

export default FAQPage;
