import { ReactNode, createContext, useState } from "react";
import { MyContextType } from "../types/types";

export const myContext = createContext<MyContextType>({} as MyContextType);

export default function MyProvider({ children }: { children: ReactNode }) {
  const [navToggled, setNavToggled] = useState(false);

  return (
    <myContext.Provider value={{ navToggled, setNavToggled }}>
      {children}
    </myContext.Provider>
  );
}
