import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import StepInfo from "../../StepInfo";

import styles from "./EnterNameStep.module.scss";
import React from "react";
import { MainContext } from "@/pages";
// import { MainContext } from "../../../pages";
// import { Avatar } from "../../Avatar";

export const EnterNameStep = () => {
  const [nameInput, setNameInput] = React.useState<string>("");
  const { onNextStep } = React.useContext(MainContext);
  const nextDisabled = !nameInput;
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setNameInput(event.target.value);
    }
  };
  const onClickNextStep = () => {
    onNextStep();
  };
  // const { onNextStep, userData, setFieldValue } = React.useContext(MainContext);
  // const [inputValue, setInputValue] = React.useState<string>(userData.fullname);
  // const nextDisabled = !inputValue;

  // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  // const onClickNextStep = () => {
  //   setFieldValue("fullname", inputValue);
  //   onNextStep();
  // };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Gaplashaylik :) Thnx!"
      />
      <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
        {/* <Avatar src={userData.avatarUrl} width="120px" height="120px" /> */}
        <div className="mt-30 mb-30">
          <input
            onChange={handleChangeInput}
            // onChange={handleChangeInput}
            // value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button disabled={nextDisabled} onClick={onClickNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
