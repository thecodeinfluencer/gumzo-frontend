import { List, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";

export default function Conversations() {
  const { bots, activeChat } = useSelector((st) => st.messages);
  const activeBot = bots.find((bot) => bot.id === activeChat);

  return (
    <Stack sx={{ my: 3 }}>
      <List>
        <Conversation
          active
          avatar={activeBot?.avatar || ""}
          name={activeBot?.name || "Select a bot"}
          desc={activeBot?.desc || "Select a bot to start chatting"}
        />
      </List>
    </Stack>
  );
}
