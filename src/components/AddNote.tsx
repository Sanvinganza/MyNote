import { Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function AddNote() {
  return (
    <>
      <Card
        onClick={() => {}}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",

          width: 350,
          height: 280,
          margin: 2,
          backgroundColor: "#919191",
          borderRadius: 5,
        }}
      >
        <IconButton style={{ width: "100%", borderRadius: 0 }}>
          <AddIcon style={{ width: 64, height: 64 }} />
        </IconButton>
      </Card>
    </>
  );
}
