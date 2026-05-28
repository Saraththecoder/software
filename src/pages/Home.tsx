import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import ServicesCards from '../components/ServicesCards/ServicesCards';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import LogoMarquee from '../components/LogoMarquee/LogoMarquee';
import CTABanner from '../components/CTABanner/CTABanner';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesCards />
      <StatsCounter />
      <WhyChooseUs />
      <LogoMarquee />
      <CTABanner />
    </motion.div>
  );
};

export default Home;
