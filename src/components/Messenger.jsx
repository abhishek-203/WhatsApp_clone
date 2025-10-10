import { AppBar, Box, styled, Toolbar } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import { useContext } from "react";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #04b39cff;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>

    </>
  );
};

export default Messenger;
