import { Box, Card, ThemeProvider } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import theme from "./theme";
import MainContainer from "./components/MainContainer";
import { useRef, useState } from "react";
import axios from "axios";
import access_token from "./services/auth-token";

function App() {
  const [searchResults, setSearchResult] = useState("");
  const inputRef = useRef(null);

  const onSearch = (value) => {
    axios
      .get(`https://api.spotify.com/v1/search?q=${value}&type=track&limit=50`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(function (res) {
        setSearchResult(res.data.tracks);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="header">
        <NavBar handleSubmit={handleSubmit} inputRef={inputRef}></NavBar>
      </Box>
      <MainContainer searchResults={searchResults} />
    </ThemeProvider>
  );
}

export default App;
