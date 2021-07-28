import { MdLibraryMusic } from "react-icons/md";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { songsActions } from "../store";
import { device } from "../other/device";

const StyledLibraryToggler = styled(MdLibraryMusic)`
  color: rgb(34, 34, 34);
  background: #f5f5f5;
  border: 2px solid rgb(100, 100, 100);
  border-radius: 50%;
  font-size: 2rem;
  position: absolute;
  padding: 0.4rem;
  right: 1rem;
  margin: 0rem 0;
  cursor: pointer;
  z-index: 2;
  @media ${device.mobileL} {
    margin: -0.5rem -0.2rem;
  }
`;

const LibraryToggler = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(songsActions.toggleLibrary());
    console.log("library toggled");
  };
  return <StyledLibraryToggler onClick={toggleHandler} />;
};

export default LibraryToggler;
