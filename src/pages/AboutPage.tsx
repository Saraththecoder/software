import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import About from '../components/About/About';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import Testimonials from '../components/Testimonials/Testimonials';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Empowering Growth Through Tech Talent" 
        breadcrumb="About Us" 
      />
      <About />
      <StatsCounter />
      <Testimonials />
    </motion.div>
  );
};

export default AboutPage;
