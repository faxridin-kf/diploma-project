import { useRouter } from "next/navigation";
import React from "react";
import { Avatar } from "../../../components/Avatar";
import { Button } from "../../../components/Button";
import ProfileComponent from "../../../components/Profile";
import { Header } from "../../../components/Header";
const Profile: React.FC = () => {
  const router = useRouter();
  console.log(router);
  // const { id } = router.query();
  return (
    <>
      <Header />
      <div className="container mt-40">
        <ProfileComponent
          fullname="frank"
          username="frankie"
          avatarUrl="https://avatars.githubusercontent.com/u/66880870?v=4"
          aboutText="all about me"
        />
      </div>
    </>
  );
};

export default Profile;
