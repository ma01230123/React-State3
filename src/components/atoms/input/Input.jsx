import styled from "styled-components";

export const Input = (props) => {
  const {placeholder = ''} = props;
  return(
      <SInput type="text" placeholder={placeholder} />
  );
};

const SInput = styled.input`
  background-color:#FFF;
  padding:8px 16px;
  border: solid #ddd 1px;
  border-radius: 50vh;
  outline: none;
`;