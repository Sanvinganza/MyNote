import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import { findTags } from "../helpers";
export interface INoteModalProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export function NoteModal({
  open = true,
  setOpen = () => !open,
}: INoteModalProps) {
  const [openAlert, setOpenAlert] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [words, setWords] = useState<React.ReactNode[]>([]);
  const word = useRef<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const lastChar = e.target.value[e.target.value.length - 1];
    word.current += lastChar;

    if (lastChar === " " || lastChar === "\n") {
      console.log("word: ", word, "words: ", words);

      if (tags !== findTags(e.target.value)) {
        setTags(findTags(e.target.value));
      }

      if (word.current.startsWith("#")) {
        setWords([
          ...words,
          <span style={{ color: "green" }}>{word.current}</span>,
        ]);
      } else {
        setWords([...words, <>{word.current}</>]);
      }

      word.current = "";
    }
  };

  const save = () => {
    setOpenAlert(true);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Breadcrumbs aria-label="breadcrumb">
            {tags.map((tag) => (
              <Typography key={tag} color="text.primary">
                {tag}
              </Typography>
            ))}
          </Breadcrumbs>
          <TextField multiline style={textStyle} onChange={onChange} />
          <Breadcrumbs aria-label="breadcrumb">
            {words.map((word) => (
              <Typography
                style={{
                  width: 400,
                  minHeight: 40,
                  marginBottom: 5,
                }}
              >
                {word}
              </Typography>
            ))}
          </Breadcrumbs>
          <Button onClick={save}>SAVE</Button>
        </Box>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        onClose={() => setOpenAlert(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Update!
        </Alert>
      </Snackbar>
    </>
  );
}

const textStyle: React.CSSProperties = {};

const style: React.CSSProperties = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: 5,
  padding: 1,
};
