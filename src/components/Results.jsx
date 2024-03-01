import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Results = ({ searchResults, addTrackToPlaylist }) => {
  const items = searchResults.items;
  return (
    <Card
      sx={{
        textAlign: "center",
        height: "500px",
        backgroundColor: "#DEDDDD",
      }}
    >
      <CardHeader title="RESULTS">Results</CardHeader>
      <Divider />
      <List
        sx={{
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        {items &&
          items.map((item) => {
            return (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => addTrackToPlaylist(item)}
                  >
                    <AddIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={item.name}
                  secondary={`${item.artists[0].name} | ${item.album.name}`}
                ></ListItemText>
              </ListItem>
            );
          })}
      </List>
    </Card>
  );
};

export default Results;
