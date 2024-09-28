import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import React,{ useContext } from "react";
import { UserContext } from "../../providers/UseProvider";

export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({isAdmin:true});
    history.push('/users');
  };
  const onClickGeneral = () => {
    setUserInfo({isAdmin:false});
    history.push('/users');
  };
  return(
    <>
      <STop >
        <p>top</p>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </STop >
    </>
  );
};

const STop = styled.div`
  text-align: center;


`;