import { Box, Dialog, List, ListItem, styled, Typography } from "@mui/material";
import React from "react";
import { qrCodeImage } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const styledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hiden",
};

const LoginDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <List>
            <ListItem>1. Open WhatsApp on your computer</ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Container>
        <Box>
          <QRCode src={qrCodeImage} alt="qr code" />
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
