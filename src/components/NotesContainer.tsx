import { Note } from "./Note";
import { AddNote } from "./AddNote";
import { Grid } from "@mui/material";
import { NoteModal } from "./NoteModal";

export function NotesContainer() {
  const tags = [1, 2, 3];

  return (
    <>
      <Grid container spacing={1}>
        {tags.map((el) => (
          <Grid key={el} children={<Note />} />
        ))}
        <Grid children={<AddNote />} />
      </Grid>
      <NoteModal open={true} />
    </>
  );
}
