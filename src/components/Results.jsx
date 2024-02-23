import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Results = () => {
  return (
    <Card sx={{ textAlign: "center" }}>
      <CardHeader title="Results">Results</CardHeader>
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
