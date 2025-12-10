import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all inline-block text-center';
  
  const variants = {
    primary: 'text-white hover:scale-105',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const style = variant === 'primary' ? {
    backgroundColor: 'var(--accent)',
    color: '#0A2540'
  } : {};
  
  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}