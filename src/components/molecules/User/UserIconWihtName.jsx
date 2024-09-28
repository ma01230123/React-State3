import React,{useContext,memo} from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UseProvider";


export const UserIconWihtName = memo((props) => {
  const {image,name} = props;
  const {userInfo} = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return(
    <SContainer>
        <img width={160} height={160} src={image} alt={name}　/>
        <p>{name}</p>
        {isAdmin && <SEdit>変更</SEdit>}
    </SContainer>
  );
});

const SContainer =  styled.div`
  text-align: center;
  img{
    border-radius: 50vh;
  }
  p{
    font-size:18px;
    font-weight:bold;
    color:#40514e;
  }
`;
const SEdit =  styled.span`
color:#AAA;
text-decoration: underline;
cursor: pointer;
`;
