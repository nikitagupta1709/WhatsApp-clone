import React from 'react'
import styled from "styled-components";

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    cursor: pointer;
    background: white;
    padding: 15px 12px;
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
    font-family: sans-serif;
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
    font-size: 12px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.45);

`;

export const Contact = () => {
  return (
    <ContactItem>
        <ProfileIcon src='/profile/elon.jpg' />
        <ContactInfo>
            <ContactName>hvygv</ContactName>
            <MessageText>iuhih</MessageText>
        </ContactInfo>
        <MessageTime>05:24PM</MessageTime>
    </ContactItem>
    
  )
}
