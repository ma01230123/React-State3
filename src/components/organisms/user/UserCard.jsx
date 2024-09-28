import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWihtName } from "../../molecules/User/UserIconWihtName";
import { UserProvider } from '../../../providers/UseProvider';
import {memo} from 'react';


export const UserCard = memo((props) => {
  console.log('UserCard');
  const {user} = props;
  return(
      <Card>
        <UserIconWihtName image={user.image} name={user.name}/>
        <SDl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </SDl>
      </Card>
  );
});

const SDl =  styled.dl`
  text-align: left;
  dt{
    float: left;
  }
  dd{
    padding:0 0 8px 32px;
    overflow-wrap: break-word;
  }
`;
