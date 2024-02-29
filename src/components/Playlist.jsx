import { Save } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

const Playlist = ({ playlistTacks }) => {
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
        {playlistTacks.map((track) => {
          return (
            <ListItem key={track.id}>
              <ListItemText
                primary={track.name}
                secondary={`${track.artists[0].name} | ${track.album.name}`}
              ></ListItemText>
            </ListItem>
          );
        })}
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
