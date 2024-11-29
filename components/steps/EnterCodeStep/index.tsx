import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { WhiteBlock } from "../../WhiteBlock";
import StepInfo from "../../StepInfo";
import styles from "./EnterCodeStep.module.scss";
import { Button } from "../../Button";

export const EnterCodeStep = () => {
  const [codes, setCodes] = React.useState(["", "", "", ""]);
  const nextDisabled = codes.some((v) => !v) || codes.length < 4;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute("id"));
    const value = event.target.value;

    if (!/^[0-9]*$/.test(value) && value !== "") {
      return;
    }

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    if (value && event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const index = Number(event.currentTarget.getAttribute("id"));

    const target = event.currentTarget as HTMLInputElement;

    if (
      event.key === "Backspace" &&
      codes[index] === "" &&
      target.previousElementSibling
    ) {
      (target.previousElementSibling as HTMLInputElement).focus();
    }

    if (event.key === "ArrowRight" && target.nextElementSibling) {
      (target.nextElementSibling as HTMLInputElement).focus();
    }

    if (event.key === "ArrowLeft" && target.previousElementSibling) {
      (target.previousElementSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
      <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={styles.codeInput}>
          {codes.map((code, index) => (
            <input
              key={index}
              type="tel"
              placeholder="X"
              maxLength={1}
              id={String(index)}
              onChange={handleChangeInput}
              onKeyDown={handleKeyDown}
              value={code}
            />
          ))}
          <Button disabled={nextDisabled} aria-disabled={nextDisabled}>
            Next
            <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next" />
          </Button>
        </div>
      </WhiteBlock>

      <div className="text-center">
        <div className="loader"></div>
        <h3 className="mt-5">Activation in progress ...</h3>
      </div>
    </div>
  );
};
