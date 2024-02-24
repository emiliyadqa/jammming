import { styled } from "@mui/material/styles";
import { AccountCircle, Audiotrack, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SearchInput from "./SearchInput";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const AccountIcon = styled(Box)(({ theme }) => ({}));

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Jammming
        </Typography>
        <Audiotrack sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchInput />
        <AccountIcon>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(e) => setOpen(true)}
            color="inherit"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </AccountIcon>
      </StyledToolbar>
      <Menu
        id="menu-appbar"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Log Out</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
