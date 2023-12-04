import {
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  TextField,
  CardHeader,
  IconButton,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

export interface ICardProps {
  tags?: string[];
  text?: string;
}

export function Note({ tags, text }: ICardProps) {
  return (
    <Card
      sx={{
        width: 350,
        height: 280,
        margin: 2,
        backgroundColor: "#919191",
        borderRadius: 5,
      }}
    >
      <CardHeader
        action={[
          <IconButton children={<Edit />} key={text + "edit"} />,
          <IconButton children={<Delete />} key={text + "delete"} />,
        ]}
      />
      <CardContent>
        <TextField
          id={text}
          style={{ width: "100%" }}
          multiline
          rows={4}
          value={
            text ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima"
          }
          disabled
        />
        <Breadcrumbs
          style={{ paddingTop: 16 }}
          aria-label="breadcrumb"
          separator=" "
        >
          {tags ||
            ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"].map((tag) => (
              <Link underline="none" key={tag} style={{ color: "black" }}>
                {tag}
              </Link>
            ))}
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
}
