import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import ServicesCards from '../components/ServicesCards/ServicesCards';
import Services from '../components/Services/Services';
import StatisticsBar from '../components/StatisticsBar/StatisticsBar';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const ServicesPage: React.FC = () => {
  useDocumentMetadata({
    title: 'IT Recruiting, Staffing & C2C Hiring Services | Oryon Technologies',
    description: 'Explore our specialized recruitment services, including contract staffing, full-time IT recruitment, executive tech search, and Corp-to-Corp (C2C) vendor consulting.',
    keywords: 'IT staffing services, professional recruiting, contract staffing agency, C2C solutions, tech hiring, remote developers'
  });

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
