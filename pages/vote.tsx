import Layout from "../components/Layout";
import Router, { useRouter } from "next/router";
import authContainer from "../containers/auth";
import Vote from "../components/Segments/Vote";
import sizeContainer from "../containers/size";
import React, { Component } from "react";

export default class Main extends Component {
  componentDidMount() {
    sizeContainer.changeSize(window);
    !authContainer.state.isLoggedIn && Router.push("/voting");
  }
  render() {
    return (
      <Layout>
        <div id="voting">
          <Sub />
        </div>
      </Layout>
    );
  }
}

const Sub = () => {
  var router = useRouter();
  const id = router.query.id && router.query.id;
  return <Vote id={id} />;
};
