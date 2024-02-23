import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import React from "react";
import Results from "./Results";
import Playlist from "./Playlist";

// const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: "beige",
// }));

const MainContainer = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} marginTop="30px">
      <Container>
        <Results></Results>
      </Container>
      <Container>
        <Playlist></Playlist>
      </Container>
    </Stack>
  );
};

export default MainContainer;
