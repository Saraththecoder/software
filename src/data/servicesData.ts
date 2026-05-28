export interface ServiceItem {
  id: number;
  title: string;
  iconName: string; // Used to dynamically map Lucide icons
  iconEmoji: string;
  previewFeatures: string[];
  fullPoints: string[];
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "IT Recruitment",
    iconName: "Users",
    iconEmoji: "👥",
    previewFeatures: ["Full-time hiring", "Contract staffing", "C2C", "Executive search"],
    fullPoints: ["Full-time Hiring", "Executive Search", "Tech Talent Sourcing", "Resume Screening"],
    description: "Connect with pre-vetted, top-tier engineering talent and executive leaders custom-fit for your specific tech stack and company culture."
  },
  {
    id: 2,
    title: "Contract Staffing",
    iconName: "ClipboardList",
    iconEmoji: "📋",
    previewFeatures: ["Short-term", "Project-based", "Flexible contracts", "Quick deployment"],
    fullPoints: ["Short-term Contracts", "Project-based Staffing", "Flexible Engagements", "Quick Deployment"],
    description: "Scale your technology teams rapidly with flexible, temporary, or project-based tech professionals without long-term overhead."
  },
  {
    id: 3,
    title: "Corp-to-Corp Hiring",
    iconName: "Handshake",
    iconEmoji: "🤝",
    previewFeatures: ["Vendor management", "C2C contracts", "Compliance handling"],
    fullPoints: ["C2C Contract Management", "Vendor Compliance", "Background Verification", "Legal Documentation"],
    description: "Streamline C2C engagements through high-compliance vendor management networks, structured contracts, and thorough verification processes."
  },
  {
    id: 4,
    title: "Technology Consulting",
    iconName: "Lightbulb",
    iconEmoji: "💡",
    previewFeatures: ["IT strategy", "Digital transformation", "Architecture review"],
    fullPoints: ["IT Strategy & Roadmap", "Digital Transformation", "Architecture Consulting", "Technology Assessment"],
    description: "Align your tech stack with long-term business goals under guidance from strategic consultants and lead enterprise architects."
  },
  {
    id: 5,
    title: "Workforce Solutions",
    iconName: "Briefcase",
    iconEmoji: "🏗️",
    previewFeatures: ["Team augmentation", "Managed workforce", "Onsite/remote"],
    fullPoints: ["Team Augmentation", "Managed Workforce", "Onsite & Remote Teams", "Dedicated Resource Pools"],
    description: "Enhance team productivity and capacity with dynamic staffing models, including hybrid, remote, and onsite dedicated talent structures."
  },
  {
    id: 6,
    title: "IT Outsourcing",
    iconName: "Monitor",
    iconEmoji: "🖥️",
    previewFeatures: ["Help desk", "Hardware support", "24/7 managed services"],
    fullPoints: ["Managed IT Services", "Help Desk Support", "Hardware & Infrastructure", "24/7 Support"],
    description: "Delegate your support services to our always-on network operations and help desk team, ensuring 99.9% operational uptime."
  }
];
