import { Box, Card, ThemeProvider } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import theme from "./theme";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="header">
        <NavBar></NavBar>
      </Box>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
