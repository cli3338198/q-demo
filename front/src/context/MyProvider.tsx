import { ReactNode, createContext, useState, useEffect } from "react";
import { JobsType, MyContextType } from "../types/types";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { debounce } from "../utils/utils";

export const myContext = createContext<MyContextType>({} as MyContextType);

export default function MyProvider({ children }: { children: ReactNode }) {
  const [navToggled, setNavToggled] = useState(false);
  const [jobDrawerToggled, setJobDrawerToggled] = useState(false);
  const [selectedJob, setSelectedJob] = useState<null | JobsType>(null);
  const [filter, setFilter] = useState("");
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (mediumScreen) {
      setNavToggled(false);
    }
  }, [mediumScreen]);

  const debouncedFilter = debounce(setFilter, 300);

  return (
    <myContext.Provider
      value={{
        navToggled,
        setNavToggled,
        jobDrawerToggled,
        setJobDrawerToggled,
        selectedJob,
        setSelectedJob,
        filter,
        setFilter: debouncedFilter,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
