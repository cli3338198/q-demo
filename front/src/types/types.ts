export type TeamMemberType = {
  id: string;
  name: string;
  title: string;
  picture: string;
};

export type MyContextType = {
  navToggled: boolean;
  setNavToggled: React.Dispatch<React.SetStateAction<boolean>>;
  jobDrawerToggled: boolean;
  setJobDrawerToggled: React.Dispatch<React.SetStateAction<boolean>>;
  selectedJob: null | JobsType;
  setSelectedJob: React.Dispatch<React.SetStateAction<JobsType | null>>;
  filter: string;
  setFilter: (...args: any[]) => void;
};

export type JobsType = {
  id: string;
  title: string;
  url: string;
};

export type FormStateType = {
  fullname: string;
  email: string;
  linkedin: string;
};
