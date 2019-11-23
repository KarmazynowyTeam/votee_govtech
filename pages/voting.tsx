import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import Voting from "../components/Segments/Voting";

export default class Main extends Component {
  componentDidMount() {
    sizeContainer.changeSize(window);
  }
  render() {
    return (
      <Layout>
        <div id="voting">
          <Voting />
        </div>
      </Layout>
    );
  }
}
