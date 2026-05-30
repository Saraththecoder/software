import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import Blog from '../components/Blog/Blog';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const BlogPage: React.FC = () => {
  useDocumentMetadata({
    title: 'Technical Insights & Staffing Blog | Oryon Technologies',
    description: 'Read the latest insights on tech recruitment, C2C hiring trends, local IT staffing updates, and software industry strategies from Oryon Technologies.',
    keywords: 'tech recruitment trends, staffing blog, IT hiring insights, software consulting articles, Oryon Tech blog'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Technical Insights & Market Trends" 
        breadcrumb="Blog" 
      />
      <Blog />
    </motion.div>
  );
};

export default BlogPage;
