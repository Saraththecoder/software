import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import FAQ from '../components/FAQ/FAQ';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const FAQPage: React.FC = () => {
  useDocumentMetadata({
    title: 'Frequently Asked Questions | Oryon Technologies',
    description: 'Find answers to common questions about IT recruiting, contracting compliance, our C2C hiring model, and onboarding options at Oryon Technologies.',
    keywords: 'IT staffing FAQ, C2C guidelines, contract recruitment questions, staffing compliance, Oryon Technologies FAQs'
  });

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
