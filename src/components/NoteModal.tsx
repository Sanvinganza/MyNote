import { Alert, Box, Button, Modal, Snackbar } from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import InputField from "./InputField";

export interface INoteModalProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}
interface IUpdateProps {
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
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

    if (lastChar === " " || lastChar === "\n") {
      console.log("word: ", word, "words: ", words);

      if (lastChar === "\n") {
        words.push(<br />);
      } else {
        words.push(" ");
      }

      // if (tags !== findTags(e.target.value)) {
      //   setTags(findTags(e.target.value));
      // }

      if (word.current.startsWith("#")) {
        setWords([
          ...words,
          <span style={{ color: "green" }}>{word.current}</span>,
        ]);
      } else {
        setWords([...words, <>{word.current}</>]);
      }

      word.current = "";
    } else {
      word.current += lastChar;
    }
  };

  const save = () => {
    setOpenAlert(true);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <InputField />
          <Button onClick={save}>SAVE</Button>
        </Box>
      </Modal>

      <Update openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </>
  );
}

const style: React.CSSProperties = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: 5,
  padding: 1,
};

const Update = ({ openAlert, setOpenAlert }: IUpdateProps) => (
  <Snackbar
    open={openAlert}
    autoHideDuration={2000}
    onClose={() => setOpenAlert(false)}
  >
    <Alert severity="success" sx={{ width: "100%" }}>
      Update!
    </Alert>
  </Snackbar>
);
