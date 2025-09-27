import { Review } from '../types';

export const reviews: Review[] = [
  {
    author: {
      name: 'Michael Johnson',
      imageUrl: '/images/avatar/avatar-1.png',
      designation: 'CTO',
      company: 'Global Fintech Solutions',
    },
    comment: `Ajiri impressed me with his clean code and mastery of modern frameworks 
    like Next.js and Flutter. He adapts quickly to complex requirements 
    and ensures scalability from day one. His work reflects both speed 
    and precision—rare qualities in developers today.`,
  },
  {
    author: {
      name: 'Fatima Hassan',
      imageUrl: '/images/avatar/avatar-2.png',
      designation: 'CEO',
      company: 'SME Connect Hub',
    },
    comment: `Ajiri developed a custom POS & Inventory Management System 
    for our network of retailers. He was attentive to every detail, 
    delivered on time, and provided continuous support. 
    The analytics dashboard has improved our decision-making significantly.`,
  },
  {
    author: {
      name: 'Samuel Adeyemi',
      imageUrl: '/images/avatar/avatar-3.png',
      designation: 'Team Lead, Digital Innovation',
      company: 'Jinncy Inc.',
    },
    comment: `Ajiri consistently delivers beyond expectations. 
    At Jinncy, he has been instrumental in building SaaS prototypes that address 
    real African business challenges. His leadership in both frontend and backend 
    development has raised the standard for our entire team.`,
  },
];
