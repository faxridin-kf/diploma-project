import React from "react";
import styles from "./Profile.module.scss";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import clsx from "clsx";
import BackButton from "../BackButton";

interface ProfileProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  aboutText: string;
}

const ProfileComponent: React.FC<ProfileProps> = ({
  fullname,
  username,
  avatarUrl,
  aboutText,
}) => {
  return (
    <>
      <BackButton title="Back" href="/rooms" />
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Avatar src={avatarUrl} width="100px" height="100px" />
          <div className="d-flex flex-column ml-30 mr-30">
            <h2 className="mt-0 mb-0">{fullname}</h2>
            <h3 className={clsx(styles.username, "mt-0 mb-0")}>@{username}</h3>
          </div>
        </div>
        <Button className="follow-botton" color="blue">
          Follow
        </Button>
      </div>
      <p className={styles.about}> {aboutText}</p>
    </>
  );
};

export default ProfileComponent;
