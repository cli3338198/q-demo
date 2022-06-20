import { ListItemText } from "@mui/material";
import { ReactNode, useContext } from "react";
import { myContext } from "../../context/MyProvider";

export default function NavDrawerItem({ children }: { children: ReactNode }) {
  const { setNavToggled } = useContext(myContext);

  return (
    <ListItemText
      sx={{
        textAlign: "center",
      }}
      onClick={() => setNavToggled(false)}
    >
      {children}
    </ListItemText>
  );
}
