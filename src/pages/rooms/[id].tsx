import React from "react";
import { Header } from "../../../components/Header";
import BackButton from "../../../components/BackButton";
import Room from "../../../components/Room";
import Axios from "../../../core/axios";
import { GetServerSidePropsContext } from "next";
interface RoomType {
  id: string;
  title: string;
}
interface Props {
  room: RoomType | null;
}
const RoomPage: React.FC<Props> = ({ room }) => {
  return (
    <>
      <Header />
      <div className="container">
        <BackButton title="All rooms" href="/rooms" />
      </div>
      {room ? <Room title={room.title} /> : <div>Room not found</div>}
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { id } = context.query;
    if (!id) return { props: { room: null } };
    const { data } = await Axios.get<RoomType[]>("/rooms.json");
    if (!Array.isArray(data)) return { props: { room: null } };

    const room = data.find((obj) => obj.id === id.toString());
    return { props: { room: room || null } };
  } catch (error) {
    console.error("Error fetching room:", error);
    return { props: { room: null } };
  }
}

export default RoomPage;
