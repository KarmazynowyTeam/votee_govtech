import React, { PureComponent } from "react";
import { Provider, Subscribe } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import sizeContainer from "../../containers/size";
import Head from "next/head";
import Sidenav from "../Sidenav";

type Props = {
  children: any;
};

export default class Layout extends PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>Votee - voting redesigned</title>
        </Head>
        <Provider>
          <Subscribe to={[sizeContainer]}>
            {container => (
              <>
                <Sidenav selected={children.props.id} />
                {children}
              </>
            )}
          </Subscribe>
        </Provider>
        <style jsx global>{`
          body {
            background-color: rgb(73, 73, 73);
          }
          img {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .no-select {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </>
    );
  }
}
