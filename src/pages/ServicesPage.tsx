import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import ServicesCards from '../components/ServicesCards/ServicesCards';
import Services from '../components/Services/Services';
import StatisticsBar from '../components/StatisticsBar/StatisticsBar';

export const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Our Staffing Divisions & Solutions" 
        breadcrumb="Services" 
      />
      <ServicesCards />
      <Services />
      <StatisticsBar />
    </motion.div>
  );
};

export default ServicesPage;
