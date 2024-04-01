/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
function Borrow() {
  return <div>Borrowers page</div>;
}

export default withAuthenticationRequired(Borrow, {
  onRedirecting: () => <div>Loading...</div>,
});
