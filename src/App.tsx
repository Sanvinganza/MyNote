import { AddNote } from "./components/AddNote";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { Container, Grid } from "@mui/material";
import { NotesContainer } from "./components/NotesContainer";

function App() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Header />
      <NotesContainer />
    </Container>
  );
}

export default App;
