import React from 'react'
import styled from "styled-components";

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
    :hover{
        background:#ebebeb;
    }
`;
const ProfileIcon = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;
const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
`;
const ContactName = styled.span`
    width: 100%;
    font-size: 16px;
    color: black;
`;
const MessageText = styled.span`
    width: 100%;
    font-size: 14px;
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.8);
`;
const MessageTime = styled.span`
    font-size : 12px;
    margin-right: 10px;
    color:rgba(0,0,0,0.45)
    white-space:nowrap;

`;

export const Contact = ({ userData, setChat, userInfo }) => {
    const otherUser = 
        userData.channelUsers?.find(
        (userObj)=> userObj.email !== userInfo.email
        ) || userData;
    
    // const lastMessage = userData.messages && userData.messages.length
    // ? userData.messages[userData.messages.length - 1]
    // :{};
    console.log(otherUser, "otherUser");
    
  return (
    <ContactItem onClick={() => setChat(otherUser)}>
        <ProfileIcon src={otherUser.profilePic} />
        <ContactInfo>
            <ContactName>{otherUser?.name}</ContactName>
            <MessageText>{userData?.lastText}</MessageText>
        </ContactInfo>
        <MessageTime>{userData?.lastTextTime}</MessageTime>
    </ContactItem>
    
  )
}
