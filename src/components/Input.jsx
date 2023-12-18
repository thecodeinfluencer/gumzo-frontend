import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostListDataMutation } from "../api/apiSlice";
import send from "../assets/direct-right.png";
import { addMessage, setLoading } from "../redux/slices/messagesSlice";
import {
  Avatar,
  Card,
  Container,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";

export default function Input() {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((st) => st);
  const { activeChat } = state.messages;
  const chats = state.messages[activeChat];

  const [sendChat, { isLoading }] = usePostListDataMutation();

  const sendChatMessage = async () => {
    if (message.trim() === "") return;
    dispatch(addMessage({ bot: activeChat, owner: "Human", message }));
    setMessage("");

    dispatch(setLoading(true));

    const { data, error } = await sendChat({
      url: `/chat/${activeChat}`,
      body: {
        conversation: [...chats, { owner: "Human", message: message }],
      },
    });

    if (error) {
      console.log(error);
      dispatch(
        addMessage({
          bot: activeChat,
          owner: "AI",
          message: "Sorry, something went wrong. Try again?",
        })
      );
      dispatch(setLoading(false));
    }

    if (data.message) {
      dispatch(
        addMessage({
          bot: activeChat,
          owner: "AI",
          message: data.message,
        })
      );
    }

    dispatch(setLoading(false));
  };

  return (
    <Stack
      alignItems="center"
      sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}
    >
      <Container maxWidth="sm">
        <Card sx={{ background: "#181A20" }}>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            spacing={2}
          >
            <TextField
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              InputProps={{
                endAdornment: (
                  <IconButton disabled={isLoading} onClick={sendChatMessage}>
                    <Avatar src={send} alt="" />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Card>
      </Container>
    </Stack>
  );
}
