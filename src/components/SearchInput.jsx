import { Search } from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";
import React, { useRef, useState } from "react";

const SearchInputField = styled("form")(({ theme }) => ({
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

async function getAccessToken() {
  try {
    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "15dd23c9e24648918b26e966059eb4a7");
    formData.append("client_secret", "4ac84a69b7a944e88a0b6caf49dc6007");

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    if (!result.ok) {
      throw new Error("Failed to fetch access token");
    }

    const { access_token } = await result.json();
    return access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}

async function printAccessToken() {
  try {
    const accessToken = await getAccessToken();
    console.log("Access Token:", accessToken);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const SearchInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    printAccessToken();
  };

  return (
    <SearchInputField onSubmit={(event) => handleSubmit(event)}>
      <SearchIconWrapper>
        <Search color="action" />
      </SearchIconWrapper>
      <InputBase
        placeholder="Search some tracks..."
        inputRef={inputRef}
      ></InputBase>
    </SearchInputField>
  );
};

export default SearchInput;
