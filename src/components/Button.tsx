import { FC, ReactNode } from "react";
import "./scss/Button.scss";

interface ButtonProps {
  isPrimary?: boolean;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  isPrimary = true,
  children,
  className = "",
}) => {
  return (
    <button
      className={`${isPrimary ? "button--primary" : ""} button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
