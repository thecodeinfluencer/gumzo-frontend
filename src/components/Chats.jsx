import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import Input from "./Input";
import { Box, Stack, Typography } from "@mui/material";

export default function Chats() {
  const anchor = React.useRef(null);
  const state = useSelector((st) => st);
  const { activeChat, loading } = state.messages;
  const chats = state.messages[activeChat];

  useEffect(() => {
    anchor.current.scrollIntoView({ behavior: "smooth" });
  }, [chats.length]);

  return (
    <>
      <Stack
        spacing={1}
        style={{
          overflowY: "scroll",
          height: window.innerWidth > 992 && "calc(100vh - 200px)",
        }}
      >
        {chats.map(({ owner, message }, index) => (
          <Chat key={index} message={message} local={owner === "Human"} />
        ))}
        {!!loading && <Chat message="typing..." />}
        {chats.length < 1 && (
          <Typography sx={{ my: 5, py: 5 }}>Start a conversation</Typography>
        )}
        <Box ref={anchor} sx={{ width: "100%", height: 80 }}></Box>
      </Stack>
      <Input />
    </>
  );
}
