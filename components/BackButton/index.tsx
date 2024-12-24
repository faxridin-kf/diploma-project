import { ACTION_HMR_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types";
import Link from "next/link";
import React from "react";
type BackButtonProps = {
  title: string;
  href: string;
};
const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <>
      <Link href={href}>
        <div className="d-flex mb-30">
          <img src="/static/back-arrow.svg" alt="back" className="mr-30" />
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
};
export default BackButton;
