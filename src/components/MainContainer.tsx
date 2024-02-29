import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Results from "./Results";
import Playlist from "./Playlist";

const MainContainer = ({ serchResults }) => {
  const [playlistTacks, setPlaylistTacks] = useState([]);

  const addToPlaylist = (items) => {
    setPlaylistTacks(items);
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      marginTop="30px"
      justifyContent="center"
    >
      <Container>
        <Results
          serchResults={serchResults}
          addToPlaylist={addToPlaylist}
        ></Results>
      </Container>
      <Container>
        <Playlist playlistTacks={playlistTacks}></Playlist>
      </Container>
    </Stack>
  );
};

export default MainContainer;
