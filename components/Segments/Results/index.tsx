import React from "react";
import { Segment } from "..";
import authContainer from "../../../containers/auth";
import Large from "./Large";
import sizeContainer from "../../../containers/size";
import Small from "./Small";

export default function Voting() {
  authContainer.setState({ search: undefined });

  return (
    <Segment>
      {sizeContainer.state.size == "large" ? <Large /> : <Small />}
    </Segment>
  );
}
