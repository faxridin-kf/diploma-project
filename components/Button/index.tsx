import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from "./Button.module.scss";

// Define a type for the button colors
type ButtonColor = "green" | "gray" | "blue";

// Define the props interface
interface ButtonProps {
  children: ReactNode; // Allows any valid React node as children
  disabled?: boolean; // Optional disabled prop
  color?: ButtonColor; // Optional color prop, constrained to defined colors
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional className prop
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false, // Default value for disabled
  color,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        className,
        styles.button,
        color
          ? styles[`button${color.charAt(0).toUpperCase() + color.slice(1)}`]
          : "",
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
