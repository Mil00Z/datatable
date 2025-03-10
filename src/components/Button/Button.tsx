import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

 const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary'
}) => {
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
  };

  const style = {
    ...baseStyle,
    ...variantStyles[variant],
  };

  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button