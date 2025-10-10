import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { Search as SearchItem } from "@mui/icons-material";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;
const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  width: 100%;
  margin: 0 13;
  border-radius: 10px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  color: #919191;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 15px;
  font-size: 14px;
`;

const Search = () => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchItem fontSize="small" />
        </Icon>
        <InputField placeholder="Search or start new chat" />
      </Wrapper>
    </Component>
  );
};

export default Search;
