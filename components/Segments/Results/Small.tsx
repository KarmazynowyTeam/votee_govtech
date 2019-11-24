import React from "react";
import { Segment } from "..";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ClearIcon from "@material-ui/icons/Clear";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { TextField, Chip } from "@material-ui/core";
import authContainer from "../../../containers/auth";
import { Subscribe } from "unstated";
import Router from "next/router";
//@ts-ignore
import Fade from "react-reveal/Fade";

//@ts-ignore
import Swal from "sweetalert2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
      "&:hover": {
        backgroundColor: "rgba(48,56,69, 0.3)"
      }
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  })
);

const images = [
  {
    url: "/referendal.png",
    title: "Referendum on some subject",
    width: "70vw",
    end: "21.12.2020",
    start: "01.10.2020",
    voted: false,
    id: 826381273681237
  },
  {
    url: "/european.png",
    title: "European Parliment",
    width: "70vw",
    end: "21.12.2020",
    voted: true,
    id: 2736726372637
  }
];

export default function Small() {
  const classes = useStyles();
  authContainer.setState({ search: undefined });

  return (
    <Segment>
      <div style={{ textAlign: "center" }}>
        <img
          src="/results.svg"
          height="auto"
          width="275vw"
          style={{ marginTop: "5vh", marginBottom: "-4vh" }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Search"
          style={{ marginBottom: "5vh" }}
          color="secondary"
          onChange={e => {
            authContainer.setState({ search: e.target.value });
          }}
        />
        <br />
        <div style={{ marginBottom: "10vh" }}>
          <Subscribe to={[authContainer]}>
            {container =>
              images.length > 0 ? (
                images.map(
                  image =>
                    ((container.state.search &&
                      (image.title.includes(container.state.search) ||
                        image.end.includes(container.state.search))) ||
                      !container.state.search ||
                      container.state.search === "") && (
                      <Fade bottom>
                        <ButtonBase
                          focusRipple
                          key={image.title}
                          className={classes.image}
                          focusVisibleClassName={classes.focusVisible}
                          style={{
                            width: "70vw",
                            height: "30vh",
                            marginBottom: "2vh"
                          }}
                        >
                          <span
                            className={classes.imageSrc}
                            style={{
                              backgroundImage: `url(${image.url})`
                            }}
                          />
                          <span className={classes.imageBackdrop} />
                          <span className={classes.imageButton}>
                            <Typography
                              component="span"
                              variant="subtitle1"
                              color="inherit"
                              className={classes.imageTitle}
                              onClick={() =>
                                Swal.fire(
                                  "Nothing here yet",
                                  "Sorry it's not ready yet :C",
                                  "warning"
                                )
                              }
                            >
                              {image.title}
                              {container.state.isLoggedIn &&
                                (image.voted ? (
                                  <DoneOutlineIcon
                                    style={{ marginLeft: "1vw" }}
                                  />
                                ) : (
                                  <ClearIcon style={{ marginLeft: "1vw" }} />
                                ))}
                              <span className={classes.imageMarked} />
                            </Typography>
                          </span>
                          <Chip
                            deleteIcon={
                              <HourglassEmptyIcon style={{ fill: "white" }} />
                            }
                            label={"End: " + image.end}
                            style={{
                              right: 5,
                              bottom: 5,
                              position: "absolute",
                              backgroundColor: "rgb(48,56,69)",
                              color: "white"
                            }}
                            onDelete={() => console.log("a")}
                          />
                        </ButtonBase>
                      </Fade>
                    )
                )
              ) : (
                <div>Nothing to vote for now.</div>
              )
            }
          </Subscribe>
        </div>
      </div>
    </Segment>
  );
}
