import { Save } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

const Playlist = ({ playlistTracks, removeTrackFromPlaylist }) => {
  return (
    <Card
      sx={{
        height: "500px",
        backgroundColor: "#DEDDDD",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title="CREATE PLAYLIST"
        sx={{ textAlign: "center" }}
      ></CardHeader>
      <Divider />
      <List sx={{ flexGrow: 1, overflowY: "auto" }}>
        {playlistTracks.map((track) => {
          return (
            <ListItem
              key={track.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => removeTrackFromPlaylist(track.id)}
                >
                  <RemoveIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={track.name}
                secondary={`${track.artists[0].name} | ${track.album.name}`}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
      <CardActions sx={{ justifyContent: "center", marginBottom: "10px" }}>
        <Button size="large" variant="outlined" startIcon={<Save />}>
          Save to Sotify
        </Button>
      </CardActions>
    </Card>
  );
};

export default Playlist;
