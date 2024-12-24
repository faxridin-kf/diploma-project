import React from "react";
import { Avatar } from "../Avatar";

import styles from "./ConversationCard.module.scss";
import whiteBlockStyles from "../WhiteBlock/WhiteBlock.module.scss";
import clsx from "clsx";
// import { UserData } from "../../pages";

interface ConversationCard {
  title: string;
  guests: string[];
  avatars: string[];
  guestsCount: number;
  speakerCount: number;
}

export const ConversationCard: React.FC<ConversationCard> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakerCount,
}) => {
  return (
    <div className={clsx(whiteBlockStyles.block, styles.card, "mb-30")}>
      <h4 className={styles.title}>{title}</h4>
      <div className={clsx("d-flex mt-10", styles.content)}>
        <div className={styles.avatars}>
          {avatars.map((user, i) => (
            <Avatar
              key={user}
              width="45px"
              height="45px"
              src={user}
              className={
                avatars.length > 1 && i === avatars.length - 1
                  ? "lastAvatar"
                  : ""
              }
            />
          ))}
        </div>
        <div className={clsx(styles.info, "ml-10")}>
          <ul className={styles.users}>
            {guests.map((user, i) => (
              <li key={user}>
                {user}{" "}
                <img
                  src="/static/cloud.png"
                  alt="Cloud"
                  width={14}
                  height={14}
                />
              </li>
            ))}
          </ul>
          <ul className={styles.details}>
            <li>
              <img
                src="/static/user.svg"
                alt="Users count"
                width={12}
                height={12}
              />{" "}
              {guestsCount}
            </li>
            <li>
              <img
                className="ml-5"
                src="/static/message.svg"
                alt="Users count"
                width={12}
                height={12}
              />{" "}
              {speakerCount}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
