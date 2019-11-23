import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import Results from "../components/Segments/Results";

export default class Main extends Component {
  componentDidMount() {
    sizeContainer.changeSize(window);
  }
  render() {
    return (
      <Layout>
        <div id="results">
          <Results />
        </div>
      </Layout>
    );
  }
}
