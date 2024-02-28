import { Search } from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import access_token from "../services/auth-token";

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

const SearchInput = () => {
  const inputRef = useRef(null);
  const [serchResult, setSearchResult] = useState("");

  const onSearch = (value) => {
    axios
      .get(`https://api.spotify.com/v1/search?q=${value}&type=track`, {
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
    //console.log(inputRef.current.value);
    onSearch(inputRef.current.value);
    //console.log("Search Result:", serchResult);
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
