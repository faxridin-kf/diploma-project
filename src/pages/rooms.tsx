import React from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ConversationCard } from "../../components/ConversationCard";
import Link from "next/link";

const Rooms: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mt-40 d-flex align-items-center justify-content-between">
        <h2>All converstions</h2>
        <Button color="green"> + Start a room </Button>
      </div>
      <div className=" container mt-20">
        <Link href={"/rooms/test-room"}>
          <ConversationCard
            title="Creating clone ClubHouse"
            avatars={[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]}
            guests={["leyle", "anna"]}
            guestsCount={3}
            speakerCount={2}
          />
        </Link>
      </div>
    </>
  );
};

export default Rooms;
