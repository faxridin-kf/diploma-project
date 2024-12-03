import { useRouter } from "next/navigation";
import React from "react";
const Profile: React.FC = () => {
  const router = useRouter();
  console.log(router);
  // const { id } = router.query();
  return (
    <>
      <h1>this is profile page</h1>
    </>
  );
};

export default Profile;
