import { Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Playlist = () => {
  return (
    <Card
      sx={{
        height: "500px",
        backgroundColor: "#DEDDDD",
      }}
    >
      <CardHeader
        title="CREATE PLAYLIST"
        sx={{ textAlign: "center" }}
      ></CardHeader>
      <Divider />
      <List>
        <ListItem>Song 1</ListItem>
        <ListItem>Song 2</ListItem>
        <ListItem>Song 3</ListItem>
        <ListItem>Song 4</ListItem>
      </List>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="large" variant="outlined" startIcon={<Save />}>
          Save to Sotify
        </Button>
      </CardActions>
    </Card>
  );
};

export default Playlist;
