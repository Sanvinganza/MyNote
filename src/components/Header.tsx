import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import { Input } from "@mui/material";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <>
      <Input
        name="search"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
}
