import { Container, Row } from "react-bootstrap";
import { Paper, Typography } from "@material-ui/core";
//@ts-ignore
import Typist from "react-typist";
//@ts-ignore
import TypistLoop from "react-typist-loop";

function Small() {
  return (
    <div id="home">
      <div className="header" style={{ textAlign: "center" }}>
        <Container style={{ marginTop: "10vh", textAlign: "center" }}>
          <Row style={{ display: "block" }}>
            <img src="/logotype.svg" height="auto" width="220vw" />
          </Row>
        </Container>
      </div>
      <div>
        <Paper
          style={{
            marginTop: "10vh",
            backgroundColor: "rgb(17,66,5)",
            color: "white",
            padding: "5vh 10vh"
          }}
        >
          <Typography
            variant="h1"
            component="h3"
            style={{
              transition: "0.05s",
              fontSize: "4vh",
              color: "rgb(91,221,64)"
            }}
          >
            <Row>
              <div
                style={{
                  marginRight: "3vw",
                  marginLeft: "3vw",
                  color: "white"
                }}
              >
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
            style={{ marginTop: "5vh", fontSize: "2vh" }}
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
    </div>
  );
}

export default Small;
