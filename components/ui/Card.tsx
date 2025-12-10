import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-lg transition-all' : '';
  
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}