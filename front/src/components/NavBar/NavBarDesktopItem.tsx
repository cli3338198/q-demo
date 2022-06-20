import { ListItemText } from "@mui/material";
import { ReactNode } from "react";

export default function NavBarDesktopItem({
  children,
}: {
  children: ReactNode;
}) {
  return <ListItemText>{children}</ListItemText>;
}
