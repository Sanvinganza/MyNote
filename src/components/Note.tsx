import {
  Card,
  CardActions,
  CardContent,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
export interface ICardProps {}

export function Note(props: ICardProps) {
  return (
    <Card>
      <CardContent>
        <TextareaAutosize />
      </CardContent>
      <CardActions>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="none">MUI</Link>
          <Link underline="none">Core</Link>
        </Breadcrumbs>
      </CardActions>
    </Card>
  );
}
