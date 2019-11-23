import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
  //@ts-ignore
} from "@trendmicro/react-sidenav";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Link from "next/link";
import authContainer from "../../containers/auth";
import Router from "next/router";

type Props = {
  selected: "home" | "voting" | "results";
};

export default class Sidenav extends Component<Props> {
  render() {
    const { selected } = this.props;
    return (
      <SideNav
        //@ts-ignore
        onSelect={selected => {
          // Add your code here
        }}
        style={{ background: "rgba(48,56,69, 0.9)", position: "fixed" }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected={selected} style={{ height: "80%" }}>
          <NavItem eventKey="home" onClick={() => Router.push("/")}>
            <NavIcon>
              <HomeIcon />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="voting" onClick={() => Router.push("/voting")}>
            <NavIcon>
              <DoneOutlineIcon />
            </NavIcon>
            <NavText>Voting</NavText>
          </NavItem>
          <NavItem
            eventKey="results"
            style={{ height: "90%" }}
            onClick={() => Router.push("/results")}
          >
            <NavIcon>
              <AssignmentTurnedInIcon />
            </NavIcon>
            <NavText>Results</NavText>
          </NavItem>
          {authContainer.state.isLoggedIn ? (
            <NavItem style={{ bottom: 0 }}>
              <NavIcon>
                <ArrowBackIcon />
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          ) : (
            <NavItem style={{ bottom: 0 }}>
              <NavIcon>
                <ArrowForwardIcon />
              </NavIcon>
              <NavText>Login</NavText>
            </NavItem>
          )}
        </SideNav.Nav>
      </SideNav>
    );
  }
}
