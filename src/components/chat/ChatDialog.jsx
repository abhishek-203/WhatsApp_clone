import { Box, Dialog, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./mainChat/EmptyChat";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rdba(0, 0, 0, 0.14);
`;

const dialogStyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  margin: "20px",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hiden",
};

const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hidenBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
