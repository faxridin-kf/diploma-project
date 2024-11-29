import { WelcomeStep } from "../../components/steps/WelcomeSteps";
import { EnterNameStep } from "../../components/steps/EnterNameStep";
import { GitHubStep } from "../../components/steps/GithubStep";
import { ChooseAvatarStep } from "../../components/steps/ChooseAvatarStep";
import React from "react";
import { EnterPhoneStep } from "../../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../../components/steps/EnterCodeStep";

type StepComponent = React.FC<{}>;

const stepsComponent: { [key: number]: StepComponent } = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(5);
  const Step = stepsComponent[step];

  return <>{Step ? <Step /> : null}</>;
}
