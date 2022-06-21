import { ReactNode, createContext, useState } from "react";
import { JobsType, MyContextType } from "../types/types";

export const myContext = createContext<MyContextType>({} as MyContextType);

export default function MyProvider({ children }: { children: ReactNode }) {
  const [navToggled, setNavToggled] = useState(false);
  const [jobDrawerToggled, setJobDrawerToggled] = useState(false);
  const [selectedJob, setSelectedJob] = useState<null | JobsType>(null);

  return (
    <myContext.Provider
      value={{
        navToggled,
        setNavToggled,
        jobDrawerToggled,
        setJobDrawerToggled,
        selectedJob,
        setSelectedJob,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
