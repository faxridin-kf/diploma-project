import { useRouter } from "next/navigation";
import React from "react";
import { Header } from "../../../components/Header";
import BackButton from "../../../components/BackButton";

const RoomPage: React.FC = () => {
  const router = useRouter();
  console.log(router);
  // const { id } = router.query();
  return (
    <>
      <Header />
      <div className="container">
        <BackButton title="All rooms" href="/rooms" />
        <h2>Room</h2>
      </div>
    </>
  );
};

export default RoomPage;
