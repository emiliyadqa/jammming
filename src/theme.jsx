import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111211",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "rgba(21,24,19,0.87)",
    },
  },
});

export default theme;
