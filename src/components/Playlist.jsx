import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Playlist = () => {
  return (
    <Card>
      <CardHeader
        title="Create Playlist"
        sx={{ textAlign: "center" }}
      ></CardHeader>
      <List>
        <ListItem>Song 1</ListItem>
        <ListItem>Song 2</ListItem>
        <ListItem>Song 3</ListItem>
        <ListItem>Song 4</ListItem>
      </List>
    </Card>
  );
};

export default Playlist;
