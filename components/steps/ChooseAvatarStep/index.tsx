// import React, { useContext, useState, useRef, useEffect } from "react";
// import clsx from "clsx";
// import { WhiteBlock } from "../../WhiteBlock";
// import { Button } from "../../Button";
// import { StepInfo } from "../../StepInfo";
// import { Avatar } from "../../Avatar";

// import styles from "./ChooseAvatarStep.module.scss";
// import { MainContext, UserData } from "../../../pages"; // Ensure UserData is imported if used
// import { Axios } from "../../../core/axios";

// // Define the type for the upload response
// interface UploadResponse {
//   url: string;
// }

// // Define the type for the component's props if needed
// // If there are no props, this can be omitted
// interface ChooseAvatarStepProps {}

// const uploadFile = async (file: File): Promise<UploadResponse> => {
//   const formData = new FormData();
//   formData.append("photo", file);

//   const { data } = await Axios({
//     method: "POST",
//     url: "/upload",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   });

//   return data;
// };

// export const ChooseAvatarStep: React.FC<ChooseAvatarStepProps> = () => {
//   const { onNextStep, setFieldValue, userData } = useContext(MainContext);

//   // Ensure userData is typed correctly
//   const avatarLetters = userData.fullname
//     .split(" ")
//     .map((s) => s[0])
//     .join("");

//   const [avatarUrl, setAvatarUrl] = useState<string>(userData.avatarUrl);
//   const inputFileRef = useRef<HTMLInputElement | null>(null);

//   const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const target = event.target;
//     const file = target.files?.[0]; // Use optional chaining to safely access files
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setAvatarUrl(imageUrl);
//       const data = await uploadFile(file);
//       target.value = ""; // Clear the input value after upload
//       setAvatarUrl(data.url);
//       setFieldValue("avatarUrl", data.url);
//     }
//   };

//   useEffect(() => {
//     const currentInputRef = inputFileRef.current;
//     if (currentInputRef) {
//       currentInputRef.addEventListener("change", handleChangeImage);
//     }

//     // Cleanup the event listener on component unmount
//     return () => {
//       if (currentInputRef) {
//         currentInputRef.removeEventListener("change", handleChangeImage);
//       }
//     };
//   }, []);

//   return (
//     <div className={styles.block}>
//       <StepInfo
//         icon="/static/celebration.png"
//         title={`Okay, ${userData?.fullname}!`}
//         description="How’s this photo?"
//       />
//       <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
//         <div className={styles.avatar}>
//           <Avatar
//             width="120px"
//             height="120px"
//             src={avatarUrl}
//             letters={avatarLetters}
//           />
//         </div>
//         <div className="mb-30">
//           <label htmlFor="image" className="link cup">
//             Choose a different photo
//           </label>
//         </div>
//         <input id="image" ref={inputFileRef} type="file" hidden />
//         <Button onClick={onNextStep}>
//           Next
//           <img className="d-ib ml-10" src="/static/arrow.svg" alt="Arrow" />
//         </Button>
//       </WhiteBlock>
//     </div>
//   );
// };

import React, { useContext, useRef, useEffect } from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import StepInfo from "../../StepInfo";
import { Avatar } from "../../Avatar";

import styles from "./ChooseAvatarStep.module.scss";

export const ChooseAvatarStep: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleChangeImage = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log(target.files);
  };

  useEffect(() => {
    const currentInput = inputFileRef.current;
    if (currentInput) {
      currentInput.addEventListener("change", handleChangeImage);
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener("change", handleChangeImage);
      }
    };
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title={`Okay, Fakhriddin Kuchkarov!`}
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar
            width="120px"
            height="120px"
            src="https://avatars.githubusercontent.com/u/66880870?v=4"
            letters="this is hot"
          />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden />
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt="Arrow" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
