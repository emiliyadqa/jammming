import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Results from "./Results";
import Playlist from "./Playlist";

const MainContainer = ({ searchResults }) => {
  const [selectedTracks, setSelectedTracks] = useState<any[]>([]);

  const addTrackToPlaylist = (item) => {
    if (!selectedTracks.includes(item)) {
      setSelectedTracks([...selectedTracks, item]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    const updatedPlaylistTracks = selectedTracks.filter(
      (track) => track.id !== trackId
    );
    setSelectedTracks(updatedPlaylistTracks);
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
          searchResults={searchResults}
          addTrackToPlaylist={addTrackToPlaylist}
        ></Results>
      </Container>
      <Container>
        <Playlist
          playlistTracks={selectedTracks}
          removeTrackFromPlaylist={removeTrackFromPlaylist}
        ></Playlist>
      </Container>
    </Stack>
  );
};

export default MainContainer;
