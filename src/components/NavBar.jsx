import { styled } from "@mui/material/styles";
import { AccountCircle, Audiotrack, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchInput = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "60%",
  display: "flex",
  justifyContent: "flex-start",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "7px",
}));

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
        <SearchInput>
          <SearchIconWrapper>
            <Search color="action" />
          </SearchIconWrapper>
          <InputBase placeholder="Search some tracks..."></InputBase>
        </SearchInput>
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
