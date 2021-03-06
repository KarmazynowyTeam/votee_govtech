import React from "react";
import {
  TableHead,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button
} from "@material-ui/core";
import { Row } from "react-bootstrap";
//@ts-ignore
import Slide from "react-reveal/Slide";
import authContainer from "../../../containers/auth";
//@ts-ignore
import Swal from "sweetalert2";
import Router from "next/router";

type Props = {
  id: string | string[];
};

const lists = [
  {
    members: [
      "Iga Górecka",
      "Edyta Wróbel",
      "Natalia Krajewska",
      "Andrea Adamska",
      "Aniela Ostrowska",
      "Henryk Pawlak",
      "Maksymilian Kalinowski",
      "Daniel Zieliński",
      "Eryk Włodarczyk",
      "Izyda Chmielewska"
    ],
    name: "Komitet Wyborczy Lewica",
    image: "https://pbs.twimg.com/media/ECAHjSgXUAI6ap9?format=jpg&name=small"
  },
  {
    members: [
      "Helena Górska",
      "Grzegorz Andrzejewski",
      "Stefania Sadowska",
      "Alicja Jankowska",
      "Andrzej Lis",
      "Anna Mysz",
      "Paweł Byda",
      "Mazrena Korek",
      "Piotr Ross",
      "Michał Finat"
    ],
    name: "Komitet Wyborczy Koalicja Obywatelska",
    image:
      "data:image/png;base64,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"
  },
  {
    members: [
      "Oktawia Zalewska",
      "Amanda Stronicka",
      "Tymoteusz Znakowy",
      "Marcela Kaźmierczak",
      "Rafał Szerek",
      "Daniel Wykrota",
      "Zara Wójcik",
      "Ewa Laskowska",
      "Bronisław Kucharski",
      "Anita Chwojnicka"
    ],
    name: "Komitet Wyborczy Prawo i Sprawiedliwość",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_PiS.png"
  },
  {
    members: [
      "Pamela Kozłowska",
      "Maja Szybka",
      "Arleta Woźniak",
      "Przemysław Gmach",
      "Urszula Smutna",
      "Florentyna Sadowska",
      "Henryk Jasny",
      "Wincent Czarny",
      "Damian Hyrlik",
      "Dominik Myk"
    ],
    name: "Komitet Wyborczy Polskie Stronnictwo Ludowe",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/PSL-logo.jpg"
  },
  {
    members: [
      "Weronika Cieślak",
      "Dagmara Dąbrowska",
      "Tomasz Ogrodnik",
      "Mateusz Wiek",
      "Elena Andrzejewska",
      "Kacper Rojek",
      "Gabriel Zagada",
      "Sebastian Urantowski",
      "Nadia Ktoś",
      "Oleg Rysek"
    ],
    name: "Komitet Wyborczy Konfederacja",
    image:
      "data:image/jpeg;base64,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"
  },
  {
    members: [
      "Marta Głowacka",
      "Artur Górski",
      "Anna Ankiewicz",
      "Adam Duda",
      "Lara Adamska",
      "Kamil Kosel",
      "Zbigniew Czech",
      "Ludmiła Jaka",
      "Filip Jurek",
      "Łucja Czarnecka"
    ],
    name: "Komitet Wyborczy Kukiz'15",
    image:
      "https://bialczynski.pl/wp-content/uploads/2018/01/loga-kukiz15-biale-czerwone-do-pobrania-ikons3.png"
  }
];

export default function Small({ id }: Props) {
  const [state, setState] = React.useState({
    checked: "idx:" + "false" + "id:" + "false"
  });
  return (
    <div style={{ textAlign: "center" }}>
      {/* <img
        src="/now.svg"
        height="400vh"
        width="auto"
        style={{ marginTop: "2vh", marginBottom: "-10vh" }}
      /> */}
      <br />

      <Slide bottom cascade>
        <div style={{ marginLeft: "15vw", marginRight: "0vw" }}>
          {lists.map((val, idx) => (
            <Paper
              style={{
                width: "83vw",
                marginBottom: "1vh"
              }}
              id={"" + idx}
            >
              <Row
                style={{
                  textAlign: "center",
                  width: "70vw",
                  marginLeft: "5vw",
                  marginRight: "1vw",
                  paddingTop: "2vh"
                }}
              >
                <img
                  src={val.image}
                  height="40vh"
                  width="40vh"
                  style={{ marginRight: "1vw" }}
                />
                <h2>Lista nr {idx + 1}</h2>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                  width: "80vw",
                  marginLeft: "4vw",
                  marginRight: "1vw"
                }}
              >
                <h5>{val.name}</h5>
              </Row>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nr</TableCell>
                    <TableCell align="left">Vote</TableCell>
                    <TableCell align="center" style={{ paddingRight: "5vw" }}>
                      Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {val.members.map((member, id) => (
                    <TableRow key={member}>
                      <TableCell align="left">{id + 1}</TableCell>
                      <TableCell align="left">
                        <Checkbox
                          color="default"
                          inputProps={{
                            "aria-label": "decorative checkbox"
                          }}
                          checked={state.checked === "idx:" + idx + "id:" + id}
                          onChange={e =>
                            state.checked === e.target.value
                              ? setState({
                                  ...state,
                                  checked: "false"
                                })
                              : setState({
                                  ...state,
                                  checked: e.target.value
                                })
                          }
                          value={"idx:" + idx + "id:" + id}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {member}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          ))}
        </div>
      </Slide>
      <Slide>
        <Row
          style={{
            marginLeft: "15vw",
            marginRight: "2vw",
            textAlign: "center",
            marginBottom: "5vh"
          }}
        >
          <Button
            style={{
              width: "90vw",
              height: "5vh",
              textAlign: "center",
              color: "white"
            }}
            onClick={() => {
              setTimeout(() => {
                !authContainer.state.voted
                  ? Swal.fire(
                      "Vote Given!",
                      "Thank you for voting, every vote counts!",
                      "success"
                    )
                  : Swal.fire(
                      "Dont Cheat!",
                      "You have already voted before!",
                      "error"
                    );
              }, 1000);
              setTimeout(() => authContainer.setState({ voted: true }), 500);
              setTimeout(() => Router.push("/voting"), 500);
            }}
          >
            Submit
          </Button>
        </Row>
      </Slide>
    </div>
  );
}
