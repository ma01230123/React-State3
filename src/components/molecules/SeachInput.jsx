import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import {memo} from 'react';



export const SeachInput = memo(() => {
  console.log('SeachInput');
  return(
      <SContainer>
        <Input placeholder="検索条件を入力"/>
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
  );
});


const SButtonWrapper = styled.div`
  padding-left:8px;
`;
const SContainer = styled.div`
  display:flex;
  align-items:center;
`;