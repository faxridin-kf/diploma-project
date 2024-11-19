import React from "react";
import clsx from "clsx";
import styles from "./StepInfo.module.scss";

// Define the props interface
interface StepInfoProps {
  title: string; // Title of the step
  description?: string; // Optional description
  icon: string; // URL of the icon image
}

const StepInfo: React.FC<StepInfoProps> = ({ title, description, icon }) => {
  return (
    <div className={clsx(styles.block, "text-center")}>
      <div>
        <img className={styles.img} src={icon} alt="Step picture" />
      </div>
      <b className={styles.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default StepInfo;
