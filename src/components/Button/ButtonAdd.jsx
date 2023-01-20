import { But } from "./ButtonAdd.styled";

export const ButtonAdd = ({ onClicked }) => {
  return (
    <But type="submit" onClick={onClicked}>
      Add contact
    </But>
  );
};