export interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogData: BlogItem[] = [
  {
    id: 1,
    title: "IT Staffing Trends in 2025: What Businesses Need to Know",
    excerpt: "The demand for tech talent is at an all-time high. Here's how modern businesses are adapting their hiring strategies to navigate global talent shortages.",
    category: "IT Recruitment",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How Contract Staffing Reduces Hiring Costs by 40%",
    excerpt: "Flexible workforce models are reshaping how companies build their engineering teams in a post-remote world, providing speed, skill, and dynamic budgeting.",
    category: "Contract Staffing",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Corp-to-Corp vs W2: What's Right for Your Business?",
    excerpt: "Understanding the difference between C2C and W2 engagements can save your business thousands in compliance costs, tax structures, and operational legalities.",
    category: "C2C Hiring",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Future of IT Consulting: AI, Automation, and People",
    excerpt: "As AI transforms enterprise workflows, the role of technology consultants is evolving faster than ever before. Explore our human-in-the-loop strategies.",
    category: "IT Consulting",
    date: "May 05, 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    readTime: "7 min read"
  }
];
