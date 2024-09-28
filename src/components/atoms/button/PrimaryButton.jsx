import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const PrimaryButton = (props) => {
  const {children} = props;
  return(
      <SButtom>{children}</SButtom>
  );
};

const SButtom = styled(BaseButton)`
  background-color:#40514e;
`;