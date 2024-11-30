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
type MainContexProps = {
  onNextStep: () => void;
  step: number;
};
export const MainContext = React.createContext<MainContexProps>(
  {} as MainContexProps,
);
export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponent[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <MainContext.Provider value={{ step, onNextStep }}>
        <Step />
      </MainContext.Provider>
    </>
  );
}
