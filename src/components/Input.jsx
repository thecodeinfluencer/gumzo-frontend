import { SendRounded } from "@mui/icons-material";
import {
  Alert,
  Card,
  Container,
  IconButton,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostListDataMutation } from "../api/apiSlice";
import { addMessage, setLoading } from "../redux/slices/messagesSlice";

export default function Input({ exceeded }) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((st) => st);
  const { activeChat } = state.messages;
  const chats = state.messages[activeChat];

  const [sendChat, { isLoading }] = usePostListDataMutation();

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const sendChatMessage = async () => {
    if (message.trim() === "") return;

    dispatch(setLoading(true));

    const { data, error } = await sendChat({
      url: `/chat/${activeChat}`,
      body: {
        conversation: [...chats, { owner: "Human", message: message }],
      },
    });

    if (!error) {
      dispatch(addMessage({ bot: activeChat, owner: "Human", message }));
      setMessage("");
    }

    if (error) {
      setError(error?.data?.info || error?.data?.message || error?.message);
      setOpen(true);
      dispatch(setLoading(false));
    }

    if (data?.message) {
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
              disabled={exceeded}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                exceeded
                  ? "Trial exceeded for this conversation"
                  : "Type a message"
              }
              InputProps={{
                endAdornment: (
                  <IconButton
                    disabled={isLoading || exceeded}
                    onClick={sendChatMessage}
                  >
                    <SendRounded />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Card>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </Stack>
  );
}
