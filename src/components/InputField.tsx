import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

import { Breadcrumbs, FormControl, Select, Typography } from "@mui/material";

export default function InputField() {
  const [chars, setChars] = React.useState<string[]>([]);

  const [tags, setTags] = React.useState<string[]>(["tag1", "tag2"]);
  const [nodes, setNodes] = React.useState<JSX.Element[]>([]);

  const currentWordRef = React.useRef("");

  const SelectTag = () => {
    const handleChangeTag = () => {};

    return (
      <Box sx={{ minWidth: 60 }}>
        <FormControl>
          <Select autoFocus labelId="select-label" onChange={handleChangeTag}>
            {tags.map((tag) => (
              <MenuItem value={tag}>{tag}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const lastChar = event.target.value[event.target.value.length - 1];

    currentWordRef.current += lastChar;

    if (lastChar === "#") {
      currentWordRef.current = "";

      setNodes([...nodes, <SelectTag />]);
    } else {
      setNodes([...nodes, <>{lastChar}</>]);
      setChars([...chars, lastChar]);
    }

    console.log(chars);
  };

  return (
    <Box sx={{ minWidth: 360 }}>
      <TextField
        id="standard-multiline-static"
        multiline
        inputProps={{ style: { color: "transparent" } }}
        rows={4}
        variant="standard"
        onChange={handleChange}
      />

      <div style={{ position: "absolute", top: 25, left: 25, fontSize: 18 }}>
        {nodes.map((node) => (
          <React.Fragment key={uuidv4()}>{node}</React.Fragment>
        ))}
      </div>

      <Breadcrumbs aria-label="breadcrumb" separator=" ">
        {tags.map((tag) => (
          <Typography key={tag} color="text.primary">
            {tag}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  );
}
