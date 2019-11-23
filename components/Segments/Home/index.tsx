import React, { Component } from "react";
import { Segment } from "..";
import Large from "./Large";
import Small from "./Small";

type Props = {
  size: "large" | "medium" | "small" | boolean;
};

export default class Home extends Component<Props, {}> {
  render() {
    const { size } = this.props;
    return (
      <Segment>
       {size == "large" ? <Large /> : <Small />}
      </Segment>
    );
  }
}
