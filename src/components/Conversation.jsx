import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../assets/arrow-down.png";
import { setOptionsOpen } from "../redux/slices/messagesSlice";

export default function Conversation({ active, name, desc, onClick, avatar }) {
  const dispatch = useDispatch();
  const state = useSelector((st) => st);
  const { optionsOpen } = state.messages;

  return (
    <ListItem
      button={optionsOpen}
      onClick={onClick}
      sx={{
        borderRadius: 1,
        border: `1px solid ${active ? "#11B1A5" : "#1F222A"}`,
      }}
      secondaryAction={
        !optionsOpen ? (
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(setOptionsOpen(true))}
          >
            <Avatar src={arrowDown}></Avatar>
          </IconButton>
        ) : null
      }
    >
      <ListItemAvatar>
        <Avatar src={avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={desc} />
    </ListItem>
  );
}
