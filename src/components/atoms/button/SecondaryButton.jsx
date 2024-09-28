import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const SecondaryButton = (props) => {
  const {children,onClick} = props;
  return(
      <SButtom onClick={onClick}>{children}</SButtom>
  );
};

const SButtom = styled(BaseButton)`
  background-color:#11999e;
`;