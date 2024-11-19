import clsx from "clsx";
import styles from "./WhiteBlock.module.scss";
import React, { ReactNode } from "react";

// Define the props interface
interface WhiteBlockProps {
  children: ReactNode; // Allows any valid React node as children
  className?: string; // Optional className prop
}

export const WhiteBlock: React.FC<WhiteBlockProps> = ({
  children,
  className,
}) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
