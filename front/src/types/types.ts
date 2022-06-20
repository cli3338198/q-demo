export type TeamMemberType = {
  id: string;
  name: string;
  title: string;
  picture: string;
};

export type MyContextType = {
  navToggled: boolean;
  setNavToggled: React.Dispatch<React.SetStateAction<boolean>>;
};
