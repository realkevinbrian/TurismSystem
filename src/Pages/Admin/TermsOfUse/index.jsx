import { Card, Container, Box, Grid } from "@mui/material";
import React from "react";
import TextEditor from "../../../Components/TextEditor";
import { InputGroup } from "../../../Components/Global/Reusable";

function index() {
  return (
    <Container maxWidth="xl">
      <Card style={{ padding: "20px", marginTop: "30px" }}>
        <Header />
        <TextEditor />
      </Card>
    </Container>
  );
}

export default index;

function Header() {
  return (
    <Box>
      <Grid container>
        <Grid item lg={5}>
          <h3>Termos de uso e Politica de Privacidade</h3>
        </Grid>

        <Grid
          item
          lg={7}
          container
          spacing={2}
          style={{ alignContent: "center" }}
        >
          <Grid item lg={6}>
            <InputGroup>
              <label>Link para video + tela Principal</label>
              <input type="text" placeholder="Adicionar o link do youtube" />
            </InputGroup>
          </Grid>

          <Grid item lg={6}>
            <InputGroup>
              <label>Fale conosco</label>
              <input
                type="text"
                placeholder="Numero cadastrado no Whatsapp para contato"
              />
            </InputGroup>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
