import { NavBarContainer, NavBarHeader } from "../../styles/navbar";

export default function NavBarMobile({ matches }: { matches: boolean }) {
  return (
    <>
      <NavBarContainer
        id="navbar"
        sx={{
          position: "static",
        }}
      >
        <NavBarHeader textAlign={"center"}>Werk</NavBarHeader>
      </NavBarContainer>
    </>
  );
}
