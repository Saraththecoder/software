export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote: "Oryon Technologies transformed our hiring process, connecting us with top-tier engineers faster than any other agency we've worked with.",
    name: "Aarav Sharma",
    role: "IT Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: 2,
    quote: "Their contract staffing solutions helped us scale our development team quickly and efficiently. Highly professional and reliable.",
    name: "Vikram Patel",
    role: "CEO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: 3,
    quote: "The team placed exceptional network engineers who seamlessly integrated with our existing infrastructure. Outstanding service!",
    name: "Rohan Mehta",
    role: "Network Administrator",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: 4,
    quote: "Their workforce solutions significantly improved our team's productivity and reduced hiring turnaround time. Highly recommended!",
    name: "Rahul Nair",
    role: "HR Head",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
  }
];
