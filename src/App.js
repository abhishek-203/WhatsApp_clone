import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AccountProvider } from "./context/AccountProvider";
function App() {
  const clientId =
    "164771160965-cfumd2cus51v3chd38k3gfg4f2fv2m22.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
