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
            style={{ marginTop: "6vh", fontSize: "2vh" }}
          >
            Welcome to Votee! Votee works on the polish e-puap that allows us to confirm your identity by digital signature. All private information is
            stored on your browser and is encrypted before being sent to the
            blockchain, so make sure you are using a personal device and not a
            public one. If you don’t own a bank account in a European country,
            please go to your nearest polling booth to vote. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fusce sit amet leo sit amet
            eros aliquet efficitur mollis vel orci.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Small;
