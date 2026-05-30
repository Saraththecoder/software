import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import Contact from '../components/Contact/Contact';
import Newsletter from '../components/Newsletter/Newsletter';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const ContactPage: React.FC = () => {
  useDocumentMetadata({
    title: 'Contact Oryon Technologies | Hire Tech Talent Today',
    description: 'Get in touch with Oryon Technologies Inc. for professional IT staffing inquiries, hiring solutions, C2C vendor registration, or career opportunities.',
    keywords: 'contact IT recruiters, hire software developers, staffing agency phone, C2C vendor contact, register as contractor'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Connect With Our Recruitment Advisors" 
        breadcrumb="Contact" 
      />
      <Contact />
      <Newsletter />
    </motion.div>
  );
};

export default ContactPage;
