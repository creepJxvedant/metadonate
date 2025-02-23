import React from 'react';

const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
  const baseStyles = 'font-bold rounded transition-colors duration-300';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
 return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
