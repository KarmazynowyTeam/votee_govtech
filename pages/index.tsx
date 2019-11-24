import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import { Home } from "../components/Segments";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import authContainer from "../containers/auth";
import Router, { useRouter } from "next/router";

type Params = {
  accountNumber?: any;
  accountType?: any;
  address?: any;
};

type State = {
  size: boolean | "large" | "medium" | "small";
};

export default class Main extends Component<Params, State> {
  constructor(props: any) {
    super(props);
    this.state = { size: false };
    console.log(this.props);
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    size = sizeContainer.changeSize(window);
    this.setState({ size: size });
  }
  render() {
    return (
      <Layout>
        <div id="home">
          <Sub size={this.state.size} />
        </div>
      </Layout>
    );
  }
}

const Sub = ({ size }: any) => {
  var router = useRouter();
  const number = router.query.accountNumber && router.query.accountNumber;
  const type = router.query.accountType && router.query.accountType;
  const address = router.query.address && router.query.address;

  console.log(number, type, address);
  return <Home size={size} />;
};
