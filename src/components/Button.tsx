import { FC, ReactNode } from "react";
import "./scss/Button.scss";

interface ButtonProps {
  isPrimary?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  isPrimary = true,
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${isPrimary ? "button--primary" : ""} button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
