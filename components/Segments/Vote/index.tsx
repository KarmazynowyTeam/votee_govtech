import React from "react";
import { Segment } from "..";
import authContainer from "../../../containers/auth";
import Large from "./Large";
import sizeContainer from "../../../containers/size";
import Small from "./Small";

type Props = {
  id: string | string[];
};

export default function Vote({ id }: Props) {
  authContainer.setState({ search: undefined });

  return (
    <Segment>
      {sizeContainer.state.size == "large" ? (
        <Large id={id} />
      ) : (
        <Small id={id} />
      )}
    </Segment>
  );
}
