/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
function Lend() {
  return <div>Lenders page</div>;
}

export default withAuthenticationRequired(Lend, {
  onRedirecting: () => <div>Loading...</div>,
});
