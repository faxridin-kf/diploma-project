// import React from "react";
// import clsx from "clsx";
// import NumberFormat from "react-number-format";
// import { WhiteBlock } from "../../WhiteBlock";
// import { Button } from "../../Button";
// import StepInfo from "../../StepInfo";

// import styles from "./EnterPhoneStep.module.scss";

// type InputValueState = {
//   formattedValue: string;
//   value: string;
// };

// export const EnterPhoneStep: React.FC = () => {
//   const [values, setValues] = React.useState<InputValueState>(
//     {} as InputValueState,
//   );

//   const nextDisabled =
//     !values.formattedValue || values.formattedValue.includes("_");

//   return (
//     <div className={styles.block}>
//       <StepInfo
//         icon="/static/phone.png"
//         title="Enter your phone #"
//         description="We will send you a confirmation code"
//       />
//       <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
//         <div className={clsx("mb-30", styles.input)}>
//           <img src="/static/russian-flag.png" alt="flag" width={24} />
//           <NumberFormat
//             className="field"
//             format="+### (91) ###-##-##"
//             mask="_"
//             placeholder="+998 (91) 333-22-11"
//             value={values.value}
//             onValueChange={({ formattedValue, value }) =>
//               setValues({ formattedValue, value })
//             }
//           />
//         </div>
//         <Button disabled={nextDisabled} aria-disabled={nextDisabled}>
//           Next
//           <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next" />
//         </Button>
//         <p className={clsx(styles.policyText, "mt-30")}>
//           By entering your number, you’re agreeing to our Terms of Service and
//           Privacy Policy. Thanks!
//         </p>
//       </WhiteBlock>
//     </div>
//   );
// };
import React from "react";
import clsx from "clsx";

import { PatternFormat } from "react-number-format";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import StepInfo from "../../StepInfo";

import styles from "./EnterPhoneStep.module.scss";
import { MainContext } from "@/pages";

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const EnterPhoneStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  const [values, setValues] = React.useState<InputValueState>({
    formattedValue: "",
    value: "",
  });

  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={clsx("mb-30", styles.input)}>
          <img src="/static/world-flag-uzb.png" alt="flag" width={24} />
          <PatternFormat
            className="field"
            format="+998(##)###-##-##"
            mask="_"
            placeholder="+998(91)333-22-11"
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
        <Button
          onClick={onNextStep}
          disabled={nextDisabled}
          aria-disabled={nextDisabled}
        >
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next" />
        </Button>
        <p className={clsx(styles.policyText, "mt-30")}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};
