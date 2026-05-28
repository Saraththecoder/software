import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import Blog from '../components/Blog/Blog';

export const BlogPage: React.FC = () => {
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
