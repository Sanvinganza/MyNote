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
import { ChangeEvent, useRef, useState } from "react";
import { findTags, strToHTML } from "../helpers";
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
  const textRef =
    useRef<string>(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
  laborum totam magnam eligendi, rerum et. awser fqawe fqwe{" "}
  <b>#tag</b> qwe qwe`);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (tags !== findTags(e.target.value)) {
      setTags(findTags(e.target.value));
    }

    console.log(e.target.value);
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
          <Typography
            contentEditable
            style={{
              width: 400,
              minHeight: 40,
              marginBottom: 5,
            }}
            onChange={onChange}
            children={<span>{strToHTML(textRef.current)}</span>}
          />
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

const style: React.CSSProperties = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: 5,
  padding: 1,
};
