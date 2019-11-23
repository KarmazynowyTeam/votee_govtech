import { Container, Row } from "react-bootstrap";
import { Paper, Typography } from "@material-ui/core";
//@ts-ignore
import Typist from "react-typist";
//@ts-ignore
import TypistLoop from "react-typist-loop";

function Large() {
  return (
    <div className="row" id="home">
      <div className="left header">
        <Container style={{ marginTop: "10vh", marginLeft: "10vw" }}>
          <Row>
            <img src="/logotype.svg" height="500vh" width="auto" />
          </Row>
        </Container>
      </div>
      <div className="right">
        <Paper
          style={{
            marginTop: "10vh",
            marginRight: "20vh",
            height: "80vh",
            backgroundColor: "rgb(48,56,69)",
            color: "white",
            padding: "5vh 5vh"
          }}
        >
          <Typography
            variant="h1"
            component="h3"
            style={{
              transition: "0.05s",
              fontSize: "7vh",
              color: "rgb(91,221,64)"
            }}
          >
            <Row>
              <div style={{ marginRight: "1vw", color: "white" }}>
                Voting, just
              </div>
              <TypistLoop interval={500}>
                {["faster", "safer", "easier"].map(text => (
                  <Typist
                    key={text}
                    cursor={{
                      show: true,
                      blink: true,
                      element: "|"
                    }}
                  >
                    {text}
                    <Typist.Backspace count={text.length} delay={1500} />
                  </Typist>
                ))}
              </TypistLoop>
            </Row>
          </Typography>
          <Typography
            component="p"
            style={{ marginTop: "7.5vh", fontSize: "2.25vh" }}
          >
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce sit amet leo sit amet eros aliquet efficitur mollis vel orci.
            Sed tempor at tellus et mollis. Cras in dui eget dui varius
            malesuada. Etiam efficitur laoreet enim et congue. Aliquam eu
            tincidunt massa. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Suspendisse justo libero,
            dignissim sed finibus vel, tempus eu mi. Donec ac urna tortor.
            Integer convallis volutpat nunc vel porta. Proin non eleifend magna,
            imperdiet efficitur urna. Sed id neque pharetra, tristique quam vel,
            finibus velit. Cras nec metus urna. Aliquam est lorem, laoreet quis
            nibh in, sodales malesuada ipsum. Donec eget maximus tellus.
            Vestibulum porta, augue ut convallis tempor, nisl quam congue purus,
            ac tincidunt lorem magna et leo. Vivamus lectus quam, placerat at
            est a, fringilla consectetur magna.
          </Typography>
        </Paper>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          width: 100%;
        }

        .left {
          flex: 50%;
        }

        .header {
          font-size: 10vh;
        }

        .right {
          flex: 50%;
        }
      `}</style>
    </div>
  );
}

export default Large;
