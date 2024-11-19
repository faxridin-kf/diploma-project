import { WelcomeStep } from "../../components/steps/WelcomeSteps";
import { EnterNameStep } from "../../components/steps/EnterNameStep";
import { GitHubStep } from "../../components/steps/GithubStep";
import { ChooseAvatarStep } from "../../components/steps/ChooseAvatarStep";
import React from "react";

type StepComponent = React.FC<{}>;

const stepsComponent: { [key: number]: StepComponent } = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(3);
  const Step = stepsComponent[step];

  return <>{Step ? <Step /> : null}</>;
}
