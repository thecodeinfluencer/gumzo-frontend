import React from "react";
import Chats from "./Chats";
import Conversations from "./Conversations";
import Navbar from "./Navbar";

export default function Bots() {
  return (
    <>
      <Navbar fixed />
      <Conversations />
      <Chats />
    </>
  );
}
