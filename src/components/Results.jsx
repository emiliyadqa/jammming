import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Results = () => {
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
      <List>
        <ListItem>Song 1</ListItem>
        <ListItem>Song 2</ListItem>
        <ListItem>Song 3</ListItem>
        <ListItem>Song 4</ListItem>
      </List>
    </Card>
  );
};

export default Results;
