import styled from "styled-components";
import { SeachInput } from "../molecules/SeachInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UseProvider";
import { useContext } from "react";



const users = [...Array(10).keys()].map(((val) => {
  return{
    id:val,
    name:`じゃ${val}`,
    // image:`../../assets/premium_photo.avif`,
    image:'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email:'bbb@aaa.com',
    phone:'11-1111-1111',
    company:{
      name:'あああ',
    },
    website:'https'
  }
}));


export const Users = () => {
  const {userInfo,setUserInfo} = useContext(UserContext);
  const onclickSwich = () => setUserInfo({isAdmin:!userInfo.isAdmin});

  return(
    <>
      <SUsers >
        <h2>ユーザー一覧</h2>
        <SeachInput />
        <br />
        <SecondaryButton onClick={onclickSwich}>切り替え</SecondaryButton>
        <SUserArea>
        {users.map((user) => 
          <UserCard key={user.id} user={user}/>
        )}
        </SUserArea>
      </SUsers>
    </>
  );
};

const SUsers = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
padding-top: 40px;
width: 100%;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-gap:20px;
`;