import { Box, Button, Container, Modal, TextField } from "@mui/material";
import { ChangeEvent, useRef } from "react";
export interface INoteModalProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export function NoteModal({
  open = true,
  setOpen = () => !open,
}: INoteModalProps) {
  const style: React.CSSProperties = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 1,
  };

  const textfieldStyle: React.CSSProperties = {
    width: "100%",
    marginBottom: 5,
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(e.target.value);
  };
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <TextField
          style={textfieldStyle}
          autoFocus
          multiline
          rows={10}
          onChange={onChange}
        />
        <Button>SAVE</Button>
      </Box>
    </Modal>
  );
}
