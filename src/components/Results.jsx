import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Results = ({ serchResults, addToPlaylist }) => {
  const [selectedTracks, setSelectedTracks] = useState([]);

  useEffect(() => {
    addToPlaylist(selectedTracks);
  }, [selectedTracks]);

  const handleAddToPlaylist = (item) => {
    if (!selectedTracks.includes(item)) {
      setSelectedTracks([...selectedTracks, item]);
    }
  };

  const items = serchResults.items;
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
                    onClick={() => handleAddToPlaylist(item)}
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
