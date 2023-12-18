import { Box, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChat, setOptionsOpen } from "../redux/slices/messagesSlice";
import Conversation from "./Conversation";

export default function Selector() {
  const dispatch = useDispatch();
  const { bots, activeChat } = useSelector((st) => st.messages);

  return (
    <Box sx={{ height: "100vh", mt: 4 }}>
      <Stack alignItems="center" spacing={2}>
        {bots.map(({ id, name, desc, avatar }, index) => (
          <Conversation
            key={index}
            avatar={avatar}
            name={name}
            desc={desc}
            active={id === activeChat}
            onClick={() => {
              dispatch(setActiveChat(id));
              dispatch(setOptionsOpen(false));
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
