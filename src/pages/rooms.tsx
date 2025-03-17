import React from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ConversationCard } from "../../components/ConversationCard";
import Link from "next/link";
import Axios from "../../core/axios";

interface Room {
  id: string;
  title: string;
  avatars: string[];
  guests: string[];
  guestsCount: number;
  speakersCount: number;
}
interface Props {
  rooms: Room[];
}

const Rooms: React.FC<Props> = ({ rooms = [] }) => {
  return (
    <>
      <Header />
      <div className="container mt-40 d-flex align-items-center justify-content-between">
        <h2>All converstions</h2>
        <Button color="green"> + Start a room </Button>
      </div>
      <div className=" grid mt-30 container mt-20">
        {rooms.map((obj: Room) => (
          <Link key={obj.id} href={`/rooms/${obj.id}`}>
            <ConversationCard
              title={obj.title}
              avatars={obj.avatars}
              guests={obj.guests}
              guestsCount={obj.guestsCount}
              speakerCount={obj.speakersCount}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await Axios.get("/rooms.json");
    console.log(data);
    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    console.log(`error in this ${error}`);
    return {
      props: {
        rooms: [],
      },
    };
  }
}

export default Rooms;
